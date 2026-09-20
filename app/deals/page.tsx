'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { useCartStore } from '@/lib/store';
import { Check, Scissors, Tag, Clock, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface CouponProduct {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: string;
  couponAmount: string;
  couponPercent: number;
  image: string;
  badge?: string;
  endsIn: string;
}

const COUPON_ITEMS: CouponProduct[] = [
  {
    id: 'deal-1',
    title: 'Anker Magnetic Wireless Power Bank 10,000mAh with Foldable Stand',
    category: 'Electronics',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: '8,421',
    couponAmount: 'Save $10.00 with coupon',
    couponPercent: 10,
    badge: 'Lightning Deal',
    endsIn: '03:42:15',
    image: 'https://images.unsplash.com/photo-1609592807904-7681c633a1e5?w=500&auto=format&fit=crop&q=70'
  },
  {
    id: 'deal-2',
    title: 'Ninja AF101 Air Fryer that Crisps, Roasts, Reheats & Dehydrates, 4 Qt',
    category: 'Home & Kitchen',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: '52,109',
    couponAmount: 'Save $20.00 with coupon',
    couponPercent: 20,
    badge: 'Top Deal',
    endsIn: '08:12:00',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500&auto=format&fit=crop&q=70'
  },
  {
    id: 'deal-3',
    title: 'Sony WH-CH720N Noise Canceling Wireless Bluetooth Headphones with Mic',
    category: 'Electronics',
    price: 98.00,
    originalPrice: 149.99,
    rating: 4.5,
    reviews: '12,940',
    couponAmount: 'Save 15% with coupon',
    couponPercent: 15,
    badge: 'Amazon Choice',
    endsIn: '14:20:45',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=70'
  },
  {
    id: 'deal-4',
    title: 'Stanley Quencher H2.0 FlowState Stainless Steel Insulated Tumbler 40oz',
    category: 'Home & Kitchen',
    price: 45.00,
    originalPrice: 55.00,
    rating: 4.7,
    reviews: '34,221',
    couponAmount: 'Save $5.00 with coupon',
    couponPercent: 5,
    badge: 'Popular',
    endsIn: '05:10:30',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=70'
  },
  {
    id: 'deal-5',
    title: 'Logitech MX Anywhere 3S Compact Wireless Mouse, Fast Scrolling',
    category: 'Electronics',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: '18,310',
    couponAmount: 'Save $12.00 with coupon',
    couponPercent: 12,
    badge: 'Limited Deal',
    endsIn: '02:18:40',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=70'
  },
  {
    id: 'deal-6',
    title: 'Oral-B Pro 1000 CrossAction Electric Toothbrush with Pressure Sensor',
    category: 'Beauty',
    price: 39.94,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: '61,040',
    couponAmount: 'Save $8.00 with coupon',
    couponPercent: 8,
    badge: 'Best Seller',
    endsIn: '11:00:20',
    image: 'https://images.unsplash.com/photo-1559591937-e1032c52aa8a?w=500&auto=format&fit=crop&q=70'
  }
];

const CATEGORIES = ['All Deals', 'Electronics', 'Home & Kitchen', 'Beauty', 'Fashion', 'Grocery'];

export default function CouponsPage() {
  const addItem = useCartStore((s) => s.addItem);
  const [activeCategory, setActiveCategory] = useState('All Deals');
  const [clipped, setClipped] = useState<Record<string, boolean>>({});

  const toggleClip = (id: string) => {
    setClipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDeals = activeCategory === 'All Deals'
    ? COUPON_ITEMS
    : COUPON_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#eaeded] text-[#0f1111] font-sans">
      <Navbar />

      {/* Sub Header Ribbon */}
      <div className="bg-[#fafafa] border-b border-gray-200 px-6 py-2.5 text-[12px] text-[#333] flex items-center justify-between overflow-x-auto">
        <div className="flex items-center gap-6 whitespace-nowrap">
          <span className="font-bold text-[#0f1111] border-b-2 border-[#e47911] pb-1 cursor-pointer">Today's Deals</span>
          <span className="hover:underline cursor-pointer hover:text-[#c45500]">Coupons</span>
          <span className="hover:underline cursor-pointer hover:text-[#c45500]">Lightning Deals</span>
          <span className="hover:underline cursor-pointer hover:text-[#c45500]">Prime Exclusive</span>
          <span className="hover:underline cursor-pointer hover:text-[#c45500]">Outlet</span>
          <span className="hover:underline cursor-pointer hover:text-[#c45500]">Warehouse Deals</span>
        </div>
        <div className="hidden md:flex items-center text-xs text-gray-500 gap-1">
          <Clock size={14} /> Deals updated every hour
        </div>
      </div>

      <main className="max-w-[1500px] mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Filter Sidebar */}
        <aside className="lg:col-span-3 space-y-5 bg-white p-4 rounded-md border border-gray-200 h-fit text-xs">
          <div>
            <h3 className="font-bold text-sm text-[#0f1111] mb-2">Department</h3>
            <ul className="space-y-1.5 text-gray-700">
              {CATEGORIES.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer hover:text-[#c45500] py-0.5 ${activeCategory === cat ? 'font-bold text-[#0f1111] text-sm' : ''}`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <hr />

          <div>
            <h3 className="font-bold text-sm text-[#0f1111] mb-2">Discount</h3>
            <ul className="space-y-1 text-gray-700">
              <li className="hover:text-[#c45500] cursor-pointer">10% off or more</li>
              <li className="hover:text-[#c45500] cursor-pointer">25% off or more</li>
              <li className="hover:text-[#c45500] cursor-pointer">50% off or more</li>
              <li className="hover:text-[#c45500] cursor-pointer">70% off or more</li>
            </ul>
          </div>

          <hr />

          <div>
            <h3 className="font-bold text-sm text-[#0f1111] mb-2">Deal Type</h3>
            <div className="space-y-1 text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-[#e47911]" />
                <span>Coupons available</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-[#e47911]" />
                <span>Prime Early Access</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Right Deal Items Grid */}
        <div className="lg:col-span-9 space-y-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-md border border-gray-200">
            <div>
              <h1 className="text-xl font-bold text-[#0f1111]">Coupons & Promotional Deals</h1>
              <p className="text-xs text-gray-500 mt-0.5">Clip coupons below to apply savings automatically at checkout.</p>
            </div>
            <span className="text-xs font-semibold text-gray-600">Showing {filteredDeals.length} results</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredDeals.map((prod) => {
              const isClipped = clipped[prod.id];
              const effectivePrice = isClipped ? prod.price - (prod.couponPercent * 0.5) : prod.price;

              return (
                <div key={prod.id} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                  <div>
                    {/* Badge & Timer */}
                    <div className="flex justify-between items-center text-[10px] mb-2">
                      <span className="bg-[#cc0c39] text-white font-black px-2 py-0.5 rounded-sm">
                        {prod.badge}
                      </span>
                      <span className="text-red-700 font-bold flex items-center gap-1">
                        <Clock size={11} /> {prod.endsIn}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="h-44 w-full flex items-center justify-center p-2 mb-3 bg-gray-50 rounded">
                      <img src={prod.image} alt={prod.title} className="max-h-36 max-w-full object-contain" />
                    </div>

                    {/* Title & Ratings */}
                    <h3 className="font-semibold text-xs text-[#0f1111] line-clamp-2 leading-snug">
                      {prod.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-[11px]">
                      <span className="text-[#de7921] font-bold">★ {prod.rating}</span>
                      <span className="text-[#007185]">({prod.reviews})</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-gray-100 space-y-2">
                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-[#0f1111]">${effectivePrice.toFixed(2)}</span>
                      <span className="text-xs text-gray-500 line-through">${prod.originalPrice.toFixed(2)}</span>
                    </div>

                    {/* Clip Coupon Button */}
                    <button
                      onClick={() => toggleClip(prod.id)}
                      className={`w-full py-1.5 px-3 rounded flex items-center justify-center gap-1.5 text-xs font-bold transition border ${
                        isClipped
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                          : 'bg-[#f0f2f2] hover:bg-[#e3e6e6] border-gray-300 text-[#0f1111]'
                      }`}
                    >
                      {isClipped ? (
                        <>
                          <Check size={14} className="text-emerald-600 stroke-[3]" /> Coupon Clipped!
                        </>
                      ) : (
                        <>
                          <Scissors size={14} className="text-[#c45500]" /> {prod.couponAmount}
                        </>
                      )}
                    </button>

                    {/* Add to Cart */}
                    <button
                      onClick={() => {
                        addItem({
                          id: prod.id,
                          title: prod.title,
                          price: effectivePrice,
                          image: prod.image
                        });
                        alert(`${prod.title} added to cart!`);
                      }}
                      className="w-full py-1.5 bg-[#ffd814] hover:bg-[#f7ca00] text-black font-medium text-xs rounded-full border border-[#fcd200] shadow-sm transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}