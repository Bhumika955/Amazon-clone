'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Globe, Gift, RotateCcw, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const OCCASIONS = [
  {
    title: 'Baby',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=70'
  },
  {
    title: 'Wedding',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&auto=format&fit=crop&q=70'
  },
  {
    title: 'Birthday',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&auto=format&fit=crop&q=70'
  },
  {
    title: 'Holiday',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&auto=format&fit=crop&q=70'
  },
  {
    title: 'Housewarming',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=70'
  },
  {
    title: 'College',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=70'
  },
  {
    title: 'Classroom',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=70'
  }
];

export default function RegistryPage() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0f1111] font-sans antialiased">
      <Navbar />

      {/* 1. Registry Sub Navigation Ribbon */}
      <div className="bg-white border-b border-gray-200 px-6 py-2.5 text-xs text-[#333] flex items-center gap-6 overflow-x-auto whitespace-nowrap">
        <span className="font-bold text-sm text-[#0f1111]">registry & gifting</span>
        <span onClick={() => alert('Search Registries modal open')} className="hover:underline cursor-pointer hover:text-[#c45500]">Find a registry or gift list</span>
        <span onClick={() => setActiveModal(true)} className="hover:underline cursor-pointer hover:text-[#c45500]">Create a registry or gift list</span>
        <Link href="/customer-service" className="hover:underline cursor-pointer hover:text-[#c45500]">Help</Link>
      </div>

      <main className="max-w-[1480px] mx-auto px-6 py-6 space-y-10">
        {/* 2. Hero 4-Column Grid: Inspiration Card + 3 Big Registry Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Text & Action Buttons */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between bg-white shadow-sm">
            <div>
              <h1 className="text-2xl font-bold leading-tight text-[#0f1111]">
                Inspiration for life's biggest moments
              </h1>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                For weddings, babies, birthdays, or any life event, registries and gift lists ensure the perfect item.
              </p>
            </div>
            <div className="space-y-2 mt-6">
              <button
                onClick={() => alert('Search Registries')}
                className="w-full py-2 px-4 rounded-full border border-gray-300 font-bold text-xs hover:bg-gray-50 transition"
              >
                Find a registry
              </button>
              <button
                onClick={() => setActiveModal(true)}
                className="w-full py-2 px-4 rounded-full bg-[#ffd814] hover:bg-[#f7ca00] font-bold text-xs border border-[#fcd200] transition shadow-sm"
              >
                Create
              </button>
            </div>
          </div>

          {/* Card 2: Baby Registry */}
          <div
            onClick={() => setActiveModal(true)}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div className="h-52 w-full overflow-hidden bg-[#faf7f2]">
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop&q=70"
                alt="Baby Registry"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-[#0f1111] group-hover:text-[#c45500]">Baby Registry</h3>
              <p className="text-xs text-gray-500 mt-0.5">Get help preparing for your new arrival.</p>
            </div>
          </div>

          {/* Card 3: Wedding Registry */}
          <div
            onClick={() => setActiveModal(true)}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div className="h-52 w-full overflow-hidden bg-[#faf7f2]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=70"
                alt="Wedding Registry"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-[#0f1111] group-hover:text-[#c45500]">Wedding Registry</h3>
              <p className="text-xs text-gray-500 mt-0.5">Register for gifts to start your new chapter.</p>
            </div>
          </div>

          {/* Card 4: Gift List */}
          <div
            onClick={() => setActiveModal(true)}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div className="h-52 w-full overflow-hidden bg-[#faf7f2]">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=70"
                alt="Gift List"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-[#0f1111] group-hover:text-[#c45500]">Gift List</h3>
              <p className="text-xs text-gray-500 mt-0.5">Share gift ideas or needs for birthdays, holidays, graduations, new homes and more.</p>
            </div>
          </div>
        </section>

        {/* 3. Section: "Reasons to register with Amazon" */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#0f1111]">Reasons to register with Amazon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border border-gray-200 rounded-lg p-6 bg-white text-center space-y-2 shadow-sm">
              <div className="w-12 h-12 mx-auto flex items-center justify-center text-slate-800">
                <Globe size={32} className="stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-sm text-[#0f1111]">Earth's biggest selection</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Add items from Amazon to create a gift registry for any occasion.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white text-center space-y-2 shadow-sm">
              <div className="w-12 h-12 mx-auto flex items-center justify-center text-slate-800">
                <Gift size={32} className="stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-sm text-[#0f1111]">Easy to share</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Share your gift registry with friends and family so they'll know exactly what gifts to get.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white text-center space-y-2 shadow-sm">
              <div className="w-12 h-12 mx-auto flex items-center justify-center text-slate-800">
                <RotateCcw size={32} className="stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-sm text-[#0f1111]">Extended returns</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Not quite right? Registry gifts have an extended return period.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Section: "Create a registry or gift list" Carousel Tiles */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0f1111]">Create a registry or gift list</h2>
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {OCCASIONS.map((occ) => (
                <div
                  key={occ.title}
                  onClick={() => setActiveModal(true)}
                  className="cursor-pointer group flex flex-col items-center"
                >
                  <div className="w-full h-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 mb-2">
                    <img
                      src={occ.image}
                      alt={occ.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-[#c45500]">
                    {occ.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Section: "Make your registry unique to you" 4 Tiles */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#0f1111]">Make your registry unique to you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="space-y-2">
              <div className="h-44 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&auto=format&fit=crop&q=70"
                  alt="Building made easy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xs text-[#0f1111]">Building made easy</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Use our recommendations or add items from product pages.
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-44 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=500&auto=format&fit=crop&q=70"
                  alt="Keep track of everything"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xs text-[#0f1111]">Keep track of everything</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                We help keep track of who bought what item and when, so it's easy for you to send thank you notes.
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-44 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=70"
                  alt="Personalize your registry"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xs text-[#0f1111]">Personalize your registry</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Add notes and highlight your most wanted gifts to guests.
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-44 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&auto=format&fit=crop&q=70"
                  alt="Easy to shop"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xs text-[#0f1111]">Easy to shop</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Shopping an Amazon Registry is a familiar experience for family and friends.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Modal for Create Registry */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4 shadow-xl border border-gray-300">
            <h3 className="text-lg font-bold text-[#0f1111]">Create a Registry or Gift List</h3>
            <p className="text-xs text-gray-600">Choose the type of list you'd like to create:</p>
            <div className="space-y-2 text-xs font-semibold">
              <button
                onClick={() => { alert('Baby Registry created successfully!'); setActiveModal(false); }}
                className="w-full p-3 text-left border rounded hover:border-[#e47911] hover:bg-[#fef8f2] flex justify-between items-center"
              >
                <span>👶 Baby Registry</span>
                <span className="text-[#007185]">Create ›</span>
              </button>
              <button
                onClick={() => { alert('Wedding Registry created successfully!'); setActiveModal(false); }}
                className="w-full p-3 text-left border rounded hover:border-[#e47911] hover:bg-[#fef8f2] flex justify-between items-center"
              >
                <span>💍 Wedding Registry</span>
                <span className="text-[#007185]">Create ›</span>
              </button>
              <button
                onClick={() => { alert('Birthday & Custom Gift List created!'); setActiveModal(false); }}
                className="w-full p-3 text-left border rounded hover:border-[#e47911] hover:bg-[#fef8f2] flex justify-between items-center"
              >
                <span>🎁 General Gift List</span>
                <span className="text-[#007185]">Create ›</span>
              </button>
            </div>
            <button
              onClick={() => setActiveModal(false)}
              className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-xs font-bold rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}