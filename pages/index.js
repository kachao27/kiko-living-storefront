import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { products, collections } from '../data/products'
import strings from '../content/strings.json'

export default function Home() {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 4)

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
                className="bg-red-600 text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
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
              <img src="https://picsum.photos/seed/hero-left-kl/400/533" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <img src="https://picsum.photos/seed/hero-right-kl/400/533" alt="" className="w-full h-full object-cover"/>
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
              <img src="https://picsum.photos/seed/story-1-kl/500/500" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="rounded-xl overflow-hidden aspect-square mt-10">
              <img src="https://picsum.photos/seed/story-2-kl/500/500" alt="" className="w-full h-full object-cover"/>
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

      {/* Recently added */}
      <section className="bg-[#FAF0E8] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">Just arrived</p>
              <h2 className="font-serif text-3xl font-medium text-[#1A1A1A]">New in</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.filter(p => p.isNew || !p.bestseller).slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
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
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{strings.footer.returns}</a>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{strings.footer.shipping}</a>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{strings.footer.contact}</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Follow Along</h4>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{strings.footer.instagram}</a>
            </div>
          </div>
          <p className="text-white/30 text-xs mt-8">{strings.footer.copyright}</p>
        </div>
      </footer>
    </>
  )
}
