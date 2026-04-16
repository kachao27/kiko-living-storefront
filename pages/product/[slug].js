import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function ProductPage({ product, related }) {
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addToCart } = useCart()
  const router = useRouter()

  if (router.isFallback || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-stone-400 font-serif text-lg">Loading...</p>
      </div>
    )
  }

  const images = [product.image, product.image2 || product.image]

  const handleAddToCart = () => {
    addToCart(product, qty)
  }

  return (
    <>
      <Head>
        <title>{product.name} — Kiko Living</title>
        <meta name="description" content={product.description} />
      </Head>

      <Nav />

      {/* Delivery banner */}
      <div className="bg-[#1B4332] text-white text-center text-xs py-2 px-4 tracking-wide">
        Free delivery on orders above ₹999 · Easy returns · COD available
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400">
          <Link href="/" className="hover:text-[#C4702B] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-[#C4702B] transition-colors">Catalog</Link>
          <span>/</span>
          <Link href={`/catalog?collection=${product.collection.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-[#C4702B] transition-colors">{product.collection}</Link>
          <span>/</span>
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Image gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-[#C4702B]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 rounded-2xl overflow-hidden aspect-square bg-stone-100">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.bestseller && (
                <span className="bg-[#C4702B] text-white text-xs font-medium px-2.5 py-1 rounded-full">BESTSELLER</span>
              )}
              {product.isNew && (
                <span className="bg-[#1B4332] text-white text-xs font-medium px-2.5 py-1 rounded-full">NEW</span>
              )}
            </div>

            <p className="text-xs text-[#C4702B] font-medium uppercase tracking-widest mb-2">{product.collection}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-[#1A1A1A] leading-tight mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24"
                    fill={i < Math.floor(product.rating) ? '#C4702B' : 'none'}
                    stroke="#C4702B" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm text-stone-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-3xl font-semibold text-[#1A1A1A]">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-stone-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="text-sm font-semibold text-[#1B4332] bg-[#1B4332]/10 px-2 py-0.5 rounded-full">{product.discount}% off</span>
                </>
              )}
            </div>

            <p className="text-stone-600 leading-relaxed mb-8 text-base">{product.description}</p>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-12 flex items-center justify-center text-stone-500 hover:bg-stone-50 text-lg"
                >−</button>
                <span className="w-12 text-center text-base font-medium text-[#1A1A1A]">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-12 flex items-center justify-center text-stone-500 hover:bg-stone-50 text-lg"
                >+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#1A1A1A] hover:bg-[#C4702B] text-white font-medium py-3.5 rounded-lg transition-colors text-sm"
              >
                Add to Bag — ₹{(product.price * qty).toLocaleString('en-IN')}
              </button>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-3 mb-8 py-5 border-y border-stone-200">
              <div className="text-center">
                <div className="text-lg mb-1">🚚</div>
                <p className="text-xs text-stone-500 leading-tight">Delivered in<br/><span className="font-medium text-[#1A1A1A]">5–7 days</span></p>
              </div>
              <div className="text-center">
                <div className="text-lg mb-1">↩️</div>
                <p className="text-xs text-stone-500 leading-tight">{product.returnable ? '30-day' : 'No'}<br/><span className="font-medium text-[#1A1A1A]">returns</span></p>
              </div>
              <div className="text-center">
                <div className="text-lg mb-1">🇮🇳</div>
                <p className="text-xs text-stone-500 leading-tight">Handmade<br/><span className="font-medium text-[#1A1A1A]">in India</span></p>
              </div>
            </div>

            {/* Artisan story */}
            <div className="bg-[#FAF0E8] rounded-xl p-5">
              <p className="text-xs text-[#C4702B] font-medium uppercase tracking-widest mb-2">Made by hand</p>
              <p className="text-sm text-stone-600 leading-relaxed">{product.artisanStory}</p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <p className="text-xs text-[#C4702B] uppercase tracking-widest font-medium mb-2">You may also like</p>
              <h2 className="font-serif text-2xl font-medium text-[#1A1A1A]">From {product.collection}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-lg mb-2">Kiko Living</p>
          <p className="text-white/30 text-xs">© 2026 Kiko Living. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export async function getStaticPaths() {
  const { products } = await import('../../data/products')
  return {
    paths: products.map(p => ({ params: { slug: p.id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { products } = await import('../../data/products')
  const product = products.find(p => p.id === params.slug) || null
  const related = product
    ? products.filter(p => p.collection === product.collection && p.id !== product.id).slice(0, 4)
    : []
  return { props: { product, related } }
}
