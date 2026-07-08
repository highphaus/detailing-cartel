import React from 'react';

export default function PricingTables({ onSelectPackage }) {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 relative font-sans">
      <div className="reveal text-center space-y-3 pb-12">
        <span className="text-[#E9001A] font-black uppercase tracking-[0.4em] text-xs">PRICING TABLES</span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">PROTECTION PROGRAM SPECS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Standard Shield */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[480px] reveal-scale">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#9E9EA7] text-[10px] font-bold uppercase tracking-widest">Entry Tier</span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">Standard Shield</h3>
              <span className="text-3xl font-black text-[#E9001A] block pt-2">₹18,000</span>
            </div>
            <p className="text-[#9E9EA7] text-xs leading-relaxed">Essential paint correction and 2-layer high-solids silica coating providing robust scratch protection.</p>
            <ul className="space-y-3 text-xs font-bold text-white/80 pt-4 border-t border-white/5">
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/90">9H Ceramic Coating (2 Layers)</span></li>
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/90">2 Years Warranty Protection</span></li>
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/90">Single-Stage Polish Correction</span></li>
            </ul>
          </div>
          <div className="pt-8">
            <button onClick={() => onSelectPackage('Standard Shield')} className="w-full text-center block bg-white/5 hover:bg-[#E9001A] text-white hover:text-white border border-white/10 hover:border-transparent text-[10px] font-bold uppercase tracking-widest py-4 transition-all duration-300 rounded-xl">
              CHOOSE PACKAGE
            </button>
          </div>
        </div>

        {/* Pro Crystalline */}
        <div className="bg-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden border border-[#E9001A]/40 shadow-[0_15px_40px_rgba(233,0,26,0.08)] reveal-scale delay-150">
          <div className="absolute top-0 right-0 bg-[#E9001A] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-bl-2xl">RECOMMENDED</div>
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#E9001A] text-[10px] font-bold uppercase tracking-widest">Intermediate Spec</span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">Pro Crystalline</h3>
              <span className="text-3xl font-black text-[#E9001A] block pt-2">₹32,000</span>
            </div>
            <p className="text-[#9E9EA7] text-xs leading-relaxed">Advanced molecular shielding incorporating chemical scratch resistance. Forms thick glass-like armor.</p>
            <ul className="space-y-3 text-xs font-bold text-white/90 pt-4 border-t border-white/5">
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/95">10H Hardness Rating (3 Layers)</span></li>
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/95">5 Years Warranty Protection</span></li>
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/95">Multi-Stage Clarity Decontamination</span></li>
            </ul>
          </div>
          <div className="pt-8">
            <button onClick={() => onSelectPackage('Pro Crystalline')} className="w-full text-center block bg-[#E9001A] hover:bg-white text-white hover:text-black text-[10px] font-bold uppercase tracking-widest py-4 transition-all duration-300 rounded-xl shadow-[0_4px_12px_rgba(233,0,26,0.15)] hover:shadow-[0_4px_20px_rgba(233,0,26,0.3)]">
              CHOOSE PACKAGE
            </button>
          </div>
        </div>

        {/* Diamond Matrix */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[480px] reveal-scale delay-300">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#9E9EA7] text-[10px] font-bold uppercase tracking-widest">Apex Tier</span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">Diamond Matrix</h3>
              <span className="text-3xl font-black text-[#E9001A] block pt-2">₹55,000</span>
            </div>
            <p className="text-[#9E9EA7] text-xs leading-relaxed">Unmatched carbon-nanotube cross-linked matrix offering carbon self-healing layout structures.</p>
            <ul className="space-y-3 text-xs font-bold text-white/80 pt-4 border-t border-white/5">
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/90">10H Diamond Matrix (5 Layers)</span></li>
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/90">Lifetime Warranty & Top-ups</span></li>
              <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-[#E9001A] rounded-full" /><span className="text-white/90">3-Stage Absolute Mirror Correction</span></li>
            </ul>
          </div>
          <div className="pt-8">
            <button onClick={() => onSelectPackage('Diamond Matrix')} className="w-full text-center block bg-white/5 hover:bg-[#E9001A] text-white hover:text-white border border-white/10 hover:border-transparent text-[10px] font-bold uppercase tracking-widest py-4 transition-all duration-300 rounded-xl">
              CHOOSE PACKAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}