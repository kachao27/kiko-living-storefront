import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import strings from '../content/strings.json'

const FILTERS = ['All', 'Festive Home', 'Living Spaces', 'Kitchen & Dining', 'Bedroom']

export default function Catalog() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => {
    if (router.query.collection) {
      const map = {
        'festive-home': 'Festive Home',
        'living-spaces': 'Living Spaces',
        'kitchen-dining': 'Kitchen & Dining',
        'bedroom': 'Bedroom',
      }
      const matched = map[router.query.collection]
      if (matched) setActiveFilter(matched)
    }
  }, [router.query])

  const filtered = products
    .filter(p => activeFilter === 'All' || p.collection === activeFilter)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <>
      <Head>
        <title>Catalog — Kiko Living</title>
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
            {strings.catalog.page_title}
          </h1>
          <p className="text-stone-500 text-sm">{strings.catalog.page_subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters + sort */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Filter tabs */}
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

          {/* Sort */}
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

        {/* Count */}
        <p className="text-xs text-stone-400 mb-6">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
        </p>

        {/* Grid */}
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
              onClick={() => setActiveFilter('All')}
              className="text-sm text-[#C4702B] hover:underline mt-2"
            >
              View all products
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-lg mb-2">Kiko Living</p>
          <p className="text-white/30 text-xs">{strings.footer.copyright}</p>
        </div>
      </footer>
    </>
  )
}
