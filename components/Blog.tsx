import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Mastering the Algorithm: 5 Steps to Viral Reels',
    category: 'Strategy',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Digital Privacy: How to Stay Anonymous Online',
    category: 'Safety',
    date: 'Sep 28, 2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Tax Optimisation Structures for Top 1% Creators',
    category: 'Finance',
    date: 'Sep 15, 2024',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 py-24 border-b border-white/10">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-xs tracking-widest text-zinc-500 uppercase block mb-3">(03) The Journal</span>
          <h2 className="text-3xl font-light text-white">Industry <span className="font-instrument italic text-zinc-400">Insights</span></h2>
        </div>
        <a href="#" className="text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors">Read All</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-5 bg-zinc-900 relative">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={post.image} 
                alt={post.title} 
                className="h-full w-full object-cover opacity-70 grayscale group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-medium text-white bg-white/10 px-2 py-1 rounded">{post.category}</span>
              <span className="text-[10px] text-zinc-500">{post.date}</span>
            </div>
            <h3 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors leading-tight">{post.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};