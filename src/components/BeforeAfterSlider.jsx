import React from 'react';
import scratchPaint from '../assets/scratch_paint.png';
import glossyPaint from '../assets/glossy_paint.png';

export default function BeforeAfterSlider({ sliderPosition, setSliderPosition }) {
  return (
    <section id="slider-section" className="max-w-7xl mx-auto px-6 py-20 relative font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 space-y-6 reveal-left">
          <span className="text-[#E9001A] font-bold uppercase tracking-[0.4em] text-xs">LAB COMPARISON</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            PAINT <br className="hidden sm:inline" /> RECOVERY <br /> WIPE
          </h2>
          <p className="text-[#9E9EA7] text-sm font-medium leading-relaxed font-sans">
            Drag the interactive slider right to see how deep polish correction and ceramic coating structures eliminate severe swirl marks, oxidation, and micro-scratches—restoring deep mirror-reflections.
          </p>
        </div>

        <div className="lg:col-span-8 relative reveal-right">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none">
            <div className="absolute inset-0 bg-[#121214] ">
              <img src={glossyPaint} alt="Scratched Paint" className="w-full h-full object-cover" />
             <div className="absolute right-6 bottom-6 bg-[#E9001A] px-4 py-2 rounded-lg z-20">
                <span className="text-[10px] font-bold tracking-widest text-white font-sans">After</span>
              </div>
            </div>

            <div 
              className="absolute inset-0 bg-[#0C0C0E] transition-all ease-out pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img src={scratchPaint} alt="Ceramic Coated Paint" className="w-full h-full object-cover" />
              <div className="absolute left-6 bottom-6 bg-[#E9001A] px-4 py-2 rounded-lg z-20">
                <span className="text-[10px] font-bold tracking-widest text-white font-sans">Before</span>
              </div>
            </div>

            <input 
              type="range" min="0" max="100" value={sliderPosition} 
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="before-after-input absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 pointer-events-auto"
              style={{ height: '100%', width: '100%', margin: 0, padding: 0, border: 'none', background: 'transparent' }}
            />

            <div className="absolute top-0 bottom-0 w-[1px] bg-[#E9001A] pointer-events-none shadow-[0_0_10px_rgba(233,0,26,0.3)] z-25" style={{ left: `${sliderPosition}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#E9001A] border border-white/20 flex items-center justify-center shadow-xl pointer-events-none">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}