'use client';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#232f3e] text-white font-sans select-none mt-12">
      {/* 1. Back to Top Bar */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#485769] py-4 text-xs font-semibold text-center transition cursor-pointer text-gray-100 tracking-wide"
      >
        Back to top
      </button>

      {/* 2. Primary 4-Column Directory */}
      <div className="max-w-[1000px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
        {/* Col 1 */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-white">Get to Know Us</h3>
          <ul className="space-y-2 text-gray-300 text-xs">
            <li className="hover:underline cursor-pointer"><Link href="/sell">Careers</Link></li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">About Amazon</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Amazon Devices</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-white">Make Money with Us</h3>
          <ul className="space-y-2 text-gray-300 text-xs">
            <li className="hover:underline cursor-pointer"><Link href="/sell">Sell products on Amazon</Link></li>
            <li className="hover:underline cursor-pointer"><Link href="/sell">Sell on Amazon Business</Link></li>
            <li className="hover:underline cursor-pointer">Sell apps on Amazon</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Self-Publish with Us</li>
            <li className="hover:underline cursor-pointer">Host an Amazon Hub</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-white">Amazon Payment Products</h3>
          <ul className="space-y-2 text-gray-300 text-xs">
            <li className="hover:underline cursor-pointer">Amazon Business Card</li>
            <li className="hover:underline cursor-pointer">Shop with Points</li>
            <li className="hover:underline cursor-pointer"><Link href="/gift-cards">Reload Your Balance</Link></li>
            <li className="hover:underline cursor-pointer">Amazon Currency Converter</li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-white">Let Us Help You</h3>
          <ul className="space-y-2 text-gray-300 text-xs">
            <li className="hover:underline cursor-pointer"><Link href="/customer-service">Amazon and COVID-19</Link></li>
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Your Orders</li>
            <li className="hover:underline cursor-pointer">Shipping Rates & Policies</li>
            <li className="hover:underline cursor-pointer">Returns & Replacements</li>
            <li className="hover:underline cursor-pointer">Manage Your Content and Devices</li>
            <li className="hover:underline cursor-pointer"><Link href="/customer-service">Help & Customer Service</Link></li>
          </ul>
        </div>
      </div>

      {/* 3. Logo, Language & Currency Hub Divider */}
      <div className="border-t border-[#3a4553] py-8 px-4 flex flex-wrap justify-center items-center gap-6 text-xs">
        <Link href="/" className="font-black text-2xl tracking-tighter text-white mr-6">
          amazon<span className="text-[#febd69]">.com</span>
        </Link>
        <div className="flex items-center gap-2 border border-gray-500 rounded px-3 py-1.5 text-gray-300 hover:border-white cursor-pointer">
          <Globe size={14} />
          <span>English</span>
        </div>
        <div className="border border-gray-500 rounded px-3 py-1.5 text-gray-300 hover:border-white cursor-pointer">
          $ USD - U.S. Dollar
        </div>
        <div className="flex items-center gap-1.5 border border-gray-500 rounded px-3 py-1.5 text-gray-300 hover:border-white cursor-pointer">
          <span>🇺🇸</span>
          <span>United States</span>
        </div>
      </div>

      {/* 4. Bottom Legal / Copyright Section */}
      <div className="bg-[#131a22] py-8 text-[11px] text-center text-gray-400 space-y-2 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          <span className="hover:underline cursor-pointer">Conditions of Use</span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span>
          <span className="hover:underline cursor-pointer">Consumer Health Data Privacy Disclosure</span>
          <span className="hover:underline cursor-pointer">Your Ads Privacy Choices</span>
        </div>
        <p className="pt-1">© 1996-2026, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}