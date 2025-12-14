import React, { useState } from 'react';
import { Menu, ArrowRight, TrendingUp, X } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', value: 20000 },
  { name: 'Feb', value: 25000 },
  { name: 'Mar', value: 35000 },
  { name: 'Apr', value: 32000 },
  { name: 'May', value: 45290 },
];

export const Hero: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] bg-zinc-950 ring-1 ring-white/10 min-h-[85vh] flex flex-col">
      {/* Background: Abstract Monochrome */}
      <img 
        src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2940&auto=format&fit=crop" 
        alt="Abstract noir texture" 
        className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale mix-blend-screen pointer-events-none"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none"></div>

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-xl tracking-tighter font-instrument italic text-white group-hover:text-zinc-300 transition-colors">Noctalia.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-zinc-400 font-medium">
          <li><a href="#verification" className="hover:text-white transition-colors">Verification</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="#blog" className="hover:text-white transition-colors">Journal</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>

        {/* Right: CTA */}
        <a href="#apply" className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition">
          <span>Apply Now</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden">
          <a href="#verification" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-instrument italic text-white">Verification</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-instrument italic text-white">Services</a>
          <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-instrument italic text-white">Journal</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-instrument italic text-white">Contact</a>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-300">Accepting New Talent for 2025</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-instrument italic leading-[0.9] tracking-tight text-white mb-8">
            Ascend to the <br /> <span className="not-italic font-light font-inter tracking-tighter">Top 0.1%</span>
          </h1>
          
          <p className="max-w-lg text-lg text-zinc-400 font-light leading-relaxed mb-10">
            Noctalia is the premier management agency for elite creators. We handle the strategy, marketing, and legalities—you simply create the art.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#apply" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-zinc-200 hover:w-40 w-36">
              <span className="mr-2 text-sm tracking-wide">Join Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stat Card (Bottom Right) */}
      <div className="absolute right-6 bottom-6 z-10 hidden md:block w-72 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-zinc-400 uppercase tracking-wider">Avg. Top Earner</p>
          <TrendingUp className="w-4 h-4 text-green-400" />
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-3xl font-light text-white">$45,290</span>
          <span className="text-xs text-zinc-500">/mo</span>
        </div>
        
        {/* Recharts Visualization */}
        <div className="h-16 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip cursor={false} content={<></>} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#ffffff" 
                strokeWidth={1}
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 text-[10px] text-zinc-500 text-right">Top 1% Performance</p>
      </div>
    </section>
  );
};