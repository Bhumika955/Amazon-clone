'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Search } from 'lucide-react';

const HELP_CARDS = [
  {
    id: 'delivery',
    title: 'A delivery, order or return',
    icon: (
      <div className="w-12 h-10 bg-[#e77600]/10 border border-[#e77600]/30 rounded flex items-center justify-center text-xl shrink-0">
        📦
      </div>
    )
  },
  {
    id: 'signin',
    title: 'Help with signing in',
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#d5f0f3] flex items-center justify-center font-black text-teal-800 text-lg shrink-0">
        ➔
      </div>
    )
  },
  {
    id: 'prime',
    title: 'Prime',
    icon: (
      <div className="text-left shrink-0">
        <span className="text-xl font-black text-[#00a8e1] tracking-tighter italic block leading-none">prime</span>
        <div className="w-9 h-1.5 bg-[#00a8e1] rounded-full mt-0.5"></div>
      </div>
    )
  },
  {
    id: 'devices',
    title: 'Kindle, Fire, Alexa, or other Amazon devices',
    icon: (
      <div className="w-10 h-10 flex items-center justify-center text-2xl shrink-0">
        📱
      </div>
    )
  },
  {
    id: 'digital',
    title: 'eBooks, Prime Videos, Music, or Games',
    icon: (
      <div className="w-10 h-10 rounded-full border-2 border-amber-500 bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-sm shrink-0">
        ▶
      </div>
    )
  },
  {
    id: 'payment',
    title: 'Payment, charges or gift cards',
    icon: (
      <div className="w-11 h-9 bg-slate-800 rounded shadow flex items-center justify-center text-blue-300 text-lg shrink-0">
        💳
      </div>
    )
  },
  {
    id: 'security',
    title: 'Address, security & privacy',
    icon: (
      <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-600 text-lg shrink-0">
        🔒
      </div>
    )
  },
  {
    id: 'membership',
    title: 'Memberships, subscriptions or communications',
    icon: (
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl shrink-0">
        👤
      </div>
    )
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#007185] flex items-center justify-center text-white text-lg shrink-0">
        ♿
      </div>
    )
  },
  {
    id: 'something-else',
    title: 'Something else',
    icon: (
      <div className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700 font-bold text-lg shrink-0">
        ?
      </div>
    )
  },
  {
    id: 'suspicious',
    title: 'Report Something Suspicious',
    icon: (
      <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white text-base shrink-0">
        🚫
      </div>
    )
  }
];

const SIDEBAR_TOPICS = [
  'Take Quick Actions',
  "Where's my stuff",
  'Shipping and Delivery',
  'Returns, Refunds and Product Support',
  'Managing Your Account',
  'Security & Privacy',
  'Payment, Pricing and Promotions',
  'Devices & Digital Solutions',
  'Amazon Business Accounts',
  'Large Items and Heavy-Bulky Services',
  'Other topics & Help sites'
];

const QUICK_ACTIONS = [
  {
    title: 'Track your package',
    subtitle: 'Track your packages in Your Orders.'
  },
  {
    title: 'Return Items You Ordered',
    subtitle: 'Return your orders using our Online Return Center.'
  },
  {
    title: 'Check status of a refund',
    subtitle: 'Track your return and refunds in Your Orders.'
  },
  {
    title: 'Track Your Return',
    subtitle: 'Learn how to track your return location and status.'
  },
  {
    title: 'Manage Your Amazon Prime Membership',
    subtitle: 'Cancel your membership easily on this page.'
  },
  {
    title: 'Amazon Settlement',
    subtitle: 'Learn where to find additional information on settlements involving Amazon.'
  },
  {
    title: 'How to Update Your Amazon Payment Method',
    subtitle: 'Keeping your payment methods up to date prevents purchase and digital service interruptions.'
  },
  {
    title: 'Get Product Support',
    subtitle: 'We provide free product support when you need help using a product or if it doesn\'t work correctly.'
  },
  {
    title: 'Prime Video',
    subtitle: 'Get help using and troubleshooting common issues with Prime Video.'
  },
  {
    title: 'Amazon Music',
    subtitle: 'Get help using Amazon Music and troubleshooting common issues.'
  },
  {
    title: 'Digital Services and Device Support',
    subtitle: 'Resolve troubleshooting issues for all Kindle, Echo & Fire tablets.'
  }
];

export default function CustomerServicePage() {
  const [activeTopic, setActiveTopic] = useState('Take Quick Actions');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-[#0f1111] font-sans antialiased">
      <Navbar />

      {/* 1. Customer Service Sub-Nav Ribbon */}
      <div className="bg-[#007185] text-white px-6 py-2.5 text-xs flex items-center gap-6">
        <span className="font-bold text-sm tracking-tight pr-4 border-r border-teal-600/70">Customer Service</span>
        <span className="font-bold border-b-2 border-white pb-0.5 cursor-pointer">Home</span>
        <span className="text-teal-100 hover:text-white cursor-pointer transition">Digital Services and Device Support</span>
      </div>

      {/* 2. Teal Hero Area with 11 Help Cards */}
      <section className="bg-[#007185] text-white pt-6 pb-12 px-6">
        <div className="max-w-[1440px] mx-auto space-y-6">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome to Amazon Customer Service</h1>
            <p className="text-xs text-teal-100">We can help you take care of most things here, sign in to get started.</p>
          </div>

          {/* 11 White Pill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {HELP_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-white text-[#0f1111] rounded-lg p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition cursor-pointer border border-transparent hover:border-teal-300 group min-h-[76px]"
              >
                {card.icon}
                <span className="text-xs font-semibold leading-snug group-hover:text-[#c45500] transition">
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Search our help library section */}
      <section className="max-w-[1440px] mx-auto px-6 py-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#0f1111]">Search our help library</h2>
          <div className="relative max-w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder='Type something like, "question about a charge"'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-400 rounded-md outline-none focus:ring-2 focus:ring-[#007185] focus:border-[#007185] text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* 4. All help topics section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#0f1111]">All help topics</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 space-y-1">
              {SIDEBAR_TOPICS.map((topic) => {
                const isActive = activeTopic === topic;
                return (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`w-full text-left px-4 py-2.5 rounded-md text-xs font-medium transition ${
                      isActive
                        ? 'bg-[#007185] text-white font-bold'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>

            {/* Right Cards Grid */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUICK_ACTIONS.map((action, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg p-5 bg-white hover:border-gray-300 hover:shadow-sm transition cursor-pointer space-y-1.5"
                >
                  <h3 className="font-bold text-xs text-[#0f1111] hover:text-[#c45500]">
                    {action.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {action.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}