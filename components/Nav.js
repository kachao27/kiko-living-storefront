import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCart } from '../context/CartContext'
import strings from '../content/strings.json'

export default function Nav() {
  const { count, setDrawerOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    setSearchOpen(false)
    router.push(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`)
    setSearchQuery('')
  }

  return (
    <nav className="sticky top-0 z-40 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium text-[#1A1A1A] tracking-wide flex-shrink-0">
          {strings.nav.brand_name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/catalog" className="text-sm text-stone-600 hover:text-[#C4702B] transition-colors">
            {strings.nav.collections}
          </Link>
          <Link href="/catalog" className="text-sm text-stone-600 hover:text-[#C4702B] transition-colors">
            {strings.nav.catalog}
          </Link>
          <Link href="/#story" className="text-sm text-stone-600 hover:text-[#C4702B] transition-colors">
            {strings.nav.about}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden md:flex items-center">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="text-sm border border-stone-300 rounded-lg px-3 py-1.5 w-48 focus:outline-none focus:border-[#C4702B] bg-white"
                />
                <button type="submit" className="ml-2 text-stone-500 hover:text-[#C4702B]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </button>
                <button type="button" onClick={() => setSearchOpen(false)} className="ml-1 text-stone-400 hover:text-stone-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-stone-500 hover:text-[#C4702B] transition-colors p-1"
                aria-label="Search"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="relative flex items-center gap-1.5 text-sm text-[#1A1A1A] hover:text-[#C4702B] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className="hidden md:inline">{strings.nav.cart}</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#C4702B] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                {count > 9 ? '9+' : count}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-stone-500 hover:text-[#1A1A1A]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen
                ? <path d="M18 6L6 18M6 6l12 12"/>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 text-sm border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#C4702B] bg-white"
            />
            <button type="submit" className="text-stone-500 hover:text-[#C4702B]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </form>
          <Link href="/catalog" className="text-sm text-stone-600" onClick={() => setMenuOpen(false)}>
            {strings.nav.collections}
          </Link>
          <Link href="/catalog" className="text-sm text-stone-600" onClick={() => setMenuOpen(false)}>
            {strings.nav.catalog}
          </Link>
          <Link href="/#story" className="text-sm text-stone-600" onClick={() => setMenuOpen(false)}>
            {strings.nav.about}
          </Link>
        </div>
      )}
    </nav>
  )
}
