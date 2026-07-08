import React from 'react';

export default function MetricsBar() {
  return (
    <section id="stats" className="border-y border-white/5 bg-[#09090B] font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="reveal space-y-1 border-l-2 border-[#E9001A] pl-4">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">10H</span>
          <p className="text-[10px] font-bold text-[#9E9EA7] uppercase tracking-widest">Coating Hardness Spec</p>
        </div>
        <div className="reveal delay-100 space-y-1 border-l-2 border-[#E9001A] pl-4">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">120°</span>
          <p className="text-[10px] font-bold text-[#9E9EA7] uppercase tracking-widest">Water Beading Contact</p>
        </div>
        <div className="reveal delay-200 space-y-1 border-l-2 border-[#E9001A] pl-4">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">99.8%</span>
          <p className="text-[10px] font-bold text-[#9E9EA7] uppercase tracking-widest">UV & Oxidation Rejection</p>
        </div>
        <div className="reveal delay-300 space-y-1 border-l-2 border-[#E9001A] pl-4">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">5+ YRS</span>
          <p className="text-[10px] font-bold text-[#9E9EA7] uppercase tracking-widest">Molecular Durability</p>
        </div>
      </div>
    </section>
  );
}