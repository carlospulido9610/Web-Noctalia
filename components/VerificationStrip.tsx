import React from 'react';
import { ShieldCheck, Lock, Scale, Globe } from 'lucide-react';

export const VerificationStrip: React.FC = () => {
  return (
    <section id="verification" className="border-y border-white/10 bg-black py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-zinc-400 stroke-[1]" />
            <span className="text-xs uppercase tracking-widest text-zinc-500">Verified Agency</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Lock className="w-6 h-6 text-zinc-400 stroke-[1]" />
            <span className="text-xs uppercase tracking-widest text-zinc-500">100% Anonymous</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Scale className="w-6 h-6 text-zinc-400 stroke-[1]" />
            <span className="text-xs uppercase tracking-widest text-zinc-500">DMCA Protection</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Globe className="w-6 h-6 text-zinc-400 stroke-[1]" />
            <span className="text-xs uppercase tracking-widest text-zinc-500">Global Payouts</span>
          </div>
        </div>
      </div>
    </section>
  );
};