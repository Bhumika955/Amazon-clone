'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Check, ArrowRight, TrendingUp, ShieldCheck, Wrench, Globe, ExternalLink, Calculator } from 'lucide-react';

export default function SellPage() {
  const [step, setStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Revenue Calculator States
  const [itemPrice, setItemPrice] = useState(35);
  const fbaFee = (itemPrice * 0.15 + 4.5).toFixed(2);
  const fbaNet = (itemPrice - parseFloat(fbaFee)).toFixed(2);
  const selfFee = (itemPrice * 0.15 + 6.0).toFixed(2);
  const selfNet = (itemPrice - parseFloat(selfFee)).toFixed(2);

  return (
    <div className="min-h-screen bg-white text-[#0f1111] font-sans antialiased">
      <Navbar />

      {/* 1. Seller Sub-Header Ribbon */}
      <div className="border-b border-gray-200 px-6 py-3 flex items-center justify-between bg-white sticky top-14 z-40">
        <div className="flex items-center gap-6">
          <span className="font-bold text-base text-[#0f1111]">Sell with Amazon</span>
          <div className="hidden md:flex items-center gap-1 text-xs text-gray-700">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Get 10% back on your first $50,000 in branded sales. <a href="#incentives" className="underline font-semibold">Learn more</a></span>
          </div>
        </div>
        <button
          onClick={() => alert('Sign up for an Amazon Seller Account')}
          className="bg-[#ff5900] hover:bg-[#e04f00] text-white font-bold text-xs px-5 py-2 rounded-full shadow-sm transition"
        >
          Sign up*
        </button>
      </div>

      <main className="space-y-16 pb-20">
        {/* 2. Hero Section */}
        <section className="max-w-[1440px] mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black text-[#0f1111] tracking-tight leading-[1.08]">
              Create an Amazon selling account
            </h1>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => alert('Sign up initiated!')}
                className="bg-[#ff5900] hover:bg-[#e04f00] text-white font-bold text-sm px-8 py-3 rounded-full shadow transition"
              >
                Sign up*
              </button>
              <div className="text-xs text-gray-600">
                <p className="font-semibold text-gray-800">Get 10% back on your first</p>
                <p>$50,000 in branded sales</p>
              </div>
            </div>
          </div>

          {/* Right Image with Floating Total Sales Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                alt="Amazon Sellers"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            {/* Floating Sales Badge */}
            <div className="absolute -bottom-5 left-6 bg-white p-4 rounded-xl shadow-2xl border border-gray-200 flex flex-col gap-1 animate-bounce-short">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total sales</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-[#0f1111]">$1,340,820</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <TrendingUp size={12} /> +17%
                </span>
              </div>
              <div className="w-36 h-2 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full mt-1"></div>
            </div>
          </div>
        </section>

        {/* Milestone Callout Bar */}
        <div className="border-t border-b border-gray-200 py-4 bg-gray-50 text-center text-xs sm:text-sm font-semibold text-gray-700">
          In 2024, more than 55,000 independent sellers generated over $1 million in sales*
        </div>

        {/* 3. Interactive 3-Step Wizard: "Not sure where to begin?" */}
        <section className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold text-[#ff5900] uppercase tracking-wider">✦ Guide Me</span>
              <h2 className="text-3xl font-bold text-[#0f1111] tracking-tight">Not sure where to begin?</h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                Answer three questions to learn how you can start selling with Amazon.
              </p>
            </div>

            <div className="lg:col-span-6 bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between text-[11px] text-gray-500 font-bold">
                <span>Question {step} of 3</span>
                <span className="text-[#ff5900]">33% completed</span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#ff5900] h-full" style={{ width: `${(step / 3) * 100}%` }}></div>
              </div>

              <p className="font-bold text-sm text-[#0f1111]">Where is your business based?</p>
              <div className="space-y-2">
                <button
                  onClick={() => { setSelectedLocation('US'); setStep(2); }}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-xs font-bold transition flex justify-between items-center ${selectedLocation === 'US' ? 'border-[#ff5900] bg-white text-[#ff5900]' : 'border-gray-300 bg-white hover:border-gray-400'}`}
                >
                  <span>In the US</span>
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => { setSelectedLocation('OUTSIDE'); setStep(2); }}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-xs font-bold transition flex justify-between items-center ${selectedLocation === 'OUTSIDE' ? 'border-[#ff5900] bg-white text-[#ff5900]' : 'border-gray-300 bg-white hover:border-gray-400'}`}
                >
                  <span>Outside the US</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. New Seller Incentives Section ($50,000 in incentives) */}
        <section id="incentives" className="max-w-[1300px] mx-auto px-6">
          <div className="bg-[#f7f5ee] border border-stone-200 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=80"
                  alt="Team Collaborating"
                  className="w-full h-80 object-cover"
                />
              </div>
              <span className="absolute top-4 left-4 bg-emerald-800 text-white font-bold text-[11px] px-3 py-1 rounded-full shadow">
                ★ $100 off shipments
              </span>
              <span className="absolute bottom-4 left-4 bg-white text-emerald-800 font-bold text-[11px] px-3 py-1 rounded-full shadow border border-emerald-200">
                10% on your branded sales
              </span>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="bg-emerald-800 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                New Seller Incentives
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f1111] tracking-tight">
                Get started with $50,000 in incentives
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                Ready to sell with Amazon? As a Professional seller, you can explore a series of incentives and maximize your sales potential at the same time.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-gray-800">
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>10% back on your first $50,000 in branded sales, then 5% back through your first year until you reach $1,000,000</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>$100 off shipments into our fulfillment network using the Amazon Partner Carrier program</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>Free storage and customer returns with automatic enrollment in the FBA New Selection program</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>Up to a $1,000 credit to create Sponsored Products ads</span>
                </div>
              </div>

              <p className="pt-2 text-xs font-bold text-[#007185] hover:underline cursor-pointer">
                See all incentives ↗
              </p>
            </div>
          </div>
        </section>

        {/* 5. "Why create an Amazon selling account?" + Testimonial Cards */}
        <section className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-black text-[#0f1111] tracking-tight">
              Why create an Amazon selling account?
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              By selling with Amazon, you can put your brand in front of millions of customers across the globe in a store they know and trust. Here are a few other reasons to consider selling with Amazon.
            </p>

            <div className="space-y-6 pt-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#ff5900]" />
                  <h3 className="font-bold text-sm text-[#0f1111]">Sell with a brand customers trust</h3>
                </div>
                <p className="text-xs text-gray-600 pl-7 leading-relaxed">
                  In 2023, Amazon was ranked the most trusted brand by US customers. Selling with Amazon means reaching millions of customers and tapping into a trusted shopping experience.
                </p>
                <span className="pl-7 text-xs font-bold text-[#007185] hover:underline cursor-pointer block">Explore Amazon selling stats ↗</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Wrench size={20} className="text-[#ff5900]" />
                  <h3 className="font-bold text-sm text-[#0f1111]">Grow with tools built for your success</h3>
                </div>
                <p className="text-xs text-gray-600 pl-7 leading-relaxed">
                  It takes a lot to run a business. That's why we provide every seller with a full toolkit for listing, pricing, and managing your business.
                </p>
                <span className="pl-7 text-xs font-bold text-[#007185] hover:underline cursor-pointer block">Explore Amazon tools ↗</span>
              </div>
            </div>
          </div>

          {/* Testimonial Cards on the Right */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#fdfaf5] border border-orange-100 rounded-2xl p-6 space-y-4 shadow-sm">
              <span className="font-serif tracking-widest uppercase text-xs text-gray-700 font-bold block">DIASPORA Co.</span>
              <blockquote className="text-sm font-medium text-gray-800 italic leading-relaxed">
                "I trusted that there was a community out there that cared, and to whom we mattered. All we needed to do was find them."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center text-sm">
                  SJ
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#0f1111]">Sana Javeri Kadri</p>
                  <p className="text-gray-500">Founder & Chief Executive Officer</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block">See Sana's story ↗</span>
            </div>

            <div className="bg-[#fdfaf5] border border-orange-100 rounded-2xl p-6 space-y-4 shadow-sm">
              <span className="font-serif tracking-wider uppercase text-xs text-gray-700 font-bold block">nested bean</span>
              <blockquote className="text-sm font-medium text-gray-800 italic leading-relaxed">
                "Challenges are a sign that something fundamental needs to change. In our case, it was the way we sold our products—we needed to get online."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                  MG
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#0f1111]">Manasi Gangan</p>
                  <p className="text-gray-500">Founder</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block">See Manasi's story ↗</span>
            </div>
          </div>
        </section>

        {/* 6. Big Stats Row */}
        <section className="border-t border-b border-gray-200 py-12 bg-white">
          <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-black text-[#ff5900] tracking-tight">$290,000+</p>
              <p className="text-xs text-gray-600 max-w-xs mx-auto">
                Average annual sales in the Amazon store for independent sellers in the US in 2024*
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-black text-[#ff5900] tracking-tight">+60%</p>
              <p className="text-xs text-gray-600 max-w-xs mx-auto">
                Percentage of sales in the Amazon store from independent sellers—most of which are small and medium-sized businesses*
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-black text-[#ff5900] tracking-tight">100+</p>
              <p className="text-xs text-gray-600 max-w-xs mx-auto">
                Countries and regions where Amazon ships to customers worldwide
              </p>
            </div>
          </div>
        </section>

        {/* 7. Revenue Calculator Section */}
        <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="font-bold text-xs uppercase tracking-wider text-gray-500">Interactive Preview</span>
              <span className="font-bold text-xs text-emerald-700">Live Fee Estimator</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700">Estimated Selling Price ($)</label>
              <input
                type="number"
                value={itemPrice}
                onChange={(e) => setItemPrice(Math.max(1, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-2 border rounded text-sm font-bold outline-none focus:border-[#ff5900]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white border rounded-lg p-3 text-center space-y-1">
                <span className="text-[11px] font-bold text-gray-500">Fulfillment by Amazon</span>
                <p className="text-lg font-black text-[#0f1111]">${fbaNet}</p>
                <p className="text-[10px] text-gray-400">Fees: ${fbaFee}</p>
              </div>
              <div className="bg-white border rounded-lg p-3 text-center space-y-1">
                <span className="text-[11px] font-bold text-gray-500">Your Fulfillment</span>
                <p className="text-lg font-black text-[#0f1111]">${selfNet}</p>
                <p className="text-[10px] text-gray-400">Fees: ${selfFee}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#ff5900] uppercase tracking-wider">Revenue Calculator</span>
            <h2 className="text-3xl font-black text-[#0f1111] tracking-tight">
              Estimate your revenue based on fulfillment method
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              You can use our Revenue Calculator to compare estimates for FBA and your own fulfillment method.
            </p>
            <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block">Learn more about the Revenue Calculator ↗</span>
          </div>
        </section>

        {/* 8. Growth Tools Cards Grid */}
        <section className="max-w-[1300px] mx-auto px-6 space-y-6">
          <h2 className="text-2xl font-bold text-[#0f1111]">Streamline, optimize, and expand your reach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition space-y-2">
              <h3 className="font-bold text-sm text-[#0f1111]">Amazon Global Selling</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Looking to sell internationally? Expand with tools and support for selling products in different countries.</p>
              <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block pt-2">Learn more ↗</span>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition space-y-2">
              <h3 className="font-bold text-sm text-[#0f1111]">Automate Pricing</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Use our Automate Pricing tool to set and automatically adjust prices for your products 24/7 while you focus on growth.</p>
              <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block pt-2">Learn more ↗</span>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition space-y-2">
              <h3 className="font-bold text-sm text-[#0f1111]">Currency Converter for Sellers</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Want to sell globally and get paid in your currency of choice? Receive funds automatically across borders.</p>
              <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block pt-2">Learn more ↗</span>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition space-y-2">
              <h3 className="font-bold text-sm text-[#0f1111]">Manage Your Experiments</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Brands can use our experiments tool to compare versions of titles, photos, and descriptions for maximum conversion.</p>
              <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block pt-2">Learn more ↗</span>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition space-y-2">
              <h3 className="font-bold text-sm text-[#0f1111]">Service Provider Network</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Get help from specialists who have experience working with Amazon sellers in accounting, storage, and translations.</p>
              <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block pt-2">Learn more ↗</span>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition space-y-2">
              <h3 className="font-bold text-sm text-[#0f1111]">Seller University</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Explore video tutorials and step-by-step instructions for listing, fulfillment, and other key topics.</p>
              <span className="text-xs font-bold text-[#007185] hover:underline cursor-pointer block pt-2">Learn more ↗</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}