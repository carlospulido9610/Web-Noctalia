import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-zinc-950/50 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute right-0 top-0 w-96 h-96 bg-zinc-800 rounded-full blur-[120px] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-widest text-zinc-500 uppercase block mb-6">(02) Results</span>
            <h2 className="text-3xl md:text-5xl font-instrument italic leading-tight mb-8">
              "Noctalia took me from $3k to $45k in four months. The team handles everything so I can focus on my life."
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden ring-1 ring-white/20">
                <img src="https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=1000&auto=format&fit=crop" alt="Model" className="h-full w-full object-cover grayscale" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Sarah V.</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">Joined March 2024</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black border border-white/10 p-6 rounded-2xl">
              <p className="text-3xl font-light text-white mb-1">350%</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Avg. Rev Growth</p>
            </div>
            <div className="bg-black border border-white/10 p-6 rounded-2xl">
              <p className="text-3xl font-light text-white mb-1">$2.4M</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Client Payouts</p>
            </div>
            <div className="bg-black border border-white/10 p-6 rounded-2xl">
              <p className="text-3xl font-light text-white mb-1">24/7</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Support Access</p>
            </div>
            <div className="bg-black border border-white/10 p-6 rounded-2xl">
              <p className="text-3xl font-light text-white mb-1">0%</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Leaked Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};