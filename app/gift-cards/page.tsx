'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { useCartStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { ChevronRight, ChevronLeft, CreditCard, Wallet, RefreshCw, X, CheckCircle2 } from 'lucide-react';

export default function GiftCardsPage() {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);

  const [modalType, setModalType] = useState<'redeem' | 'balance' | 'reload' | null>(null);
  const [balance, setBalance] = useState(124.50);
  const [redeemCode, setRedeemCode] = useState('');
  const [redeemSuccess, setRedeemSuccess] = useState(false);

  const handleCardClick = (title: string, price: number) => {
    addItem({
      id: `gc-${Date.now()}`,
      title: title,
      price: price,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300'
    });
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-white text-[#0f1111] font-sans antialiased">
      <Navbar />

      {/* 1. Level-3 Sub Navigation Bar */}
      <div className="bg-[#fafafa] border-b border-gray-200 px-6 py-2 text-[12px] text-[#333] flex items-center gap-6 overflow-x-auto whitespace-nowrap">
        <span className="font-bold text-[#0f1111] border-b-2 border-[#e47911] pb-1 cursor-pointer">Gift Cards</span>
        <span onClick={() => setModalType('redeem')} className="hover:underline cursor-pointer hover:text-[#c45500]">Redeem Gift Cards</span>
        <span onClick={() => setModalType('balance')} className="hover:underline cursor-pointer hover:text-[#c45500]">View Your Balance</span>
        <span onClick={() => setModalType('reload')} className="hover:underline cursor-pointer hover:text-[#c45500]">Reload Your Balance</span>
        <span className="hover:underline cursor-pointer hover:text-[#c45500]">Bulk Gift Cards</span>
        <span className="hover:underline cursor-pointer hover:text-[#c45500]">Be Informed</span>
        <span className="hover:underline cursor-pointer hover:text-[#c45500]">Find a Gift</span>
        <span className="hover:underline cursor-pointer hover:text-[#c45500]">Registry & Gifting</span>
      </div>

      <main className="max-w-[1480px] mx-auto px-6 py-6 space-y-9">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#0f1111] tracking-tight">The Gift Card Shop</h1>

        {/* 2. Top 3 Action Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => setModalType('redeem')}
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#f7fafa] hover:bg-[#ebf3f5] border border-gray-200 cursor-pointer transition shadow-sm"
          >
            <div className="w-9 h-6 border-2 border-gray-700 rounded flex items-center justify-center font-mono text-[9px] font-bold text-gray-700">
              xxxx
            </div>
            <span className="text-[13px] font-medium text-[#0f1111]">Redeem a gift card</span>
          </div>

          <div
            onClick={() => setModalType('balance')}
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#f7fafa] hover:bg-[#ebf3f5] border border-gray-200 cursor-pointer transition shadow-sm"
          >
            <div className="w-8 h-6 border-2 border-gray-700 rounded-md flex items-center justify-center font-bold text-gray-700 text-xs">
              $
            </div>
            <span className="text-[13px] font-medium text-[#0f1111]">View your balance</span>
          </div>

          <div
            onClick={() => setModalType('reload')}
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#f7fafa] hover:bg-[#ebf3f5] border border-gray-200 cursor-pointer transition shadow-sm"
          >
            <div className="w-7 h-7 rounded-full border-2 border-gray-700 flex items-center justify-center font-bold text-gray-700 text-xs">
              ↻
            </div>
            <span className="text-[13px] font-medium text-[#0f1111]">Reload</span>
          </div>
        </div>

        {/* 3. Section: "So many ways to celebrate" */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-[#0f1111]">So many ways to celebrate</h2>
            <span className="text-xs text-[#007185] hover:underline cursor-pointer">Shop all</span>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {/* Card 1: Visa */}
              <div onClick={() => handleCardClick("Visa Virtual eGift Card | $100", 100)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-gray-300 p-3 shadow-sm bg-gradient-to-br from-slate-200 via-gray-100 to-slate-300 flex flex-col justify-between relative overflow-hidden group-hover:shadow-md transition">
                  <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:8px_8px] opacity-40"></div>
                  <div className="relative z-10 text-right text-[9px] font-bold tracking-widest text-slate-600">DEBIT</div>
                  <div className="relative z-10 text-center">
                    <span className="text-3xl font-black italic tracking-tighter text-[#1a1f71]">VISA</span>
                    <p className="text-[7px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">VIRTUAL GIFT · ONLINE USE ONLY</p>
                  </div>
                  <div className="relative z-10 text-[8px] font-mono text-slate-500">•••• 4829</div>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Visa Virtual eGift Card | $100 (plus...</h3>
                <p className="text-xs font-bold text-red-700">₹10,172.15</p>
              </div>

              {/* Card 2: Bath & Body Works */}
              <div onClick={() => handleCardClick("Bath & Body Works eGift Card | Birthday", 50)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-pink-200 p-3 shadow-sm bg-gradient-to-b from-[#ffe5ee] via-[#fff0f5] to-[#ffe5ee] flex flex-col justify-between text-center relative overflow-hidden group-hover:shadow-md transition">
                  <div className="pt-2">
                    <p className="font-serif italic text-pink-500 text-xs">` Surprise! `</p>
                    <h4 className="text-lg font-black text-pink-600 tracking-tight leading-none mt-1">HAPPY<br/>BIRTHDAY</h4>
                  </div>
                  <div className="bg-[#002f6c] text-white py-1 text-[10px] font-bold rounded tracking-wide">
                    Bath&Body Works
                  </div>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Bath & Body Works eGift Card |...</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>

              {/* Card 3: Amazon Teal Desk Flatlay */}
              <div onClick={() => handleCardClick("Amazon eGift Card | Any Occasion", 50)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-teal-600 p-2 shadow-sm bg-[#18a2b8] text-white flex flex-col justify-between relative overflow-hidden group-hover:shadow-md transition">
                  <div className="flex justify-between items-center text-[9px] opacity-90">
                    <span className="font-bold">amazon</span>
                    <span className="bg-black/20 px-2 py-0.5 rounded font-mono text-[8px]">10:38</span>
                  </div>
                  {/* Flatlay illustration items */}
                  <div className="grid grid-cols-4 gap-1 items-center px-2 py-1 bg-black/10 rounded">
                    <span className="text-sm">🎧</span>
                    <span className="text-sm">🎮</span>
                    <span className="text-sm">☕</span>
                    <span className="text-sm">⌨️</span>
                  </div>
                  <div className="text-[10px] font-bold tracking-wider text-center bg-teal-800/60 py-0.5 rounded">
                    eGIFT CARD
                  </div>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Amazon eGift Card | Any Occasion</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>

              {/* Card 4: Amazon Printable Balloon Card */}
              <div onClick={() => handleCardClick("Amazon Printable Gift Card | Birthday", 50)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-gray-300 p-3 shadow-sm bg-gradient-to-tr from-cyan-100 via-amber-50 to-blue-100 flex flex-col justify-between text-center relative group-hover:shadow-md transition">
                  <div className="flex justify-center gap-1.5 pt-1">
                    <span className="text-base">🎈</span>
                    <span className="text-xl">🎈</span>
                    <span className="text-base">🎈</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-amber-600">Happy Birthday</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[#ff9900] font-black text-xs">amazon</span>
                  </div>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Amazon Printable Gift Card | Print...</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>

              {/* Card 5: Ulta Beauty Cake */}
              <div onClick={() => handleCardClick("Ulta Beauty eGift Card", 75)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-orange-200 p-3 shadow-sm bg-white flex flex-col justify-between relative group-hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <span className="text-[#f26522] font-black text-xl tracking-tight">(ULTA</span>
                    <span className="text-2xl">🍰</span>
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-rose-50 border border-rose-200 rounded text-rose-600 font-bold text-[11px]">
                      BEAUTY CARD
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-400 text-center font-bold tracking-wider">BEAUTY REWARDS</p>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Ulta Beauty eGift Card | Choose fro...</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>

              {/* Card 6: Amazon Birthday Confetti */}
              <div onClick={() => handleCardClick("Amazon eGift Card | Birthday Balloons", 50)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-amber-300 p-3 shadow-sm bg-gradient-to-br from-amber-100 via-rose-100 to-teal-100 flex flex-col justify-between relative group-hover:shadow-md transition">
                  <div className="flex justify-between text-xs">
                    <span>🎉</span>
                    <span>✨</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-black text-[#131921]">amazon</span>
                    <div className="w-16 h-2 bg-[#ff9900] rounded-full mx-auto mt-0.5"></div>
                  </div>
                  <p className="text-[9px] text-center font-bold text-gray-600">BIRTHDAY SURPRISE</p>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Amazon eGift Card | Birthday</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>
            </div>

            {/* Right Arrow */}
            <div className="absolute -right-3 top-16 bg-white shadow-md border border-gray-300 rounded-full w-8 h-8 hidden md:flex items-center justify-center cursor-pointer hover:bg-gray-50 z-20">
              <ChevronRight size={18} />
            </div>
          </div>
        </section>

        {/* 4. Section: "Customers love these gift cards" */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-[#0f1111]">Customers love these gift cards</h2>
            <span className="text-xs text-[#007185] hover:underline cursor-pointer">Shop all</span>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {/* Row 2 - 1: Amazon Classic Black */}
              <div onClick={() => handleCardClick("Amazon eGift Card | Amazon Designs", 50)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-black p-4 shadow-sm bg-[#131921] text-white flex flex-col justify-center items-center group-hover:shadow-md transition">
                  <span className="text-3xl font-black tracking-tight text-white">amazon</span>
                  <div className="w-20 h-2 bg-[#ff9900] rounded-full mt-1"></div>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Amazon eGift Card | Amazon Designs</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>

              {/* Row 2 - 2: Welcome Little One */}
              <div onClick={() => handleCardClick("Amazon eGift Card | Baby & Kids", 50)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-cyan-200 p-3 shadow-sm bg-[#e8f7fa] flex flex-col justify-center items-center text-center group-hover:shadow-md transition">
                  <div className="w-20 h-20 rounded-full bg-[#fdf5e6] border border-amber-200 flex flex-col justify-center items-center shadow-inner">
                    <p className="text-[10px] font-bold text-teal-800 leading-tight">Welcome</p>
                    <p className="text-[11px] font-black text-amber-700 leading-tight">Little One</p>
                  </div>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Amazon eGift Card | Baby & Kids</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>

              {/* Row 2 - 3: Starbucks Siren */}
              <div onClick={() => handleCardClick("Starbucks eGift Card", 20)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-gray-300 p-3 shadow-sm bg-white flex flex-col justify-center items-center group-hover:shadow-md transition">
                  <div className="w-16 h-16 rounded-full bg-[#006241] flex items-center justify-center text-white text-3xl shadow">
                    ☕
                  </div>
                  <span className="text-[11px] font-black tracking-wider text-[#006241] mt-2 uppercase">STARBUCKS</span>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Starbucks eGift Card | Choose from...</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹1,440.00</p>
              </div>

              {/* Row 2 - 4: DoorDash */}
              <div onClick={() => handleCardClick("DoorDash eGift Card", 50)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-gray-200 p-3 shadow-sm bg-white flex flex-col justify-between items-center group-hover:shadow-md transition text-center">
                  <div className="mt-2 text-[#ff3008] font-black text-4xl">
                    D
                  </div>
                  <p className="text-[8px] font-bold tracking-widest text-gray-500 uppercase">YOUR DOOR TO MORE</p>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">DoorDash eGift Card | Choose from...</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>

              {/* Row 2 - 5: Amazon Birthday Confetti 2 */}
              <div onClick={() => handleCardClick("Amazon eGift Card | Birthday Celebration", 50)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-amber-200 p-3 shadow-sm bg-gradient-to-r from-orange-50 via-amber-100 to-rose-50 flex flex-col justify-center items-center group-hover:shadow-md transition">
                  <div className="text-center">
                    <span className="text-2xl font-black text-slate-800">amazon</span>
                    <p className="text-[9px] font-bold text-amber-800 tracking-widest mt-1 uppercase">CELEBRATE</p>
                  </div>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Amazon eGift Card | Birthday</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹4,800.00</p>
              </div>

              {/* Row 2 - 6: Uber / Uber Eats */}
              <div onClick={() => handleCardClick("Uber eGift Card", 20)} className="group cursor-pointer">
                <div className="h-36 rounded-lg border border-black p-3 shadow-sm bg-black text-white flex flex-col justify-between group-hover:shadow-md transition">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span>Uber</span>
                    <span className="text-emerald-400">Uber Eats</span>
                  </div>
                  <div className="text-center my-auto">
                    <p className="text-[9px] text-gray-300 font-medium">Go anywhere. Get anything.</p>
                  </div>
                  <div className="text-right text-[8px] text-gray-500 font-mono">GIFT CARD</div>
                </div>
                <h3 className="text-xs mt-2 text-[#0f1111] line-clamp-1 group-hover:text-[#c45500]">Uber eGift Card | Choose from...</h3>
                <p className="text-xs font-bold text-[#0f1111]">₹1,440.00</p>
              </div>
            </div>

            <div className="absolute -right-3 top-16 bg-white shadow-md border border-gray-300 rounded-full w-8 h-8 hidden md:flex items-center justify-center cursor-pointer hover:bg-gray-50 z-20">
              <ChevronRight size={18} />
            </div>
          </div>
        </section>

        {/* 5. Orange Banner: Send via Shareable Link */}
        <div className="space-y-1">
          <p className="text-xs font-bold text-gray-700">New Product Features</p>
          <div className="bg-gradient-to-r from-[#ff7a00] via-[#ff9900] to-[#ffaa00] text-white p-4 rounded-md flex justify-between items-center shadow-sm cursor-pointer hover:brightness-105 transition">
            <div>
              <h3 className="font-bold text-base sm:text-lg tracking-tight">Send a gift card via Shareable Link</h3>
              <p className="text-xs text-orange-100">A flexible delivery option for any occasion</p>
            </div>
            <span className="bg-white text-gray-900 font-bold text-xs px-4 py-2 rounded-full shadow-sm">
              Explore Link Sharing
            </span>
          </div>
        </div>

        {/* 6. Section: Shop gift cards by occasion (4 Pedestal Cards) */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0f1111]">Shop gift cards by occasion</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="border border-gray-200 rounded-lg p-4 bg-[#fcfcfc] text-center hover:shadow-md transition cursor-pointer">
              <div className="h-32 bg-gradient-to-b from-amber-50 to-orange-100 rounded-md flex items-center justify-center text-4xl mb-3 shadow-inner">
                🎂
              </div>
              <p className="font-bold text-xs text-[#0f1111]">Birthday</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-[#fcfcfc] text-center hover:shadow-md transition cursor-pointer">
              <div className="h-32 bg-gradient-to-b from-rose-50 to-pink-100 rounded-md flex items-center justify-center text-4xl mb-3 shadow-inner">
                💐
              </div>
              <p className="font-bold text-xs text-[#0f1111]">Appreciation</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-[#fcfcfc] text-center hover:shadow-md transition cursor-pointer">
              <div className="h-32 bg-gradient-to-b from-sky-50 to-indigo-100 rounded-md flex items-center justify-center text-4xl mb-3 shadow-inner">
                🎉
              </div>
              <p className="font-bold text-xs text-[#0f1111]">Celebration</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-[#fcfcfc] text-center hover:shadow-md transition cursor-pointer">
              <div className="h-32 bg-gradient-to-b from-emerald-50 to-teal-100 rounded-md flex items-center justify-center text-4xl mb-3 shadow-inner">
                🎁
              </div>
              <p className="font-bold text-xs text-[#0f1111]">Any Occasion</p>
            </div>
          </div>
        </section>

        {/* 7. Section: Shop gift cards by brand (Tiles Grid) */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0f1111]">Shop gift cards by brand</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="bg-[#131921] text-white p-6 rounded-lg flex flex-col justify-center items-center text-center cursor-pointer hover:bg-black transition">
              <span className="font-bold text-sm">Shop</span>
              <span className="font-black text-2xl text-[#febd69]">450+</span>
              <span className="font-bold text-sm">brands</span>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center text-center bg-white cursor-pointer hover:shadow-md transition">
              <span className="text-2xl font-black tracking-tight text-[#131921]">amazon</span>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center text-center bg-white cursor-pointer hover:shadow-md transition">
              <span className="text-lg font-bold text-gray-800"> Gift Card</span>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center text-center bg-[#fafafa] cursor-pointer hover:shadow-md transition">
              <span className="font-serif text-sm font-bold text-slate-800 leading-tight">Bath<br/>&Body<br/>Works</span>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center text-center bg-white cursor-pointer hover:shadow-md transition">
              <span className="text-xl font-black text-[#ff3008] tracking-tight">DOORDASH</span>
            </div>
          </div>
        </section>

        {/* 8. Category Filter Pills */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold text-gray-700">Shop gift cards by category</h2>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded border border-gray-200 cursor-pointer font-medium">Restaurant, coffee & grocery</span>
            <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded border border-gray-200 cursor-pointer font-medium">Movie, music & games</span>
            <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded border border-gray-200 cursor-pointer font-medium">Travel & rideshare</span>
            <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded border border-gray-200 cursor-pointer font-medium">Style & beauty</span>
          </div>
        </section>

        {/* 9. Shop gift cards by delivery type (3 Big Photo Cards) */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0f1111]">Shop gift cards by delivery type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="h-44 bg-gradient-to-r from-cyan-800 to-slate-900 flex items-center justify-center text-white text-5xl">
                📱
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-[#0f1111]">eGift Card</h3>
                <p className="text-xs text-gray-500 mt-1">Instant delivery via email or messaging app with custom design.</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="h-44 bg-gradient-to-r from-amber-700 to-orange-900 flex items-center justify-center text-white text-5xl">
                📦
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-[#0f1111]">Physical Gift Card</h3>
                <p className="text-xs text-gray-500 mt-1">Free One-Day delivery in premium gift boxes or festive tins.</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="h-44 bg-gradient-to-r from-slate-700 to-zinc-900 flex items-center justify-center text-white text-5xl">
                🖨️
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-[#0f1111]">Print at Home</h3>
                <p className="text-xs text-gray-500 mt-1">Ready in minutes. Print on standard paper and fold into greeting card.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Dual Business Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-100 border border-gray-300 rounded-lg p-6 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-bold text-base text-[#0f1111]">Bulk Gift Cards</h3>
              <p className="text-xs text-gray-600 mt-1">Buy, customize, and send up to 20,000 gift cards on one platform.</p>
              <p className="text-xs font-bold text-blue-900 mt-2">amazon business ›</p>
            </div>
            <div className="text-4xl">💳💳</div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-gray-100 border border-gray-300 rounded-lg p-6 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-bold text-base text-[#0f1111]">Amazon Incentives Portal</h3>
              <p className="text-xs text-gray-600 mt-1">View orders and manage account details for corporate gifting.</p>
              <p className="text-xs font-bold text-[#007185] mt-2">Manage Portal ›</p>
            </div>
            <div className="text-4xl">🎁</div>
          </div>
        </div>

        {/* 11. Fraud Prevention Banner */}
        <div className="bg-[#f7fafa] border border-gray-200 rounded p-3 text-center text-xs text-gray-700 hover:underline cursor-pointer">
          Learn more about gift card scams and fraud prevention ▸
        </div>

        {/* 12. FAQ Section */}
        <section className="space-y-4 pt-4 border-t border-gray-200">
          <h2 className="text-base font-bold text-[#0f1111]">Frequently Asked Questions</h2>
          <div className="space-y-3 text-xs text-gray-600 leading-relaxed max-w-4xl">
            <div>
              <h4 className="font-bold text-[#0f1111]">What can Amazon Gift Cards be redeemed towards?</h4>
              <p>Amazon Gift Cards are redeemable towards the purchase of millions of eligible goods and services provided by Amazon.com Services LLC and its affiliates.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0f1111]">Are there any shipping costs on Amazon Gift Cards?</h4>
              <p>Physical Amazon.com gift cards are delivered with FREE One-Day shipping when you select One-Day shipping at checkout.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0f1111]">Are there any fees or expiration date to use Amazon Gift Cards?</h4>
              <p>Amazon Gift Cards have no fees and no expiration date.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Modals for Top 3 Pills */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl border border-gray-300">
            <button
              onClick={() => { setModalType(null); setRedeemSuccess(false); setRedeemCode(''); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            {modalType === 'redeem' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f1111]">Redeem an Amazon Gift Card</h3>
                {redeemSuccess ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-center space-y-2">
                    <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                    <p className="font-bold text-emerald-800 text-sm">₹4,800.00 Applied to Your Balance!</p>
                    <p className="text-xs text-gray-600">New Available Balance: ${(balance + 50).toFixed(2)}</p>
                  </div>
                ) : (
                  <>
                    <p className="text-xs text-gray-600">Enter the 14 or 15 character claim code found on the back of your card.</p>
                    <input
                      type="text"
                      placeholder="e.g. AG26-K9P3X2-89L1"
                      value={redeemCode}
                      onChange={(e) => setRedeemCode(e.target.value.toUpperCase())}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm uppercase tracking-wider font-mono outline-none focus:border-[#e77600]"
                    />
                    <button
                      onClick={() => {
                        if (redeemCode.trim()) {
                          setBalance(balance + 50);
                          setRedeemSuccess(true);
                        }
                      }}
                      className="w-full py-2 bg-[#ffd814] hover:bg-[#f7ca00] font-bold text-xs rounded-full border border-[#fcd200]"
                    >
                      Apply to your balance
                    </button>
                  </>
                )}
              </div>
            )}

            {modalType === 'balance' && (
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-bold text-[#0f1111]">Your Gift Card Balance</h3>
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Available Store Credit</p>
                  <p className="text-4xl font-black text-emerald-700 mt-1">${balance.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => setModalType('reload')}
                  className="w-full py-2 bg-[#ffd814] hover:bg-[#f7ca00] font-bold text-xs rounded-full border border-[#fcd200]"
                >
                  Reload Balance Now
                </button>
              </div>
            )}

            {modalType === 'reload' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f1111]">Reload Your Balance</h3>
                <p className="text-xs text-gray-600">Select an amount to reload instantly:</p>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {[25, 50, 100, 250].map((val) => (
                    <button
                      key={val}
                      onClick={() => {
                        setBalance(balance + val);
                        alert(`$${val} reloaded successfully!`);
                        setModalType(null);
                      }}
                      className="py-2 border border-gray-300 rounded font-bold hover:bg-[#fef8f2] hover:border-[#e77600]"
                    >
                      +${val}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}