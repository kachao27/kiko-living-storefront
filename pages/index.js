import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { products, collections } from '../data/products'
import strings from '../content/strings.json'

const TESTIMONIALS = [
  {
    name: 'Ananya Krishnan', city: 'Bengaluru', rating: 5,
    text: 'The Brass Diya Set is even more beautiful in person. I could see the slight file marks on each one — you can really tell they were made by hand. Ordered two sets for Diwali, family kept asking where I got them.',
    product: 'Brass Diya Set',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Rohit Mehta', city: 'Mumbai', rating: 5,
    text: 'Bought the Block Print Indigo Throw for my bedroom. The indigo colour has this depth to it that photos don\'t capture. Third purchase from Kiko Living — consistent every time.',
    product: 'Block Print Indigo Throw',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Shreya Nair', city: 'Chennai', rating: 5,
    text: 'The Ceramic Serving Bowl is my favourite thing in my kitchen right now. The glaze variation at the rim is subtle and lovely. Came really well packed — no damage at all.',
    product: 'Ceramic Serving Bowl',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Varun Sharma', city: 'Delhi', rating: 5,
    text: 'Stone Mortar & Pestle has completely replaced my electric grinder for whole spices. Love that I know exactly where it was made and by whom. That matters to me.',
    product: 'Stone Mortar & Pestle',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Meera Iyer', city: 'Hyderabad', rating: 5,
    text: 'Gifted the Copper Lantern to my sister for her housewarming. She messaged me at night with a photo of the light patterns it throws on the wall. That photo said everything.',
    product: 'Copper Lantern',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Aditya Joshi', city: 'Pune', rating: 5,
    text: 'Linen Cushion Cover — bought 4 of them. They\'re on our sofa right now and they look like something from a boutique hotel. My wife approved immediately. High praise.',
    product: 'Linen Cushion Cover',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&h=80&q=80',
  },
]

const PRESS = ['YourStory', 'The Hindu', 'Mint Lounge', 'Economic Times', 'India Today', 'Architectural Digest']

const TRUST_ITEMS = [
  'Free delivery above ₹999',
  'Easy 30-day returns',
  'COD available',
  'Handmade in India',
  '340+ artisan families',
  '4.8★ on 3,400+ reviews',
  'Ships in 24 hours',
  'Secure payments',
]

export default function Home() {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 4)
  const newIn = products.filter(p => p.isNew || !p.bestseller).slice(0, 4)

  return (
    <>
      <Head>
        <title>Kiko Living — Artisanal Home Decor from India</title>
        <meta name="description" content="Handcrafted home decor made by artisans across India. Brass, terracotta, ceramics, textiles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      {/* Announcement banner */}
      <div className="bg-[#1B4332] text-white text-center text-xs py-2 px-4 tracking-wide">
        {strings.delivery_banner.text}
      </div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      {/* Split layout: left = padded text col, right = flush image panel */}
      <section className="relative bg-[#C4702B] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_500px]">

          {/* Left — copy, always determines section height */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:py-20 lg:py-24">
            {/* depth gradients scoped to left col */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            <span className="relative inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6 tracking-wider w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
              {strings.hero.badge}
            </span>

            <h1 className="relative font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-5">
              {strings.hero.headline}
            </h1>

            <p className="relative text-white/75 text-base md:text-lg leading-relaxed mb-6 max-w-sm">
              {strings.hero.subheadline}
            </p>

            {/* Social proof */}
            <div className="relative flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40&q=80',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=40&h=40&q=80',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-[#C4702B] object-cover" />
                ))}
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/65 text-xs mt-0.5">Loved by 4,200+ homes</p>
              </div>
            </div>

            <div className="relative flex flex-wrap gap-3">
              <Link href="/catalog" className="bg-white text-[#C4702B] font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-[#FAF0E8] transition-colors shadow-lg shadow-black/10">
                {strings.hero.cta_primary}
              </Link>
              <Link href="#story" className="border border-white/30 bg-white/10 text-white font-medium text-sm px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors">
                {strings.hero.cta_secondary}
              </Link>
            </div>
          </div>

          {/* Right — flush image panel, matches left column height automatically */}
          <div className="hidden md:block relative overflow-hidden">
            {/* Full-bleed main image */}
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&h=900&q=80"
              alt="Beautifully styled home interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient bleed from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C4702B] via-[#C4702B]/60 via-[40%] to-transparent" />
            {/* Dark vignette bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating pottery image */}
            <div className="absolute bottom-8 left-8 w-32 h-32 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Handcrafted pottery"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats card */}
            <div className="absolute top-8 right-8 bg-white/95 rounded-2xl px-4 py-3 shadow-xl text-right">
              <p className="font-serif text-2xl font-semibold text-[#C4702B]">{strings.story_section.stat_1_number}</p>
              <p className="text-xs text-stone-500 mt-0.5">{strings.story_section.stat_1_label}</p>
            </div>

            {/* Ships badge */}
            <div className="absolute bottom-8 right-8 bg-[#1B4332] text-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              <span className="text-xs font-medium">Ships in 24 hrs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST MARQUEE ────────────────────────────────────── */}
      <div className="bg-[#1A1A1A] text-white py-3 overflow-hidden">
        {/* Items duplicated for seamless loop */}
        <div className="flex animate-marquee">
          {[0, 1].map(set => (
            <div key={set} className="flex flex-shrink-0 gap-0">
              {TRUST_ITEMS.map((item, i) => (
                <span key={i} className="text-xs font-medium tracking-wide text-white/70 flex items-center gap-3 px-6 whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full bg-[#C4702B] flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── PRESS BAR ────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100 py-7">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-5 md:gap-12">
          <p className="text-xs text-stone-400 uppercase tracking-widest font-medium whitespace-nowrap">As featured in</p>
          <div className="w-px h-5 bg-stone-200 hidden md:block" />
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            {PRESS.map(name => (
              <span key={name} className="text-stone-300 font-bold text-sm tracking-wider uppercase select-none">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">Browse by</p>
            <h2 className="font-serif text-4xl font-medium text-[#1A1A1A]">Collections</h2>
          </div>
          <Link href="/catalog" className="text-sm text-stone-500 hover:text-[#C4702B] transition-colors hidden md:block">View all →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collections.map(col => (
            <Link key={col.id} href={`/catalog?collection=${col.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-200 block">
              <img src={col.image} alt={col.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-serif text-white font-medium text-lg leading-snug">{col.name}</h3>
                <p className="text-white/65 text-xs mt-1">{col.tagline}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-white/20 rounded-full p-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BESTSELLERS ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">Most loved</p>
              <h2 className="font-serif text-4xl font-medium text-[#1A1A1A]">Bestsellers</h2>
            </div>
            <Link href="/catalog" className="text-sm text-stone-500 hover:text-[#C4702B] transition-colors hidden md:block">View all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {bestsellers.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section id="story" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images — extra bottom padding so floating card doesn't bleed into next section */}
          <div className="relative pb-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=500&h=500&q=80"
                  alt="Handwoven textiles" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square mt-10">
                <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=500&h=500&q=80"
                  alt="Artisan pottery" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Floating impact card — inside pb-10 so it doesn't clip next section */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#C4702B] text-white rounded-2xl px-6 py-4 shadow-xl whitespace-nowrap z-10">
              <p className="font-serif text-2xl font-semibold">12 states</p>
              <p className="text-white/75 text-xs mt-0.5">Artisans sourced from across India</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-4">Who we are</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1A1A1A] leading-tight mb-6">
              {strings.story_section.headline}
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8 text-base">{strings.story_section.body}</p>
            <div className="grid grid-cols-3 gap-6 mb-8 py-8 border-y border-stone-200">
              {[
                [strings.story_section.stat_1_number, strings.story_section.stat_1_label],
                [strings.story_section.stat_2_number, strings.story_section.stat_2_label],
                [strings.story_section.stat_3_number, strings.story_section.stat_3_label],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-serif text-3xl font-medium text-[#C4702B]">{n}</p>
                  <p className="text-xs text-stone-500 mt-1 leading-snug">{l}</p>
                </div>
              ))}
            </div>
            <Link href="/catalog"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-sm font-medium px-7 py-3.5 rounded-xl hover:bg-[#C4702B] transition-colors">
              Explore the collection →
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEW IN ───────────────────────────────────────────── */}
      <section className="bg-[#FAF0E8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">Just arrived</p>
              <h2 className="font-serif text-4xl font-medium text-[#1A1A1A]">New in</h2>
            </div>
            <Link href="/catalog" className="text-sm text-stone-500 hover:text-[#C4702B] transition-colors hidden md:block">View all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {newIn.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-3">What people say</p>
            <h2 className="font-serif text-4xl font-medium text-[#1A1A1A] mb-4">4,200+ homes furnished</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#C4702B" stroke="#C4702B" strokeWidth="0.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
              <span className="text-sm text-stone-500 ml-2">4.8 average · 3,400+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-[#FAF7F2] rounded-2xl p-6 flex flex-col">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#C4702B" stroke="#C4702B" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="text-xs text-stone-400 mt-0.5">{t.city} · {t.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-[#1A1A1A] text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl mb-3">Kiko Living</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">{strings.footer.tagline}</p>
              <div className="flex gap-3 mt-5">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C4702B] flex items-center justify-center transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-5">Shop</h4>
              <div className="flex flex-col gap-3">
                <Link href="/catalog" className="text-sm text-white/65 hover:text-white transition-colors">All Products</Link>
                <Link href="/catalog?collection=festive-home" className="text-sm text-white/65 hover:text-white transition-colors">Festive Home</Link>
                <Link href="/catalog?collection=living-spaces" className="text-sm text-white/65 hover:text-white transition-colors">Living Spaces</Link>
                <Link href="/catalog?collection=kitchen-dining" className="text-sm text-white/65 hover:text-white transition-colors">Kitchen & Dining</Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-5">Help</h4>
              <div className="flex flex-col gap-3">
                <Link href="/returns" className="text-sm text-white/65 hover:text-white transition-colors">Returns & Refunds</Link>
                <Link href="/shipping" className="text-sm text-white/65 hover:text-white transition-colors">Shipping Policy</Link>
                <Link href="/contact" className="text-sm text-white/65 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-white/30 text-xs">{strings.footer.copyright}</p>
            <p className="text-white/20 text-xs">Made with love for Indian craft</p>
          </div>
        </div>
      </footer>
    </>
  )
}
