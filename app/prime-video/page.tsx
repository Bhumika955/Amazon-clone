'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Play, Plus, ThumbsUp, Info, X, ChevronRight, ChevronLeft, Search, Grid } from 'lucide-react';

interface MovieItem {
  id: string;
  title: string;
  categoryBadge?: string;
  isLive?: boolean;
  match: string;
  ageRating: string;
  duration: string;
  genre: string;
  description: string;
  image: string;
  subText?: string;
}

const SPORTS_ITEMS = [
  {
    id: 'sp-1',
    title: 'Sep 20 - PTT Essen',
    subText: 'UTR PRO TENNIS EUROPE',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=70',
    match: '98%',
    ageRating: 'ALL',
    duration: 'Live Now',
    genre: 'Tennis · European Tour',
    description: 'Watch live tennis coverage from the UTR Pro Tennis Tour in Essen, Germany.'
  },
  {
    id: 'sp-2',
    title: '3rd ODI: Zimbabwe vs. Australia',
    subText: 'Cricket · Bilateral Series',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&auto=format&fit=crop&q=70',
    match: '95%',
    ageRating: 'ALL',
    duration: 'Live Now',
    genre: 'Cricket · One Day International',
    description: 'Live action as Zimbabwe takes on Australia in the thrilling series decider.'
  },
  {
    id: 'sp-3',
    title: 'Qatar Airways Grand Prix of Austria',
    subText: 'MotoGP World Championship',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=70',
    match: '99%',
    ageRating: 'ALL',
    duration: 'Live Now',
    genre: 'Motorsport · MotoGP',
    description: 'High-speed motorcycle racing from the Red Bull Ring in Spielberg, Austria.'
  },
  {
    id: 'sp-4',
    title: 'Atlético Madrid vs. Real Madrid',
    subText: 'Live at 7:45 PM IST',
    isLive: false,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=70',
    match: '97%',
    ageRating: 'ALL',
    duration: 'Upcoming',
    genre: 'Football · LaLiga Santander',
    description: 'The intense Madrid Derby with both rivals battling for the top of the table.'
  }
];

const ORIGINALS_ITEMS: MovieItem[] = [
  {
    id: 'orig-1',
    title: 'Revolutionaries',
    categoryBadge: 'NEW SERIES',
    match: '96%',
    ageRating: '16+',
    duration: '1 Season',
    genre: 'Historical Drama · Action',
    description: 'The untold saga of brave Indian freedom fighters who challenged an entire empire.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 'orig-2',
    title: 'NEAGLEY: From The World of Reacher',
    categoryBadge: 'NEW SERIES',
    match: '99%',
    ageRating: 'TV-MA',
    duration: 'Season 1',
    genre: 'Action · Crime · Thriller',
    description: 'When Neagley learns that a friend from her past has been killed, she becomes hell-bent on justice.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 'orig-3',
    title: 'Drawn Together',
    categoryBadge: 'NEW MOVIE',
    match: '91%',
    ageRating: '13+',
    duration: '1h 54m',
    genre: 'Comedy · Animation',
    description: 'Two estranged artists accidentally sign up for the same high-stakes creative retreat.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 'orig-4',
    title: 'Our Universe',
    categoryBadge: 'RECENTLY ADDED',
    match: '94%',
    ageRating: 'ALL',
    duration: 'Docuseries',
    genre: 'Documentary · Science',
    description: 'Explore the fascinating cosmic story of how Earth and humanity came to exist.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 'orig-5',
    title: 'You & Me',
    categoryBadge: 'NEW MOVIE',
    match: '93%',
    ageRating: '16+',
    duration: '2h 10m',
    genre: 'Romance · Drama',
    description: 'A chance meeting on a delayed train sparks a love story that spans across continents.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=70'
  }
];

const TV_SHOWS: MovieItem[] = [
  {
    id: 'tv-1',
    title: 'Reacher',
    categoryBadge: 'SEASON FINALE',
    match: '98%',
    ageRating: '18+',
    duration: '2 Seasons',
    genre: 'Action · Crime',
    description: 'Jack Reacher was arrested for murder and now the cops need his help.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 'tv-2',
    title: 'Ram Leela',
    categoryBadge: 'NEW MOVIE',
    match: '92%',
    ageRating: '13+',
    duration: '2h 35m',
    genre: 'Musical · Drama',
    description: 'Passionate lovers caught in the crossfire of fifty years of family hostility.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 'tv-3',
    title: 'Monster Island',
    categoryBadge: 'RECENTLY ADDED',
    match: '89%',
    ageRating: '16+',
    duration: '1 Season',
    genre: 'Sci-Fi · Adventure',
    description: 'A scientific expedition lands on an uncharted Pacific island with ancient beasts.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 'tv-4',
    title: 'Mirzapur',
    categoryBadge: 'MOST LIKED',
    match: '99%',
    ageRating: '18+',
    duration: '3 Seasons',
    genre: 'Crime · Thriller · Drama',
    description: 'A shocking incident at a wedding procession ignites a brutal war of power and vengeance.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 'tv-5',
    title: 'Magudam',
    categoryBadge: 'NEW MOVIE',
    match: '94%',
    ageRating: '16+',
    duration: '2h 15m',
    genre: 'Action · Thriller',
    description: 'A skilled operative goes undercover to neutralize a syndicate threatening national security.',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=70'
  }
];

export default function PrimeVideoPage() {
  const [showNotice, setShowNotice] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans antialiased selection:bg-[#00a8e1] selection:text-white">
      <Navbar />

      {/* 1. International Travelers Banner */}
      {showNotice && (
        <div className="bg-[#007185] text-white px-6 py-2.5 text-xs flex items-center justify-between border-b border-teal-600">
          <div className="flex items-center gap-2">
            <span className="font-bold border border-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">i</span>
            <span>Traveling or based outside United States? Video availability outside of United States varies. Sign in to see videos available to you.</span>
          </div>
          <button onClick={() => setShowNotice(false)} className="hover:opacity-80">
            <X size={16} />
          </button>
        </div>
      )}

      {/* 2. Prime Video Navigation Bar */}
      <nav className="bg-[#0f172a]/95 backdrop-blur sticky top-14 z-40 px-6 py-3 flex items-center justify-between border-b border-gray-800 text-sm">
        <div className="flex items-center gap-6">
          <span className="font-black text-xl tracking-tighter text-[#00a8e1] italic">prime video</span>
          <div className="flex items-center gap-2">
            <span className="bg-white text-black font-bold px-4 py-1.5 rounded-full text-xs cursor-pointer shadow">Home</span>
            <span className="text-gray-300 hover:text-white px-3 py-1.5 cursor-pointer text-xs transition">Movies</span>
            <span className="text-gray-300 hover:text-white px-3 py-1.5 cursor-pointer text-xs transition">TV shows</span>
            <span className="text-gray-300 hover:text-white px-3 py-1.5 cursor-pointer text-xs transition">Sports</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-300">
          <Search size={18} className="hover:text-white cursor-pointer" />
          <Grid size={18} className="hover:text-white cursor-pointer" />
          <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white border border-slate-600">
            👤
          </div>
        </div>
      </nav>

      {/* 3. Hero Feature: NEAGLEY (From the World of Reacher) */}
      <section className="relative min-h-[500px] lg:min-h-[560px] flex items-center px-6 lg:px-16 overflow-hidden">
        {/* Background Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80"
            alt="Neagley"
            className="w-full h-full object-cover object-right"
          />
          {/* Fading Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl space-y-4 py-10">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#00a8e1]">prime original</p>
            <p className="text-sm font-semibold tracking-wider text-gray-300">FROM THE WORLD OF REACHER</p>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-amber-500 font-serif leading-none">
              NEAGLEY
            </h1>
            <p className="text-xs text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
              <span>⚡</span> All episodes available
            </p>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
            Season 1 · When Neagley learns that a friend from her past has been killed in a suspicious accident, she becomes hell-bent on justice and vengeance.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-bold text-xs rounded-md flex items-center gap-2 shadow-lg transition">
              <Play size={16} className="fill-black" />
              <div>
                <p className="leading-tight text-[11px] font-semibold text-gray-700">Watch with Prime</p>
                <p className="font-extrabold text-xs">Start your 30-day free trial</p>
              </div>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-400 bg-slate-900/60 flex items-center justify-center hover:border-white transition">
              <Plus size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-400 bg-slate-900/60 flex items-center justify-center hover:border-white transition">
              <Info size={18} />
            </button>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-gray-400 pt-2">
            <span className="border border-gray-600 px-1.5 py-0.5 rounded text-[10px] font-bold text-gray-300">TV-MA</span>
            <span>Terms apply</span>
          </div>
        </div>
      </section>

      {/* 4. Carousels with Hover Zoom Card Effect */}
      <main className="px-6 lg:px-12 py-8 space-y-10 relative z-20">
        {/* Section 1: Sports and events with a subscription */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-white">Sports and events with a subscription</h2>
            <span className="text-xs text-[#00a8e1] hover:underline cursor-pointer">See more ›</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SPORTS_ITEMS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative cursor-pointer transition-all duration-300 transform hover:scale-105 hover:z-30 group"
              >
                <div className="rounded-lg overflow-hidden border border-gray-800 bg-slate-900 shadow-lg group-hover:shadow-2xl group-hover:border-[#00a8e1] transition">
                  <div className="h-44 w-full relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    {item.isLive && (
                      <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded">
                        LIVE
                      </span>
                    )}
                  </div>
                  <div className="p-3 bg-slate-900/95 space-y-1">
                    <h4 className="font-bold text-xs text-white line-clamp-1">{item.title}</h4>
                    <p className="text-[11px] text-gray-400">{item.subText}</p>
                    {/* Hover expanded metadata */}
                    {hoveredCard === item.id && (
                      <div className="pt-2 border-t border-gray-800 text-[11px] text-gray-300 space-y-1.5 animate-fadeIn">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-bold">{item.match} match</span>
                          <span className="border border-gray-700 px-1 text-[9px]">{item.ageRating}</span>
                        </div>
                        <p className="line-clamp-2 text-[10px] text-gray-400">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Featured Originals and Exclusives */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-white">Featured Originals and Exclusives</h2>
            <span className="text-xs text-[#00a8e1] hover:underline cursor-pointer">See more ›</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ORIGINALS_ITEMS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative cursor-pointer transition-all duration-300 transform hover:scale-110 hover:z-30 group"
              >
                <div className="rounded-lg overflow-hidden border border-gray-800 bg-slate-900 shadow-md group-hover:shadow-2xl group-hover:border-[#00a8e1] transition">
                  <div className="h-40 w-full relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    {item.categoryBadge && (
                      <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                        {item.categoryBadge}
                      </span>
                    )}
                    <span className="absolute bottom-2 right-2 text-xs font-black text-[#00a8e1] italic drop-shadow">
                      prime
                    </span>
                  </div>

                  <div className="p-3 bg-slate-900/95 space-y-1.5">
                    <h4 className="font-bold text-xs text-white line-clamp-1">{item.title}</h4>

                    {/* Smooth Expanded Card Description on Hover */}
                    {hoveredCard === item.id && (
                      <div className="space-y-2 pt-1 border-t border-gray-800 animate-fadeIn">
                        <div className="flex items-center gap-2">
                          <button className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                            <Play size={10} className="fill-black" />
                          </button>
                          <button className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center hover:border-white">
                            <Plus size={12} />
                          </button>
                          <button className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center hover:border-white">
                            <ThumbsUp size={10} />
                          </button>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span className="text-emerald-400 font-bold">{item.match}</span>
                          <span className="border border-gray-700 px-1 text-[9px] rounded">{item.ageRating}</span>
                          <span className="text-gray-400">{item.duration}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 line-clamp-2 leading-tight">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Save big with a bundle */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl p-6 border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 space-y-3">
              <h2 className="text-3xl font-black text-white tracking-tight">Save big with a bundle</h2>
              <p className="text-sm text-gray-400">Watch more. Pay less.</p>
              <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-gray-600 rounded-md font-bold text-xs">
                See all subscriptions
              </button>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-gray-700 rounded-lg p-4 bg-slate-900/60 hover:scale-105 transition cursor-pointer">
                <p className="text-[11px] text-gray-400 line-through">$13.98</p>
                <p className="text-base font-bold text-white">$9.99/month</p>
                <div className="h-28 bg-gray-800 rounded mt-2 flex items-center justify-center text-xs font-bold text-gray-400">
                  KOCOWA+
                </div>
              </div>

              <div className="border border-amber-500/50 rounded-lg p-4 bg-slate-900/60 hover:scale-105 transition cursor-pointer shadow-lg">
                <p className="text-[11px] text-gray-400 line-through">$28.98</p>
                <p className="text-base font-bold text-amber-400">$24.99/month</p>
                <div className="h-28 bg-gray-800 rounded mt-2 flex items-center justify-center text-xs font-bold text-gray-400">
                  FOX NATION
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-4 bg-slate-900/60 hover:scale-105 transition cursor-pointer">
                <p className="text-[11px] text-gray-400 line-through">$22.98</p>
                <p className="text-base font-bold text-white">$16.99/month</p>
                <div className="h-28 bg-gray-800 rounded mt-2 flex items-center justify-center text-xs font-bold text-gray-400">
                  STARZ + ViX
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Top TV Shows (Mirzapur, Reacher, etc.) */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-white">Top TV Shows</h2>
            <span className="text-xs text-[#00a8e1] hover:underline cursor-pointer">See more ›</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TV_SHOWS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative cursor-pointer transition-all duration-300 transform hover:scale-110 hover:z-30 group"
              >
                <div className="rounded-lg overflow-hidden border border-gray-800 bg-slate-900 shadow-md group-hover:shadow-2xl group-hover:border-[#00a8e1] transition">
                  <div className="h-40 w-full relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    {item.categoryBadge && (
                      <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                        {item.categoryBadge}
                      </span>
                    )}
                    <span className="absolute bottom-2 right-2 text-xs font-black text-[#00a8e1] italic drop-shadow">
                      prime
                    </span>
                  </div>

                  <div className="p-3 bg-slate-900/95 space-y-1.5">
                    <h4 className="font-bold text-xs text-white line-clamp-1">{item.title}</h4>

                    {hoveredCard === item.id && (
                      <div className="space-y-2 pt-1 border-t border-gray-800 animate-fadeIn">
                        <div className="flex items-center gap-2">
                          <button className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                            <Play size={10} className="fill-black" />
                          </button>
                          <button className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center hover:border-white">
                            <Plus size={12} />
                          </button>
                          <button className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center hover:border-white">
                            <ThumbsUp size={10} />
                          </button>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span className="text-emerald-400 font-bold">{item.match}</span>
                          <span className="border border-gray-700 px-1 text-[9px] rounded">{item.ageRating}</span>
                          <span className="text-gray-400">{item.duration}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 line-clamp-2 leading-tight">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}