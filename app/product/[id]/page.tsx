'use client';
import { Navbar } from '@/components/Navbar';
import { useCartStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Truck, RotateCcw, Lock } from 'lucide-react';
import Link from 'next/link';

const CATALOG: Record<string, any> = {
  '1': {
    title: 'Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones, 30h Battery Life with Mic, Lightweight Design',
    brand: 'Visit the Sony Store',
    price: 348.00,
    listPrice: 399.99,
    rating: 4.8,
    reviews: '14,204',
    badge: "Amazon's Choice",
    badgeCategory: 'in Over-Ear Headphones by Sony',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    bullets: [
      'Two processors control 8 microphones for unprecedented noise cancellation with Auto NC Optimizer',
      'Magnificent Sound, engineered to perfection with the new Integrated Processor V1',
      'Crystal clear hands-free calling with 4 beamforming microphones and AI-based noise reduction structure',
      'Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)',
      'Ultra-comfortable, lightweight design with soft fit leather'
    ]
  },
  '2': {
    title: 'Apple MacBook Air 15-inch Laptop with M3 chip: 15.3-inch Liquid Retina Display, 16GB Unified Memory, 512GB SSD Storage',
    brand: 'Visit the Apple Store',
    price: 1299.00,
    listPrice: 1499.00,
    rating: 4.9,
    reviews: '3,812',
    badge: "Amazon's Choice",
    badgeCategory: 'in Traditional Laptops by Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
    bullets: [
      'LEAN. MEAN. M3 MACHINE — The blazing-fast MacBook Air with the M3 chip sails through work and play.',
      'PORTABLE DESIGN — Lightweight and under half an inch thin, so you can take MacBook Air anywhere you go.',
      'GET MORE DONE FASTER — The powerful 8-core CPU and 10-core GPU keep everything running smoothly.',
      'UP TO 18 HOURS OF BATTERY LIFE — Incredible, all-day battery life so you can leave the power adapter at home.',
      'A BRILLIANT DISPLAY — The 15.3-inch Liquid Retina display supports 1 billion colors.'
    ]
  },
  '3': {
    title: 'Logitech MX Master 3S Wireless Performance Mouse, Quiet Clicks, 8K DPI Sensor, Any-Surface Tracking',
    brand: 'Visit the Logitech Store',
    price: 99.99,
    listPrice: 119.99,
    rating: 4.7,
    reviews: '43,109',
    badge: "Best Seller",
    badgeCategory: 'in Computer Mice',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
    bullets: [
      'Any-surface tracking - now 8K DPI: Use MX Master 3S wireless computer mouse to work on any surface - even glass',
      'Quiet clicks: MX Master 3S Bluetooth mouse introduces 90% less click noise while maintaining precision',
      'Magspeed scrolling: A computer mouse with remarkable speed, precision, and near-silence',
      'Ergonomic design: Work comfortably with an ergonomic silhouette designed for a natural wrist posture'
    ]
  },
  '4': {
    title: 'Kindle Paperwhite (16 GB) – Now with a 6.8" display and adjustable warm light – Black',
    brand: 'Visit the Amazon Devices Store',
    price: 149.99,
    listPrice: 169.99,
    rating: 4.8,
    reviews: '28,490',
    badge: "Editor's Choice",
    badgeCategory: 'in E-Readers',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    bullets: [
      'Kindle Paperwhite: Now with a 6.8” display and thinner borders, adjustable warm light, and up to 10 weeks of battery life',
      'Purpose-built for reading: With a flush-front design and 300 ppi glare-free display that reads like real paper, even in bright sunlight',
      'More books in more places: Store thousands of titles, then take them all with you',
      'Waterproof reading: Built to withstand accidental immersion in water, so you are good from the beach to the bath'
    ]
  }
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const prod = CATALOG[params.id] || CATALOG['1'];

  return (
    <div className="min-h-screen bg-white text-[#0f1111]">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="max-w-[1500px] mx-auto px-4 py-2 text-[12px] text-gray-500 border-b border-gray-100 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">Electronics</Link>
        <span>›</span>
        <span className="hover:underline cursor-pointer">Audio & Tech</span>
        <span>›</span>
        <span className="text-gray-700 truncate">{prod.title}</span>
      </div>

      <main className="max-w-[1500px] mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Image Preview Gallery */}
        <div className="lg:col-span-5 flex justify-center items-start sticky top-20">
          <div className="p-4 rounded-md border border-gray-200 bg-white max-w-md w-full flex items-center justify-center">
            <img src={prod.image} alt={prod.title} className="max-h-[380px] w-auto object-contain hover:scale-105 transition duration-300" />
          </div>
        </div>

        {/* Middle Column: Specs, Badges & Bullets */}
        <div className="lg:col-span-4 space-y-3">
          <p className="text-[13px] text-[#007185] hover:underline cursor-pointer font-medium">{prod.brand}</p>
          <h1 className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight text-[#0f1111]">
            {prod.title}
          </h1>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#de7921] font-bold text-sm">4.8 ★★★★★</span>
            <span className="text-[#007185] hover:underline cursor-pointer">{prod.reviews} ratings</span>
          </div>

          <div className="inline-flex items-center bg-[#232f3e] text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">
            <span className="text-[#febd69] mr-1">{prod.badge}</span>
            <span className="text-gray-300 font-normal">{prod.badgeCategory}</span>
          </div>

          <hr className="border-gray-200" />

          {/* Pricing Box */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-red-700 text-2xl font-light">-13%</span>
              <span className="text-xs align-super font-bold">$</span>
              <span className="text-3xl font-bold -ml-1.5">{Math.floor(prod.price)}</span>
              <span className="text-xs align-super font-bold -ml-1">{(prod.price % 1).toFixed(2).substring(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Typical price: <span className="line-through">${prod.listPrice.toFixed(2)}</span></p>
          </div>

          <hr className="border-gray-200" />

          {/* About this item Bullets */}
          <div>
            <h3 className="font-bold text-sm text-[#0f1111] mb-2">About this item</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#333] leading-relaxed">
              {prod.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Authentic Amazon Buy Box */}
        <div className="lg:col-span-3 border border-gray-300 rounded-lg p-4 shadow-sm space-y-3 h-fit bg-white text-xs">
          <div className="text-2xl font-bold text-[#0f1111]">${prod.price.toFixed(2)}</div>
          <div className="text-xs text-gray-600">
            <span>No Import Fees Deposit & FREE Shipping to United States</span>
          </div>
          <p className="text-emerald-700 font-bold text-base">In Stock</p>

          <div className="space-y-1 text-gray-600">
            <p className="flex items-center gap-1.5"><Truck size={14} className="text-gray-500 shrink-0" /> FREE delivery <b>Tomorrow, Sep 21</b></p>
            <p className="flex items-center gap-1.5"><RotateCcw size={14} className="text-gray-500 shrink-0" /> 30-day refund / replacement</p>
            <p className="flex items-center gap-1.5"><Lock size={14} className="text-gray-500 shrink-0" /> Secure transaction</p>
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={() => addItem({ id: params.id, title: prod.title, price: prod.price, image: prod.image })}
              className="w-full py-2 bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] font-medium text-xs rounded-full border border-[#fcd200] shadow-sm transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addItem({ id: params.id, title: prod.title, price: prod.price, image: prod.image });
                router.push('/checkout');
              }}
              className="w-full py-2 bg-[#ffa41c] hover:bg-[#fa8900] text-[#0f1111] font-medium text-xs rounded-full border border-[#ff8f00] shadow-sm transition"
            >
              Buy Now
            </button>
          </div>

          <div className="text-[11px] text-gray-500 border-t pt-2 grid grid-cols-2 gap-1">
            <span>Ships from</span><span className="text-[#0f1111]">Amazon.com</span>
            <span>Sold by</span><span className="text-[#0f1111]">Amazon.com</span>
            <span>Returns</span><span className="text-[#007185] hover:underline cursor-pointer">Eligible for Return</span>
          </div>
        </div>
      </main>
    </div>
  );
}