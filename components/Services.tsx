import React from 'react';
import { Users, MessageSquare, Copyright } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs tracking-widest text-zinc-500 uppercase block mb-4">(01) Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">Full-Service <span className="font-instrument italic text-zinc-400">Management</span></h2>
        </div>
        <p className="max-w-sm text-sm text-zinc-400 font-light leading-relaxed">
          We bridge the gap between content and capital. Our ecosystem is designed to scale your brand while protecting your peace of mind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">
        {/* Card 1 */}
        <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors duration-500">
          <div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
            <Users className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">Subscriber Growth</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Advanced funnel strategies using TikTok, Instagram Reels, and Twitter to drive high-converting traffic to your exclusive pages.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors duration-500">
          <div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
            <MessageSquare className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">24/7 Chat Management</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Our team of trained chatters engage with your fans around the clock, maximizing PPV sales and building parasocial loyalty.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors duration-500">
          <div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
            <Copyright className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">Legal & Takedowns</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Aggressive DMCA takedowns to remove leaked content from the web. We protect your intellectual property and revenue.
          </p>
        </div>
      </div>
    </section>
  );
};