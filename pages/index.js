import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { products, collections } from '../data/products'
import strings from '../content/strings.json'

const TESTIMONIALS = [
  {
    name: 'Ananya Krishnan',
    city: 'Bengaluru',
    rating: 5,
    text: 'The Brass Diya Set is even more beautiful in person. I could see the slight file marks on each one — you can really tell they were made by hand. Ordered two sets for Diwali, family kept asking where I got them.',
    product: 'Brass Diya Set',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Rohit Mehta',
    city: 'Mumbai',
    rating: 5,
    text: 'Bought the Block Print Indigo Throw for my bedroom. The quality is unreal for the price. The indigo colour has this depth to it that photos don\'t capture. Third purchase from Kiko Living and they\'ve been consistent every time.',
    product: 'Block Print Indigo Throw',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Shreya Nair',
    city: 'Chennai',
    rating: 5,
    text: 'The Ceramic Serving Bowl is my favourite thing in my kitchen right now. It\'s exactly as described — the glaze variation at the rim is subtle and lovely. Came really well packed. No damage at all.',
    product: 'Ceramic Serving Bowl',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Varun Sharma',
    city: 'Delhi',
    rating: 5,
    text: 'Stone Mortar & Pestle has completely replaced my electric grinder for whole spices. The weight and texture are perfect. Love that I know exactly where it was made and by whom. That matters to me.',
    product: 'Stone Mortar & Pestle',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Meera Iyer',
    city: 'Hyderabad',
    rating: 5,
    text: 'Gifted the Copper Lantern to my sister for her housewarming. She messaged me at night with a photo of the light patterns it throws on the wall. That photo said everything. Ordering one for myself now.',
    product: 'Copper Lantern',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80',
  },
  {
    name: 'Aditya Joshi',
    city: 'Pune',
    rating: 5,
    text: 'Linen Cushion Cover — bought 4 of them. They\'re on our sofa right now and they look like something from a boutique hotel. My wife who is very particular about these things approved immediately. High praise.',
    product: 'Linen Cushion Cover',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&h=80&q=80',
  },
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

      {/* Delivery banner */}
      <div className="bg-[#1B4332] text-white text-center text-xs py-2 px-4 tracking-wide">
        {strings.delivery_banner.text}
      </div>

      {/* Hero */}
      <section className="bg-[#C4702B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-6 tracking-wider">
              {strings.hero.badge}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-6">
              {strings.hero.headline}
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              {strings.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/catalog"
                className="bg-[#1A1A1A] text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-white hover:text-[#C4702B] transition-colors"
              >
                {strings.hero.cta_primary}
              </Link>
              <Link
                href="#story"
                className="border border-white/40 text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                {strings.hero.cta_secondary}
              </Link>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1567225557594-88d73398c152?auto=format&fit=crop&w=400&h=533&q=80"
                alt="Artisan craft"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&h=533&q=80"
                alt="Handwoven textiles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">Browse by</p>
            <h2 className="font-serif text-3xl font-medium text-[#1A1A1A]">Collections</h2>
          </div>
          <Link href="/catalog" className="text-sm text-stone-500 hover:text-[#C4702B] transition-colors hidden md:block">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collections.map(col => (
            <Link
              key={col.id}
              href={`/catalog?collection=${col.id}`}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-stone-200"
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-serif text-white font-medium text-base leading-snug">
                  {col.name}
                </h3>
                <p className="text-white/70 text-xs mt-0.5">{col.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">Most loved</p>
              <h2 className="font-serif text-3xl font-medium text-[#1A1A1A]">Bestsellers</h2>
            </div>
            <Link href="/catalog" className="text-sm text-stone-500 hover:text-[#C4702B] transition-colors hidden md:block">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section id="story" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&h=500&q=80"
                alt="Artisan at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square mt-10">
              <img
                src="https://images.unsplash.com/photo-1601985705806-3f8cbacf5d35?auto=format&fit=crop&w=500&h=500&q=80"
                alt="Handcrafted products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-4">Who we are</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#1A1A1A] leading-tight mb-6">
              {strings.story_section.headline}
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8 text-base">
              {strings.story_section.body}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8 py-8 border-y border-stone-200">
              <div>
                <p className="font-serif text-3xl font-medium text-[#C4702B]">{strings.story_section.stat_1_number}</p>
                <p className="text-xs text-stone-500 mt-1">{strings.story_section.stat_1_label}</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-[#C4702B]">{strings.story_section.stat_2_number}</p>
                <p className="text-xs text-stone-500 mt-1">{strings.story_section.stat_2_label}</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-[#C4702B]">{strings.story_section.stat_3_number}</p>
                <p className="text-xs text-stone-500 mt-1">{strings.story_section.stat_3_label}</p>
              </div>
            </div>

            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#C4702B] transition-colors"
            >
              {strings.story_section.cta} →
            </Link>
          </div>
        </div>
      </section>

      {/* New in */}
      <section className="bg-[#FAF0E8] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">Just arrived</p>
              <h2 className="font-serif text-3xl font-medium text-[#1A1A1A]">New in</h2>
            </div>
            <Link href="/catalog" className="text-sm text-stone-500 hover:text-[#C4702B] transition-colors hidden md:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {newIn.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-3">What people say</p>
            <h2 className="font-serif text-3xl font-medium text-[#1A1A1A]">4,200+ homes furnished</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C4702B" stroke="#C4702B" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
              <span className="text-sm text-stone-500 ml-2">4.8 average · 3,400+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-[#FAF7F2] rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#C4702B" stroke="#C4702B" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">{t.name}</p>
                    <p className="text-xs text-stone-400">{t.city} · Bought: {t.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            <div>
              <h3 className="font-serif text-xl mb-3">Kiko Living</h3>
              <p className="text-white/50 text-sm leading-relaxed">{strings.footer.tagline}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="/catalog" className="text-sm text-white/70 hover:text-white transition-colors">Catalog</Link>
                <Link href="/returns" className="text-sm text-white/70 hover:text-white transition-colors">{strings.footer.returns}</Link>
                <Link href="/shipping" className="text-sm text-white/70 hover:text-white transition-colors">{strings.footer.shipping}</Link>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">{strings.footer.contact}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Follow Along</h4>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">{strings.footer.instagram}</a>
            </div>
          </div>
          <p className="text-white/30 text-xs mt-8">{strings.footer.copyright}</p>
        </div>
      </footer>
    </>
  )
}
