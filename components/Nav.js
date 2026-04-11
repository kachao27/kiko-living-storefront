import Link from 'next/link'
import { useState } from 'react'
import strings from '../content/strings.json'

export default function Nav() {
  const [cartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium text-[#1A1A1A] tracking-wide">
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
          <Link href="#story" className="text-sm text-stone-600 hover:text-[#C4702B] transition-colors">
            {strings.nav.about}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-sm text-[#1A1A1A] hover:text-[#C4702B] transition-colors">
            <span className="flex items-center gap-1.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {strings.nav.cart}
              {cartCount > 0 && (
                <span className="bg-[#C4702B] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
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
          <Link href="/catalog" className="text-sm text-stone-600" onClick={() => setMenuOpen(false)}>
            {strings.nav.collections}
          </Link>
          <Link href="/catalog" className="text-sm text-stone-600" onClick={() => setMenuOpen(false)}>
            {strings.nav.catalog}
          </Link>
          <Link href="#story" className="text-sm text-stone-600" onClick={() => setMenuOpen(false)}>
            {strings.nav.about}
          </Link>
        </div>
      )}
    </nav>
  )
}
