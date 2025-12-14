import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { RevenueRange } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    handle: '',
    revenue: '' as RevenueRange | ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Application submitted for review.');
  };

  return (
    <section id="apply" className="relative max-w-7xl mx-auto px-6 py-24">
      <div className="rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-px w-64 h-64 opacity-10 bg-gradient-to-bl from-white to-transparent rounded-bl-full pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
            <span className="text-xs tracking-widest text-zinc-500 uppercase block mb-6">(04) Application</span>
            <h2 className="text-4xl md:text-5xl font-instrument italic text-white mb-6">Ready to Scale?</h2>
            <p className="text-sm text-zinc-400 mb-10 leading-relaxed">
              We are highly selective. Please provide accurate details regarding your current following and revenue. All applications are confidential.
            </p>
            
            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-white" /> Audit of current accounts
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-white" /> Revenue projection
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-white" /> Dedicated Account Manager
              </li>
            </ul>
          </div>

          <div className="p-10 lg:p-16 bg-black/20">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-500">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-700 focus:border-white focus:outline-none transition-colors" 
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-500">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-700 focus:border-white focus:outline-none transition-colors" 
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500">Social Handle (IG/TikTok)</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-700 focus:border-white focus:outline-none transition-colors" 
                  placeholder="@username"
                  value={formData.handle}
                  onChange={(e) => setFormData({...formData, handle: e.target.value})}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500">Current Monthly Revenue</label>
                <select 
                  className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:border-white focus:outline-none transition-colors appearance-none"
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value as RevenueRange})}
                >
                  <option className="bg-zinc-900 text-zinc-500" value="">Select Range</option>
                  <option className="bg-zinc-900" value={RevenueRange.NEW}>Just Starting ($0)</option>
                  <option className="bg-zinc-900" value={RevenueRange.LOW}>$1k - $5k</option>
                  <option className="bg-zinc-900" value={RevenueRange.MID}>$5k - $20k</option>
                  <option className="bg-zinc-900" value={RevenueRange.HIGH}>$20k+</option>
                </select>
              </div>

              <button type="submit" className="mt-8 w-full rounded-full bg-white py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
                Submit Application
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};