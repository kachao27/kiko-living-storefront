import { useCart } from '../context/CartContext'
import { useRouter } from 'next/router'

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, total, count, drawerOpen, setDrawerOpen, clearCart } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    const orderId = 'KL' + Math.floor(Math.random() * 90000 + 10000)
    clearCart()
    setDrawerOpen(false)
    router.push(`/order/${orderId}`)
  }

  const deliveryFee = total >= 999 ? 0 : 99

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-xl font-medium text-[#1A1A1A]">Your Bag</h2>
            <p className="text-xs text-stone-400 mt-0.5">{count} {count === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-stone-400 hover:text-[#1A1A1A] transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Free shipping nudge */}
        {total > 0 && total < 999 && (
          <div className="bg-[#FAF0E8] px-6 py-2.5 text-xs text-[#C4702B] font-medium">
            Add ₹{(999 - total).toLocaleString('en-IN')} more for free delivery
          </div>
        )}
        {total >= 999 && (
          <div className="bg-[#1B4332]/10 px-6 py-2.5 text-xs text-[#1B4332] font-medium">
            You've unlocked free delivery!
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <svg className="mx-auto mb-4 text-stone-200" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <p className="font-serif text-lg text-stone-400 mb-3">Your bag is empty</p>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-sm text-[#C4702B] hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-stone-100">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 py-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#C4702B] font-medium uppercase tracking-wide mb-0.5">{item.collection}</p>
                    <h3 className="font-serif text-sm font-medium text-[#1A1A1A] leading-snug mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone-500 hover:bg-stone-50 text-sm font-medium"
                        >−</button>
                        <span className="w-8 text-center text-sm text-[#1A1A1A] font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone-500 hover:bg-stone-50 text-sm font-medium"
                        >+</button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-[#1A1A1A]">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-stone-400 hover:text-red-400 transition-colors mt-0.5"
                        >Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone-200 bg-[#FAFAFA]">
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Subtotal</span>
                <span className="font-medium text-[#1A1A1A]">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Delivery</span>
                <span className={deliveryFee === 0 ? 'text-[#1B4332] font-medium' : 'text-[#1A1A1A]'}>
                  {deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200">
                <span className="font-medium text-[#1A1A1A]">Total</span>
                <span className="font-serif text-lg font-semibold text-[#1A1A1A]">₹{(total + deliveryFee).toLocaleString('en-IN')}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#1A1A1A] hover:bg-[#C4702B] text-white font-medium py-3.5 rounded-lg transition-colors text-sm"
            >
              Proceed to Pay
            </button>
            <p className="text-center text-xs text-stone-400 mt-3">COD · UPI · Cards · EMI accepted</p>
          </div>
        )}
      </div>
    </>
  )
}
