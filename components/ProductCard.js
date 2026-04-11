import strings from '../content/strings.json'

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.bestseller && (
            <span className="bg-[#C4702B] text-white text-xs font-medium px-2 py-0.5 rounded-full">
              BESTSELLER
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#1B4332] text-white text-xs font-medium px-2 py-0.5 rounded-full">
              NEW
            </span>
          )}
          {product.discount && (
            <span className="bg-white text-[#C4702B] text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
              {product.discount}% OFF
            </span>
          )}
        </div>
        {/* Returnable badge */}
        {product.returnable && (
          <div className="absolute bottom-3 right-3">
            <span className="bg-white/90 text-[#1B4332] text-xs font-medium px-2 py-0.5 rounded-full">
              Easy Returns
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-[#C4702B] font-medium uppercase tracking-wider mb-1">
          {product.collection}
        </p>
        <h3 className="font-serif text-base font-medium text-[#1A1A1A] mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-stone-500 line-clamp-2 mb-3 flex-1 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24"
                fill={i < Math.floor(product.rating) ? '#C4702B' : 'none'}
                stroke="#C4702B" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <span className="text-xs text-stone-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-semibold text-[#1A1A1A]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-stone-400 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* CTA */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200">
          {strings.pdp.add_to_cart_button}
        </button>
      </div>
    </div>
  )
}
