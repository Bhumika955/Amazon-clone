'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Search, MapPin, Menu, ChevronDown, Globe, X, ChevronRight, User } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export function Navbar({ onSearch }: { onSearch?: (q: string) => void }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const count = items.reduce((acc, i) => acc + i.quantity, 0);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const getSubLinkClass = (route: string) => {
    const isActive = pathname === route;
    return `border px-2 py-0.5 rounded-sm transition text-[13px] whitespace-nowrap ${
      isActive
        ? 'border-white text-[#febd69] font-bold bg-[#131921]/40'
        : 'border-transparent hover:border-white text-gray-100 font-medium'
    }`;
  };

  return (
    <>
      <header className="sticky top-0 z-40 text-white select-none font-sans">
        {/* 1. Primary Navy Top Bar (#131921) */}
        <div className="bg-[#131921] px-4 py-2 flex items-center gap-2 md:gap-4 h-15">
          {/* Amazon Logo */}
          <Link href="/" className="flex items-center px-2 py-1 border border-transparent hover:border-white rounded-sm">
            <span className="font-black text-2xl tracking-tighter text-white">
              amazon<span className="text-[#febd69]">.com</span>
            </span>
          </Link>

          {/* Deliver To */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer text-left">
            <MapPin size={18} className="text-white mt-1 shrink-0" />
            <div className="leading-tight">
              <p className="text-[#ccc] text-[11px]">Deliver to</p>
              <p className="font-bold text-white text-[13px] truncate">India</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center h-10 mx-2 focus-within:ring-2 focus-within:ring-[#f90] rounded-md">
            <div className="hidden sm:flex items-center bg-[#e6e6e6] hover:bg-[#d4d4d4] text-[#333] px-3 h-full rounded-l-md cursor-pointer border-r border-gray-300 text-xs font-normal">
              <span>All</span>
              <ChevronDown size={14} className="ml-1 opacity-60" />
            </div>
            <input
              type="text"
              placeholder="Search Amazon"
              onChange={(e) => onSearch && onSearch(e.target.value)}
              className="w-full h-full px-3 text-[#111] bg-white outline-none text-sm placeholder-gray-500 rounded-l-md sm:rounded-l-none"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] px-5 h-full rounded-r-md text-[#111] flex items-center justify-center transition shrink-0">
              <Search size={22} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-1 font-bold px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer text-[13px]">
            <Globe size={16} />
            <span>EN</span>
            <ChevronDown size={12} className="opacity-70" />
          </div>

          {/* Account & Lists */}
          <div className="px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer leading-tight text-left">
            <p className="text-[11px] text-gray-200">Hello, sign in</p>
            <div className="flex items-center gap-0.5">
              <span className="font-bold text-[13px]">Account & Lists</span>
              <ChevronDown size={12} className="opacity-70" />
            </div>
          </div>

          {/* Returns & Orders */}
          <Link href="/checkout" className="hidden sm:block px-2 py-1 border border-transparent hover:border-white rounded-sm leading-tight text-left">
            <p className="text-[11px] text-gray-200">Returns</p>
            <p className="font-bold text-[13px]">& Orders</p>
          </Link>

          {/* Cart */}
          <Link href="/checkout" className="flex items-end px-2 py-1 border border-transparent hover:border-white rounded-sm relative">
            <div className="relative">
              <ShoppingCart size={32} className="text-white" />
              <span className="absolute -top-1 left-3.5 text-[#f08804] font-black text-sm w-4 text-center">
                {count}
              </span>
            </div>
            <span className="font-bold text-[14px] ml-1 hidden md:inline mb-0.5">Cart</span>
          </Link>
        </div>

        {/* 2. Sub-Navigation Bar (#232f3e) */}
        <div className="bg-[#232f3e] px-4 py-1.5 flex items-center gap-2 md:gap-4 overflow-x-auto whitespace-nowrap">
          {/* "All" Drawer Trigger Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-1 font-bold border border-transparent hover:border-white px-2 py-0.5 rounded-sm text-[13px] cursor-pointer"
          >
            <Menu size={18} />
            <span>All</span>
          </button>

          <Link href="/prime-video" className={getSubLinkClass('/prime-video')}>
            Prime Video
          </Link>

          <Link href="/deals" className={getSubLinkClass('/deals')}>
            Coupons
          </Link>

          <Link href="/customer-service" className={getSubLinkClass('/customer-service')}>
            Customer Service
          </Link>

          <Link href="/goldbox" className={getSubLinkClass('/goldbox')}>
            Today's Deals
          </Link>

          <Link href="/registry" className={getSubLinkClass('/registry')}>
            Registry
          </Link>

          <Link href="/gift-cards" className={getSubLinkClass('/gift-cards')}>
            Gift Cards
          </Link>

          <Link href="/sell" className={getSubLinkClass('/sell')}>
            Sell
          </Link>
        </div>
      </header>

      {/* 3. Off-Canvas Left Drawer Sidebar (Exact Screenshot Match) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Dim */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
          />

          {/* Drawer Menu Panel */}
          <div className="relative w-[365px] max-w-[85vw] h-full bg-white text-[#0f1111] z-50 flex flex-col shadow-2xl overflow-hidden animate-slideRight">
            {/* Header: Hello, sign in */}
            <div className="bg-[#232f3e] text-white px-9 py-3.5 flex items-center gap-3 shrink-0">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                <User size={18} />
              </div>
              <span className="font-bold text-lg tracking-tight">Hello, sign in</span>
            </div>

            {/* Scrollable Menu Items */}
            <div className="flex-1 overflow-y-auto text-[13px] divide-y divide-gray-200">
              {/* Digital Content & Devices */}
              <div className="py-3">
                <h3 className="font-bold text-sm text-[#0f1111] px-9 py-2 uppercase tracking-wide">
                  Digital Content & Devices
                </h3>
                <Link
                  href="/prime-video"
                  onClick={() => setDrawerOpen(false)}
                  className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800"
                >
                  <span>Prime Video</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Amazon Music</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Kindle E-readers & Books</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Amazon Appstore</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </div>

              {/* Shop by Department */}
              <div className="py-3">
                <h3 className="font-bold text-sm text-[#0f1111] px-9 py-2 uppercase tracking-wide">
                  Shop by Department
                </h3>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Electronics</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Computers</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Smart Home</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Arts & Crafts</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-2.5 flex items-center gap-2 hover:bg-gray-100 cursor-pointer text-gray-800 font-medium">
                  <span>See all</span>
                  <ChevronDown size={14} className="text-gray-500" />
                </div>
              </div>

              {/* Programs & Features */}
              <div className="py-3">
                <h3 className="font-bold text-sm text-[#0f1111] px-9 py-2 uppercase tracking-wide">
                  Programs & Features
                </h3>
                <Link
                  href="/gift-cards"
                  onClick={() => setDrawerOpen(false)}
                  className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800"
                >
                  <span>Gift Cards</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Shop By Interest</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Amazon Live</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>International Shopping</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <div className="px-9 py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>Amazon Second Chance</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </div>

              {/* Help & Settings */}
              <div className="py-3">
                <h3 className="font-bold text-sm text-[#0f1111] px-9 py-2 uppercase tracking-wide">
                  Help & Settings
                </h3>
                <div className="px-9 py-3 hover:bg-gray-100 cursor-pointer text-gray-800">
                  Your Account
                </div>
                <div className="px-9 py-3 flex items-center gap-2 hover:bg-gray-100 cursor-pointer text-gray-800">
                  <Globe size={14} className="text-gray-500" />
                  <span>English</span>
                </div>
                <div className="px-9 py-3 flex items-center gap-2 hover:bg-gray-100 cursor-pointer text-gray-800">
                  <span>🇺🇸 United States</span>
                </div>
                <Link
                  href="/customer-service"
                  onClick={() => setDrawerOpen(false)}
                  className="block px-9 py-3 hover:bg-gray-100 cursor-pointer text-gray-800"
                >
                  Customer Service
                </Link>
                <div className="px-9 py-3 hover:bg-gray-100 cursor-pointer text-gray-800 font-medium">
                  Sign in
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Close Button: Floating 'X' outside the drawer */}
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close Menu"
            className="h-10 w-10 text-white hover:text-gray-300 flex items-center justify-center m-3 z-50 cursor-pointer"
          >
            <X size={28} className="stroke-[2.5]" />
          </button>
        </div>
      )}
    </>
  );
}