import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'

const STEPS = [
  { label: 'Order Placed', done: true, time: 'Just now' },
  { label: 'Payment Confirmed', done: true, time: 'Just now' },
  { label: 'Being Packed', done: false, time: 'Within 24 hrs' },
  { label: 'Shipped', done: false, time: '2–3 days' },
  { label: 'Out for Delivery', done: false, time: '5–7 days' },
]

export default function OrderConfirmation() {
  const { query } = useRouter()
  const orderId = query.id || 'KL00000'

  return (
    <>
      <Head>
        <title>Order Confirmed — Kiko Living</title>
      </Head>

      <Nav />

      <div className="min-h-screen bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-6 py-16">

          {/* Success header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#1B4332] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h1 className="font-serif text-3xl font-medium text-[#1A1A1A] mb-2">Order Confirmed!</h1>
            <p className="text-stone-500 text-base">Thank you for supporting Indian artisans.</p>
          </div>

          {/* Order card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="bg-[#1A1A1A] px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/50 mb-0.5">Order ID</p>
                <p className="text-white font-mono font-medium tracking-wider">{orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/50 mb-0.5">Estimated Delivery</p>
                <p className="text-white text-sm font-medium">5–7 Business Days</p>
              </div>
            </div>

            {/* Tracking steps */}
            <div className="px-6 py-6">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-stone-200" />
                <div className="absolute left-4 top-4 w-0.5 bg-[#1B4332]" style={{ height: '12%' }} />

                <div className="space-y-6">
                  {STEPS.map((step, i) => (
                    <div key={i} className="flex items-start gap-5 relative">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 z-10 ${
                        step.done
                          ? 'bg-[#1B4332] border-[#1B4332]'
                          : 'bg-white border-stone-200'
                      }`}>
                        {step.done ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-stone-300" />
                        )}
                      </div>
                      <div className="flex-1 pt-0.5">
                        <p className={`text-sm font-medium ${step.done ? 'text-[#1A1A1A]' : 'text-stone-400'}`}>{step.label}</p>
                        <p className="text-xs text-stone-400 mt-0.5">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">Delivering to</p>
              <p className="text-sm font-medium text-[#1A1A1A]">Your saved address</p>
              <p className="text-xs text-stone-500 mt-0.5">Bengaluru, Karnataka</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">Payment</p>
              <p className="text-sm font-medium text-[#1A1A1A]">UPI / COD</p>
              <p className="text-xs text-[#1B4332] mt-0.5 font-medium">Confirmed</p>
            </div>
          </div>

          {/* WhatsApp nudge */}
          <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl px-5 py-4 flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.549 4.09 1.508 5.814L0 24l6.335-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.816 9.816 0 01-5.003-1.37l-.36-.213-3.727.977.995-3.636-.235-.374A9.816 9.816 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1A1A1A]">Get updates on WhatsApp</p>
              <p className="text-xs text-stone-500">We'll send you packing and delivery updates</p>
            </div>
            <button className="ml-auto text-xs font-medium text-[#25D366] hover:underline whitespace-nowrap">Enable</button>
          </div>

          <div className="flex gap-4">
            <Link
              href="/catalog"
              className="flex-1 text-center border border-stone-300 text-[#1A1A1A] font-medium py-3 rounded-lg hover:border-[#C4702B] hover:text-[#C4702B] transition-colors text-sm"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="flex-1 text-center bg-[#1A1A1A] text-white font-medium py-3 rounded-lg hover:bg-[#C4702B] transition-colors text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
