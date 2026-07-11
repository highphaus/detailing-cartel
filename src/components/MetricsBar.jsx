import React from 'react';

export default function MetricsBar() {
  return (
    <section id="stats" className="border-y border-white/5 bg-[#09090B] font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10">

        <div className="grid grid-cols-4 md:grid-cols-4 gap-3 sm:gap-8">

          <div className="reveal border-l-2 border-[#E9001A] pl-2 sm:pl-4">
            <h3 className="text-lg sm:text-4xl font-black text-white leading-none">
              10H
            </h3>
            <p className="mt-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wide text-[#9E9EA7] leading-tight">
              Coating Hardness Spec
            </p>
          </div>

          <div className="reveal delay-100 border-l-2 border-[#E9001A] pl-2 sm:pl-4">
            <h3 className="text-lg sm:text-4xl font-black text-white leading-none">
              120°
            </h3>
            <p className="mt-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wide text-[#9E9EA7] leading-tight">
              Water Beading Contact
            </p>
          </div>

          <div className="reveal delay-200 border-l-2 border-[#E9001A] pl-2 sm:pl-4">
            <h3 className="text-lg sm:text-4xl font-black text-white leading-none">
              99.8%
            </h3>
            <p className="mt-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wide text-[#9E9EA7] leading-tight">
              UV & Oxidation Rejection
            </p>
          </div>

          <div className="reveal delay-300 border-l-2 border-[#E9001A] pl-2 sm:pl-4">
            <h3 className="text-lg sm:text-4xl font-black text-white leading-none">
              5+ YRS
            </h3>
            <p className="mt-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wide text-[#9E9EA7] leading-tight">
              Molecular Durability
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}