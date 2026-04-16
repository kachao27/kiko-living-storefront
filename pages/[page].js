import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'

const CONTENT = {
  returns: {
    title: 'Returns & Refunds',
    sections: [
      {
        heading: 'Our Returns Policy',
        body: 'We want you to love every piece you bring home. If something doesn\'t feel right, we make returns easy. Most items can be returned within 30 days of delivery — no questions asked.',
      },
      {
        heading: 'What can be returned?',
        body: 'All items marked "Easy Returns" on the product page are eligible. Fragile items like diyas, lanterns, and ceramic ware are non-returnable due to their handmade nature and transit risk. This is clearly marked on each product.',
      },
      {
        heading: 'How to initiate a return',
        body: 'WhatsApp us at +91 98765 43210 with your order ID and reason. Our team will arrange a reverse pickup within 48 hours. Refunds are processed within 5–7 business days to your original payment method.',
      },
      {
        heading: 'Damaged on arrival?',
        body: 'If your item arrives damaged, send us a photo within 48 hours of delivery. We\'ll send a replacement at no charge or issue a full refund — your choice.',
      },
    ],
  },
  shipping: {
    title: 'Shipping Policy',
    sections: [
      {
        heading: 'Delivery timelines',
        body: 'Standard delivery takes 5–7 business days across India. We ship from multiple fulfillment centers — Jaipur, Moradabad, and Bangalore — so your order typically moves from the closest one.',
      },
      {
        heading: 'Free shipping',
        body: 'All orders above ₹999 ship free. Below that, we charge a flat ₹99. COD orders have a small handling fee of ₹49.',
      },
      {
        heading: 'Cash on Delivery',
        body: 'COD is available for all pin codes we serve. Pay in cash when your order arrives. No pre-payment required.',
      },
      {
        heading: 'Order tracking',
        body: 'Once your order ships, you\'ll get a tracking link on WhatsApp and email. You can also track from your account dashboard.',
      },
      {
        heading: 'Do you ship internationally?',
        body: 'Not yet — but we\'re working on it. Join our newsletter and we\'ll let you know when international shipping goes live.',
      },
    ],
  },
  contact: {
    title: 'Contact Us',
    sections: [
      {
        heading: 'We\'re here to help',
        body: 'Have a question about an order, a product, or want to place a bulk/corporate order? Reach out — we respond within a few hours on most days.',
      },
      {
        heading: 'WhatsApp (fastest)',
        body: '+91 98765 43210 — Monday to Saturday, 10am to 7pm IST. Most queries are resolved in one conversation.',
      },
      {
        heading: 'Email',
        body: 'hello@kikoliving.in — for order issues, return requests, and anything else. We respond within 24 hours.',
      },
      {
        heading: 'Corporate & gifting enquiries',
        body: 'Looking to order in bulk for Diwali gifting, corporate hampers, or events? Email us at gifting@kikoliving.in with your requirements and we\'ll put together a custom quote.',
      },
    ],
  },
}

export default function InfoPage({ page, data }) {
  if (!data) {
    return (
      <>
        <Nav />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-stone-400">Page not found.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{data.title} — Kiko Living</title>
      </Head>

      <Nav />

      <div className="bg-[#1B4332] text-white text-center text-xs py-2 px-4 tracking-wide">
        Free delivery on orders above ₹999 · Easy returns · COD available
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-xs text-stone-400 hover:text-[#C4702B] transition-colors mb-8 inline-block">← Back to Home</Link>

        <h1 className="font-serif text-4xl font-medium text-[#1A1A1A] mb-12">{data.title}</h1>

        <div className="space-y-10">
          {data.sections.map((section, i) => (
            <div key={i} className="border-b border-stone-100 pb-10 last:border-none">
              <h2 className="font-serif text-xl font-medium text-[#1A1A1A] mb-3">{section.heading}</h2>
              <p className="text-stone-600 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#FAF0E8] rounded-2xl p-8 text-center">
          <p className="font-serif text-xl font-medium text-[#1A1A1A] mb-2">Still have questions?</p>
          <p className="text-stone-500 text-sm mb-5">Our team is available on WhatsApp — usually reply within minutes.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#1A1A1A] text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-[#C4702B] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <footer className="bg-[#1A1A1A] text-white py-10 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-lg mb-2">Kiko Living</p>
          <p className="text-white/30 text-xs">© 2026 Kiko Living. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(CONTENT).map(page => ({ params: { page } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = CONTENT[params.page] || null
  return { props: { page: params.page, data } }
}
