import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-instrument italic text-white mb-4">Noctalia.</h2>
            <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
              The leading agency for digital content monetization. We empower creators to take back control of their time and maximize their earnings through strategic management.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Talent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">2257 Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DMCA</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] text-zinc-600 uppercase tracking-wider">© 2025 Noctalia Management. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};