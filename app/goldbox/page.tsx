'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { useCartStore } from '@/lib/store';
import { ChevronLeft, ChevronRight, Plus, Star } from 'lucide-react';
import Link from 'next/link';

const CHIPS = [
  'Lightning deals',
  'Halloween',
  'New Arrivals',
  "Customers' Most-Loved",
  'Outlet',
  'Lowest Price in 365 Days',
  'Premium Brands',
  'Beauty',
  'Fashion',
  'Home',
  'Toys & Games'
];

const DEAL_PRODUCTS = [
  {
    id: 'deal-cat-litter',
    title: 'ARM & HAMMER Clump & Seal Platinum Cat Litter, Multi-Cat...',
    brandLink: 'Shop ARM & HAMMER deals',
    price: 2855.11,
    listPrice: 3899.50,
    discountBadge: '15% off',
    dealType: 'Limited time deal',
    claimed: 22,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&auto=format&fit=crop&q=70'
  },
  {
    id: 'deal-scott-towels',
    title: 'Scott Paper Towels, Task Size, 30 Family Double Rolls, 119 Sheets...',
    brandLink: 'Shop Scott deals',
    price: 2935.00,
    listPrice: 4265.00,
    discountBadge: '10% off',
    dealType: 'Limited time deal',
    claimed: null,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&auto=format&fit=crop&q=70'
  },
  {
    id: 'deal-waterpik',
    title: 'Waterpik Cordless Pulse 3100 Portable Water Flosser, Rechargeable...',
    brandLink: 'Shop Waterpik deals',
    price: 3359.00,
    listPrice: 4799.00,
    discountBadge: '30% off',
    dealType: 'Limited time deal',
    claimed: null,
    variants: '+4 colors/patterns',
    image: 'https://images.unsplash.com/photo-1559591937-e1032c52aa8a?w=400&auto=format&fit=crop&q=70'
  }
];

export default function TodaysDealsPage() {
  const addItem = useCartStore((s) => s.addItem);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedChip, setSelectedChip] = useState('Lightning deals');
  const [discountVal, setDiscountVal] = useState(100);

  const handleQuickAdd = (p: typeof DEAL_PRODUCTS[0]) => {
    addItem({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.image
    });
    alert(`${p.title.substring(0, 30)}... added to your Cart!`);
  };

  return (
    <div className="min-h-screen bg-white text-[#0f1111] font-sans antialiased">
      <Navbar />

      {/* 1. Sub Navigation Ribbon */}
      <div className="bg-[#fafafa] border-b border-gray-200 px-6 py-2 text-[12px] text-[#333] flex items-center gap-6 overflow-x-auto whitespace-nowrap">
        <span className="font-bold text-[#0f1111] border-b-2 border-[#e47911] pb-1 cursor-pointer">Today's Deals</span>
        <Link href="/deals" className="hover:underline cursor-pointer hover:text-[#c45500]">Coupons</Link>
        <span className="hover:underline cursor-pointer hover:text-[#c45500]">Renewed Deals</span>
        <span className="hover:underline cursor-pointer hover:text-[#c45500]">Outlet</span>
        <span className="hover:underline cursor-pointer hover:text-[#c45500]">Amazon Resale</span>
      </div>

      <main className="max-w-[1500px] mx-auto px-6 py-3 space-y-4">
        {/* 2. Top Sponsored Ad Strip */}
        <div className="border border-gray-200 rounded p-2.5 flex items-center justify-between text-xs bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-11 bg-orange-100 rounded flex items-center justify-center font-serif text-sm font-bold text-orange-900 shrink-0">
              📖
            </div>
            <div>
              <p className="font-bold text-[#0f1111]">Priya Parker The Art of Gathering: The Transformative Power of Conflict</p>
              <p className="text-[11px] text-gray-500">Learn to fight smarter.</p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-red-700 font-bold mr-1">-14%</span>
            <span className="font-bold text-sm">$25.74</span>
            <p className="text-[10px] text-gray-500">List Price: $30.00 <span className="text-[#007185] font-bold">prime</span></p>
            <span className="text-[9px] text-gray-400">Sponsored ⓘ</span>
          </div>
        </div>

        {/* 3. Blue Prime Big Deal Days Hero Banner */}
        <div className="bg-gradient-to-r from-[#0071ce] via-[#005fb8] to-[#004b93] rounded-lg text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-sm">
          <div className="space-y-1.5 z-10 max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Prime Big Deal Days is October 6-7
            </h1>
            <p className="text-sm text-blue-100 font-medium">Members get early deals now</p>
          </div>

          <div className="flex items-center gap-6 mt-4 md:mt-0 z-10">
            {/* Prime tape box visual */}
            <div className="hidden sm:flex bg-[#b88655] border-2 border-[#94693e] rounded shadow-md px-4 py-3 transform rotate-[-4deg] text-center text-xs font-mono text-black font-bold tracking-widest">
              prime · prime · prime
            </div>
            <div className="text-center">
              <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] font-bold text-xs px-6 py-2.5 rounded-full shadow border border-[#fcd200]">
                Join Prime
              </button>
              <p className="text-[10px] text-blue-100 mt-1">Included with a Prime membership</p>
            </div>
          </div>
        </div>

        {/* 4. Horizontal Filter Chips Carousel */}
        <div className="relative flex items-center gap-2 py-1">
          <button className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 shrink-0">
            <ChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-xs py-1 scrollbar-none">
            {CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => setSelectedChip(chip)}
                className={`px-4 py-1.5 rounded-full border transition font-medium ${
                  selectedChip === chip
                    ? 'bg-[#007185] text-white border-[#007185] font-bold'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
          <button className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 shrink-0">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* 5. Main Content: Sidebar Filters + Deal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3 space-y-6 text-xs text-[#0f1111]">
            {/* Department Filter */}
            <div>
              <h3 className="font-bold text-sm mb-2">Department</h3>
              <div className="space-y-1.5 text-gray-700">
                {['All', 'Amazon Devices & Accessories', 'Appliances', 'Apps & Games', 'Arts, Crafts & Sewing'].map((dept) => (
                  <label key={dept} className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]">
                    <input
                      type="radio"
                      name="dept"
                      checked={selectedDepartment === dept}
                      onChange={() => setSelectedDepartment(dept)}
                      className="text-[#e47911] focus:ring-[#e47911]"
                    />
                    <span>{dept}</span>
                  </label>
                ))}
                <span className="text-[#007185] hover:underline cursor-pointer block pt-0.5">ˇ See more</span>
              </div>
            </div>

            {/* Brands Filter */}
            <div>
              <h3 className="font-bold text-sm mb-2">Brands</h3>
              <div className="space-y-1.5 text-gray-700">
                {['CGK Unlimited', 'FNTCASE', 'Cozyplayer', 'Bissell'].map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]">
                    <input type="checkbox" className="rounded text-[#e47911] focus:ring-[#e47911]" />
                    <span>{brand}</span>
                  </label>
                ))}
                <span className="text-[#007185] hover:underline cursor-pointer block pt-0.5">ˇ See more</span>
              </div>
            </div>

            {/* Customer Reviews */}
            <div>
              <h3 className="font-bold text-sm mb-2">Customer Reviews</h3>
              <div className="space-y-1.5 text-gray-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="reviews" defaultChecked className="text-[#e47911]" />
                  <span>All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]">
                  <input type="radio" name="reviews" className="text-[#e47911]" />
                  <span className="text-amber-500 flex items-center">★★★★☆ <span className="text-gray-700 ml-1">& up</span></span>
                </label>
              </div>
            </div>

            {/* Discount Slider */}
            <div>
              <h3 className="font-bold text-sm mb-1">Discount</h3>
              <p className="text-gray-600 mb-2">0% – {discountVal}%</p>
              <input
                type="range"
                min="10"
                max="100"
                value={discountVal}
                onChange={(e) => setDiscountVal(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007185]"
              />
            </div>

            {/* Prime Programs */}
            <div>
              <h3 className="font-bold text-sm mb-2">Prime Programs</h3>
              <div className="space-y-1.5 text-gray-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#e47911]" />
                  <span>Prime Exclusive</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#e47911]" />
                  <span>Prime Early Access</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Right Product Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-start">
            {DEAL_PRODUCTS.map((prod) => (
              <div key={prod.id} className="bg-white border border-gray-200 rounded p-4 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  {/* Image with Yellow + Quick Add Button */}
                  <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-3 rounded mb-3">
                    <img src={prod.image} alt={prod.title} className="max-h-40 max-w-full object-contain" />
                    <button
                      onClick={() => handleQuickAdd(prod)}
                      className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] flex items-center justify-center shadow-md font-bold text-lg text-black transition"
                    >
                      <Plus size={18} className="stroke-[3]" />
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="bg-[#cc0c39] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                      {prod.discountBadge}
                    </span>
                    <span className="text-[#cc0c39] text-[11px] font-bold">
                      {prod.dealType}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-bold text-[#0f1111]">₹{prod.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                    <span className="text-[11px] text-gray-500 line-through">List: ₹{prod.listPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xs font-semibold text-[#0f1111] line-clamp-2 mt-1 leading-snug">
                    {prod.title}
                  </h4>

                  {/* Variants */}
                  {prod.variants && (
                    <p className="text-[11px] text-[#007185] mt-1">{prod.variants}</p>
                  )}

                  {/* Progress Claimed */}
                  {prod.claimed && (
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-[11px] text-gray-600">
                        <span>{prod.claimed}% claimed</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gray-700 h-full" style={{ width: `${prod.claimed}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-gray-100">
                  <span className="text-xs text-[#007185] hover:underline cursor-pointer">
                    {prod.brandLink}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}