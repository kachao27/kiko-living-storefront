import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import strings from '../content/strings.json'

const FILTERS = ['All', 'Festive Home', 'Living Spaces', 'Kitchen & Dining', 'Bedroom']

const COLLECTION_MAP = {
  'festive-home': 'Festive Home',
  'living-spaces': 'Living Spaces',
  'kitchen-dining': 'Kitchen & Dining',
  'bedroom': 'Bedroom',
}

export default function Catalog() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (router.query.collection) {
      const matched = COLLECTION_MAP[router.query.collection]
      if (matched) setActiveFilter(matched)
    }
    if (router.query.q) {
      setSearchQuery(router.query.q)
      setActiveFilter('All')
    }
  }, [router.query])

  const filtered = products
    .filter(p => activeFilter === 'All' || p.collection === activeFilter)
    .filter(p => {
      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase()
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q))
      )
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const clearSearch = () => {
    setSearchQuery('')
    router.replace('/catalog', undefined, { shallow: true })
  }

  return (
    <>
      <Head>
        <title>{searchQuery ? `"${searchQuery}" — Kiko Living` : 'Catalog — Kiko Living'}</title>
        <meta name="description" content="Browse all Kiko Living collections — Festive Home, Living Spaces, Kitchen & Dining, Bedroom." />
      </Head>

      <Nav />

      {/* Delivery banner */}
      <div className="bg-[#1B4332] text-white text-center text-xs py-2 px-4 tracking-wide">
        {strings.delivery_banner.text}
      </div>

      {/* Page header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">Shop</p>
          <h1 className="font-serif text-4xl font-medium text-[#1A1A1A] mb-2">
            {searchQuery ? `Results for "${searchQuery}"` : strings.catalog.page_title}
          </h1>
          <p className="text-stone-500 text-sm">{strings.catalog.page_subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search active banner */}
        {searchQuery && (
          <div className="flex items-center gap-3 mb-6 bg-[#FAF0E8] border border-[#C4702B]/20 rounded-xl px-4 py-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4702B" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span className="text-sm text-stone-600 flex-1">
              Showing results for <span className="font-medium text-[#1A1A1A]">"{searchQuery}"</span>
            </span>
            <button onClick={clearSearch} className="text-xs text-[#C4702B] hover:underline">Clear search</button>
          </div>
        )}

        {/* Filters + sort */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-stone-500 whitespace-nowrap">{strings.catalog.sort_label}</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-sm border border-stone-200 rounded-lg px-3 py-2 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#C4702B]"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Best Rated</option>
            </select>
          </div>
        </div>

        <p className="text-xs text-stone-400 mb-6">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-stone-400">
            <p className="font-serif text-xl mb-2">{strings.catalog.empty_state}</p>
            <button
              onClick={() => { setActiveFilter('All'); clearSearch() }}
              className="text-sm text-[#C4702B] hover:underline mt-2"
            >
              View all products
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            <div>
              <h3 className="font-serif text-xl mb-3">Kiko Living</h3>
              <p className="text-white/50 text-sm leading-relaxed">Artisanal home decor from across India.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="/catalog" className="text-sm text-white/70 hover:text-white transition-colors">Catalog</Link>
                <Link href="/returns" className="text-sm text-white/70 hover:text-white transition-colors">Returns & Refunds</Link>
                <Link href="/shipping" className="text-sm text-white/70 hover:text-white transition-colors">Shipping Policy</Link>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Follow Along</h4>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          <p className="text-white/30 text-xs mt-8">© 2026 Kiko Living. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
