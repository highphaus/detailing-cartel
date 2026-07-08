import React from 'react';

export default function ServicesGrid() {
  const services = [
    {
      id: '01',
      title: 'Ceramic & Borophene Coating',
      desc: 'High-density silica matrix and atom-thick borophene sealants that permanently cross-link with paint clear coat, forming a glassy hydrophobic barrier.',
      label: 'FORMULATION SPECS',
      spec: '9H & 10H Shielding',
      glow: 'group-hover:bg-[#E9001A]/10'
    },
    {
      id: '02',
      title: 'Paint Protection Film (PPF)',
      desc: 'Optically pure polyurethane film utilizing thermoplastic memory. Scratches and swirl marks instantly heal under ambient heat, completely absorbing rock chip impacts.',
      label: 'ARMOR LEVEL',
      spec: 'Self-Healing TPU',
      glow: 'group-hover:bg-white/10'
    },
    {
      id: '03',
      title: 'Custom Styling & Sunfilms',
      desc: 'Precision computer-plotted vinyl body graphics and high-performance multi-layered solar heat rejection films. Rejects up to 97% of infrared heat.',
      label: 'THERMAL PROTECTION',
      spec: '97% IR Rejection',
      glow: 'group-hover:bg-[#E9001A]/10'
    }
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 space-y-12 font-sans">
      <div className="reveal text-center space-y-3">
        <span className="text-[#E9001A] font-black uppercase tracking-[0.4em] text-xs">PROFESSIONAL PROTOCOLS</span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">SURFACE INTEGRATION OPTIONS</h2>
        <p className="text-[#9E9EA7] text-xs sm:text-sm font-medium max-w-xl mx-auto">
          Choose from our specialized protection layers, each molecularly calibrated to secure gloss integrity and guard against high-impact debris.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div key={item.id} className={`bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group reveal-scale ${
            index === 0 ? '' : index === 1 ? 'delay-150' : 'delay-300'
          }`}>
            <div className={`absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none transition-all ${item.glow}`} />
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center font-bold text-xs text-[#E9001A]">
                {item.id}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tight text-white">{item.title}</h3>
                <p className="text-[#9E9EA7] text-xs font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
            <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-6">
              <span className="text-[9px] uppercase font-bold text-[#9E9EA7] tracking-widest">{item.label}</span>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#E9001A]">{item.spec}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}