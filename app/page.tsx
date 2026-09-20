'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export const PRODUCTS = [
  {
    id: '1',
    title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones, 30h Battery Life with Mic',
    price: 348.00,
    listPrice: 399.99,
    rating: 4.8,
    reviews: '14,204',
    badge: 'Best Seller',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Apple MacBook Air 15-inch Laptop with M3 chip: Liquid Retina Display, 16GB Memory',
    price: 1299.00,
    listPrice: 1499.00,
    rating: 4.9,
    reviews: '3,812',
    badge: 'Amazon\'s Choice',
    category: 'Computers',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Logitech MX Master 3S Wireless Performance Mouse, Quiet Clicks, 8K DPI Sensor',
    price: 99.99,
    listPrice: 119.99,
    rating: 4.7,
    reviews: '43,109',
    badge: 'Popular Pick',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    title: 'Kindle Paperwhite (16 GB) – 6.8" display, adjustable warm light, up to 10 weeks battery',
    price: 149.99,
    listPrice: 169.99,
    rating: 4.8,
    reviews: '28,490',
    badge: 'Editor\'s Choice',
    category: 'Devices',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80'
  }
];

export default function Home() {
  const [search, setSearch] = useState('');
  const filtered = PRODUCTS.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#e3e6e6] text-[#0f1111]">
      <Navbar onSearch={setSearch} />

      {/* Hero Banner with Classic Amazon Fading Bottom Gradient */}
      <div className="relative w-full h-[280px] sm:h-[400px] bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center overflow-hidden">
        <div className="text-center z-10 px-4 max-w-4xl -mt-10">
          <span className="inline-block bg-[#febd69] text-black text-[11px] font-extrabold uppercase px-3 py-1 rounded-sm mb-3">
            Prime Big Deal Days
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Shop exclusive deals on top brands
          </h1>
          <p className="text-gray-300 text-sm mt-3 max-w-xl mx-auto">
            Free shipping on orders shipped by Amazon. Fast delivery on millions of items.
          </p>
        </div>
        {/* Authentic gradient fade directly blending into page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#e3e6e6] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Quadrant Tile Cards Floating over Hero */}
      <main className="max-w-[1500px] mx-auto px-4 -mt-20 sm:-mt-32 relative z-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((prod) => (
            <div key={prod.id} className="bg-white p-5 rounded-none shadow-sm hover:shadow-md transition flex flex-col justify-between border border-gray-200">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-[#232f3e] text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">
                    {prod.badge}
                  </span>
                  <span className="text-[12px] font-extrabold text-[#007185] italic">prime</span>
                </div>
                <Link href={`/product/${prod.id}`} className="block group">
                  <div className="h-52 w-full flex items-center justify-center p-3 bg-gray-50 mb-3 overflow-hidden">
                    <img src={prod.image} alt={prod.title} className="max-h-44 max-w-full object-contain group-hover:scale-105 transition duration-200" />
                  </div>
                  <h3 className="font-medium text-[14px] leading-snug line-clamp-2 text-[#0f1111] group-hover:text-[#c45500]">
                    {prod.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1.5 text-xs">
                  <span className="text-[#de7921] font-bold">★★★★★</span>
                  <span className="text-[#007185] hover:underline cursor-pointer">{prod.reviews}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs align-super font-bold">$</span>
                  <span className="text-2xl font-bold -ml-1.5">{Math.floor(prod.price)}</span>
                  <span className="text-xs align-super font-bold -ml-1">{(prod.price % 1).toFixed(2).substring(2)}</span>
                  <span className="text-xs text-gray-500 line-through ml-1">${prod.listPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Get it <span className="font-bold text-[#0f1111]">Tomorrow, Sep 21</span>
                </p>
                <p className="text-[11px] text-gray-500">Ships to United States</p>
                <Link
                  href={`/product/${prod.id}`}
                  className="mt-3 block text-center w-full py-1.5 bg-[#ffd814] hover:bg-[#f7ca00] text-black font-medium text-xs rounded-full border border-[#fcd200] shadow-sm transition"
                >
                  See Buying Options
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Amazon Multi-Column Footer */}
      <footer className="bg-[#232f3e] text-white mt-16">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#37475a] hover:bg-[#485769] text-center py-3.5 text-xs cursor-pointer font-bold tracking-wide"
        >
          Back to top
        </div>
        <div className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-[12px] text-gray-300">
          <div>
            <h4 className="font-bold text-white mb-2 text-[14px]">Get to Know Us</h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Amazon Newsletter</li>
              <li className="hover:underline cursor-pointer">About Amazon</li>
              <li className="hover:underline cursor-pointer">Accessibility</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2 text-[14px]">Make Money with Us</h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="hover:underline cursor-pointer">Sell products on Amazon</li>
              <li className="hover:underline cursor-pointer">Sell on Amazon Business</li>
              <li className="hover:underline cursor-pointer">Become an Affiliate</li>
              <li className="hover:underline cursor-pointer">Self-Publish with Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2 text-[14px]">Amazon Payment Products</h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="hover:underline cursor-pointer">Amazon Business Card</li>
              <li className="hover:underline cursor-pointer">Shop with Points</li>
              <li className="hover:underline cursor-pointer">Reload Your Balance</li>
              <li className="hover:underline cursor-pointer">Amazon Currency Converter</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2 text-[14px]">Let Us Help You</h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="hover:underline cursor-pointer">Amazon and COVID-19</li>
              <li className="hover:underline cursor-pointer">Your Account</li>
              <li className="hover:underline cursor-pointer">Your Orders</li>
              <li className="hover:underline cursor-pointer">Shipping Rates & Policies</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#3a4553] py-8 text-center text-xs text-gray-400 bg-[#131a22]">
          <div className="flex justify-center items-center gap-6 mb-3 text-white">
            <span className="font-bold text-xl tracking-tight">amazon</span>
            <span className="border border-gray-600 px-3 py-1 text-[11px] rounded">English</span>
            <span className="border border-gray-600 px-3 py-1 text-[11px] rounded">$ USD - U.S. Dollar</span>
          </div>
          <p>© 2026 Amazon.com, Inc. or its affiliates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}