import React, { useState, useEffect } from 'react';
import heroPorsche from './assets/hero_porsche.png';
import scratchPaint from './assets/scratch_paint.png';
import glossyPaint from './assets/glossy_paint.png';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [selectedCoating, setSelectedCoating] = useState('Borophene');
  const [coatingLayers, setCoatingLayers] = useState(3);
  const [formData, setFormData] = useState({ name: '', vehicle: '', service: 'Pro Crystalline', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Calculations for interactive configurator
  const getCoatingSpecs = () => {
    const baseCost = selectedCoating === 'Ceramic' ? 22000 : selectedCoating === 'Borophene' ? 38000 : 52000;
    const layerMultiplier = selectedCoating === 'Ceramic' ? 4000 : selectedCoating === 'Borophene' ? 6000 : 8000;
    const cost = baseCost + (coatingLayers - 1) * layerMultiplier;

    const curingTime = selectedCoating === 'Ceramic' ? 12 + coatingLayers * 2 : selectedCoating === 'Borophene' ? 18 + coatingLayers * 3 : 24 + coatingLayers * 4;
    const hydrophobicAngle = selectedCoating === 'Ceramic' ? 110 + coatingLayers : selectedCoating === 'Borophene' ? 115 + coatingLayers : 120 + coatingLayers;
    const hardness = selectedCoating === 'Ceramic' ? '9H Pro' : selectedCoating === 'Borophene' ? '10H Ultra' : '10H Diamond Matrix';

    return { cost, curingTime, hydrophobicAngle, hardness };
  };

  const specs = getCoatingSpecs();

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans antialiased selection:bg-[#CCFF00] selection:text-black">
      
      {/* 1. HIGH-TECH STICKY HEADER */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-black bg-gradient-to-r from-[#FFFFFF] to-[#CCFF00] bg-clip-text text-transparent tracking-tighter">
              D||C
            </span>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
            <span className="text-[9px] font-black tracking-[0.3em] uppercase hidden sm:block text-white/50">
              DETAILING <span className="text-[#CCFF00]">CARTEL</span> // TRIVANDRUM
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-widest text-[#9E9EA7]">
            <a href="#hero" className="hover:text-[#CCFF00] transition-colors relative group py-2">
              Studio
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCFF00] transition-all group-hover:w-full" />
            </a>
            <a href="#stats" className="hover:text-[#CCFF00] transition-colors relative group py-2">
              Metrics
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCFF00] transition-all group-hover:w-full" />
            </a>
            <a href="#services" className="hover:text-[#CCFF00] transition-colors relative group py-2">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCFF00] transition-all group-hover:w-full" />
            </a>
            <a href="#slider-section" className="hover:text-[#CCFF00] transition-colors relative group py-2">
              Before/After
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCFF00] transition-all group-hover:w-full" />
            </a>
            <a href="#configurator" className="hover:text-[#CCFF00] transition-colors relative group py-2">
              Lab Config
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCFF00] transition-all group-hover:w-full" />
            </a>
            <a href="#pricing" className="hover:text-[#CCFF00] transition-colors relative group py-2">
              Packages
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCFF00] transition-all group-hover:w-full" />
            </a>
          </nav>

          <a href="#booking" className="bg-[#CCFF00] hover:bg-[#FFFFFF] text-black hover:text-black px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 rounded-lg shadow-[0_0_15px_rgba(204,255,0,0.25)] hover:shadow-[0_0_25px_rgba(204,255,0,0.5)]">
            BOOK DESK
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="max-w-7xl mx-auto px-6 pt-36 pb-20 relative overflow-hidden">
        {/* Radial Background Glow behind content */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#CCFF00]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-white/2 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-5 space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest font-semibold text-[#CCFF00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
              <span>MOLECULAR SURFACE SHIELDING v4.0</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                SURGICAL <br />
                <span className="text-[#CCFF00] text-glow-neon">COATING</span> <br />
                SYSTEMS
              </h1>
              <p className="text-[#9E9EA7] text-sm sm:text-base font-medium max-w-lg leading-relaxed">
                An elite collective of automotive perfectionists execution-focused on deploying advanced crystalline surface protection technology barriers. Perfecting factory clear coats to absolute mirror-like gloss structures.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#configurator" className="bg-[#CCFF00] text-black px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300">
                DEPLOY SHIELD
              </a>
              <a href="#slider-section" className="border border-white/15 hover:border-[#CCFF00] text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xl flex items-center space-x-2 transition-all duration-300 bg-white/2 backdrop-blur-sm">
                <svg className="w-4 h-4 fill-current text-[#CCFF00]" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>WATCH PROCESS</span>
              </a>
            </div>

            {/* Warranty Badge & Diagnostics coordinates */}
            <div className="flex items-center space-x-6 pt-6 border-t border-white/5">
              <div className="relative w-20 h-20 flex-shrink-0">
                {/* Spinning Circle SVG Text */}
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="text-[6.5px] uppercase font-bold tracking-[0.25em] fill-[#9E9EA7]">
                    <textPath xlinkHref="#circlePath">
                      • WARRANTY • CERAMIC PROTECTION • 5 YR
                    </textPath>
                  </text>
                </svg>
                {/* Shield in middle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-black text-[#CCFF00]">5 YR</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[9px] uppercase font-bold text-white/50 tracking-wider">COORDINATES // TVM</div>
                <div className="text-xs font-black text-white uppercase">OPPOSITE TRUE VALUE CARS</div>
                <div className="text-[10px] font-mono text-[#CCFF00]">LAT: 8.4601° N // LON: 76.9934° E</div>
              </div>
            </div>
          </div>

          {/* Right Column: Supercar Graphics with Floating Glass Cards */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            {/* Ambient Radial Background */}
            <div className="absolute w-[450px] sm:w-[550px] h-[350px] bg-gradient-to-tr from-[#CCFF00]/10 via-[#CCFF00]/5 to-transparent rounded-full blur-2xl z-0" />
            
            {/* Main Car Visual */}
            <div className="relative z-10 w-full max-w-[650px] select-none">
              <img 
                src={heroPorsche} 
                alt="Detailing Cartel Porsche Supercar" 
                className="w-full h-auto object-contain drop-shadow-[0_15px_50px_rgba(204,255,0,0.15)] transform hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Floating Card 1: Specs */}
            <div className="absolute top-4 right-4 sm:right-12 glass-card p-4 rounded-2xl z-20 space-y-1 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                <span className="text-[9px] font-bold text-[#9E9EA7] tracking-widest uppercase">SYS SPECS</span>
              </div>
              <p className="text-xs font-black text-white tracking-wide">10H CORE THICKNESS</p>
              <div className="w-24 bg-white/10 h-[3px] rounded-full overflow-hidden">
                <div className="bg-[#CCFF00] h-full w-[85%]" />
              </div>
            </div>

            {/* Floating Card 2: Hydrophobic Level */}
            <div className="absolute bottom-8 left-4 sm:left-12 glass-card p-4 rounded-2xl z-20 space-y-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              <div className="text-[9px] font-bold text-[#9E9EA7] tracking-widest uppercase">HYDROPHOBIC INDEX</div>
              <div className="flex items-baseline space-x-2">
                <span className="text-lg font-black text-white">122° ANGLE</span>
                <span className="text-[9px] text-[#CCFF00] font-bold">STRUCTURAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL METRICS BAR */}
      <section id="stats" className="border-y border-white/5 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1 border-l-2 border-[#CCFF00] pl-4">
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">10H</span>
            <p className="text-[10px] font-bold text-[#9E9EA7] uppercase tracking-widest">Coating Hardness Spec</p>
          </div>
          <div className="space-y-1 border-l-2 border-[#CCFF00] pl-4">
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">120°</span>
            <p className="text-[10px] font-bold text-[#9E9EA7] uppercase tracking-widest">Water Beading Contact</p>
          </div>
          <div className="space-y-1 border-l-2 border-[#CCFF00] pl-4">
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">99.8%</span>
            <p className="text-[10px] font-bold text-[#9E9EA7] uppercase tracking-widest">UV & Oxidation Rejection</p>
          </div>
          <div className="space-y-1 border-l-2 border-[#CCFF00] pl-4">
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">5+ YRS</span>
            <p className="text-[10px] font-bold text-[#9E9EA7] uppercase tracking-widest">Molecular Durability</p>
          </div>
        </div>
      </section>

      {/* 4. SERVICES BENTO GRID */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[#CCFF00] font-black uppercase tracking-[0.4em] text-xs">
            PROFESSIONAL PROTOCOLS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            SURFACE INTEGRATION OPTIONS
          </h2>
          <p className="text-[#9E9EA7] text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Choose from our specialized protection layers, each molecularly calibrated to secure gloss integrity and guard against high-impact debris.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Service Card 1: Nano Diamond / Borophene */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCFF00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#CCFF00]/10 transition-all" />
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center font-bold text-xs text-[#CCFF00]">
                01
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  Ceramic & Borophene Coating
                </h3>
                <p className="text-[#9E9EA7] text-xs font-medium leading-relaxed">
                  High-density silica matrix and atom-thick borophene sealants that permanently cross-link with paint clear coat, forming a glassy hydrophobic barrier.
                </p>
              </div>
            </div>
            <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-6">
              <span className="text-[9px] uppercase font-bold text-[#9E9EA7] tracking-widest">FORMULATION SPECS</span>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#CCFF00]">9H & 10H Shielding</span>
            </div>
          </div>

          {/* Service Card 2: Paint Protection Film */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center font-bold text-xs text-[#CCFF00]">
                02
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  Paint Protection Film (PPF)
                </h3>
                <p className="text-[#9E9EA7] text-xs font-medium leading-relaxed">
                  Optically pure polyurethane film utilizing thermoplastic memory. Scratches and swirl marks instantly heal under ambient heat, completely absorbing rock chip impacts.
                </p>
              </div>
            </div>
            <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-6">
              <span className="text-[9px] uppercase font-bold text-[#9E9EA7] tracking-widest">ARMOR LEVEL</span>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#CCFF00]">Self-Healing TPU</span>
            </div>
          </div>

          {/* Service Card 3: Custom Styling & Window Protection */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCFF00]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center font-bold text-xs text-[#CCFF00]">
                03
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  Custom Styling & Sunfilms
                </h3>
                <p className="text-[#9E9EA7] text-xs font-medium leading-relaxed">
                  Precision computer-plotted vinyl body graphics and high-performance multi-layered solar heat rejection films. Rejects up to 97% of infrared heat.
                </p>
              </div>
            </div>
            <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-6">
              <span className="text-[9px] uppercase font-bold text-[#9E9EA7] tracking-widest">THERMAL PROTECTION</span>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#CCFF00]">97% IR Rejection</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE/AFTER SLIDER */}
      <section id="slider-section" className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-[#CCFF00] font-black uppercase tracking-[0.4em] text-xs">
              LAB COMPARISON
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              PAINT <br className="hidden sm:inline" />
              RECOVERY <br />
              WIPE
            </h2>
            <p className="text-[#9E9EA7] text-sm font-medium leading-relaxed">
              Drag the interactive slider right to see how deep polish correction and ceramic coating structures eliminate severe swirl marks, oxidation, and micro-scratches—restoring deep mirror-reflections.
            </p>
            
            <div className="space-y-3 pt-4 border-t border-white/5">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#CCFF00]">
                <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-ping" />
                <span>ACTIVE INTERACTION PANEL</span>
              </div>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
                SCRUB TO REVEAL RECONSTRUCTED COATED STATE
              </p>
            </div>
          </div>

          {/* Right slider wrapper */}
          <div className="lg:col-span-8 relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none">
              
              {/* Before State (Base background) */}
              <div className="absolute inset-0 bg-[#121214]">
                <img 
                  src={scratchPaint} 
                  alt="Scratched Paint Before Detailing" 
                  className="w-full h-full object-cover"
                />
                {/* Before Tag Label */}
                <div className="absolute left-6 bottom-6 bg-black/85 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg z-20">
                  <span className="text-[10px] font-black tracking-widest text-[#9E9EA7]">UNPROTECTED STATE // OXIDIZED</span>
                </div>
              </div>

              {/* After State (Clip path overlay) */}
              <div 
                className="absolute inset-0 bg-[#0C0C0E] transition-all ease-out pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={glossyPaint} 
                  alt="Ceramic Coated Paint After Detailing" 
                  className="w-full h-full object-cover"
                />
                {/* After Tag Label */}
                <div className="absolute right-6 bottom-6 bg-[#CCFF00] px-4 py-2 rounded-lg z-20">
                  <span className="text-[10px] font-black tracking-widest text-black">10H CERAMIC SHIELD // ACTIVE</span>
                </div>
              </div>

              {/* Range Input overlay over the image */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPosition} 
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 pointer-events-auto"
              />

              {/* Graphical Divider Line & handle thumb */}
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-[#CCFF00] pointer-events-none shadow-[0_0_10px_rgba(204,255,0,0.5)] z-25"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Round thumb button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#CCFF00] border border-black flex items-center justify-center shadow-lg pointer-events-none">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. INTERACTIVE SPEC CONFIGURATOR */}
      <section id="configurator" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Inputs & sliders */}
          <div className="lg:col-span-7 bg-[#0C0C0E] border border-white/5 rounded-3xl p-8 sm:p-10 space-y-8 shadow-sm">
            <div className="space-y-2">
              <span className="text-[#CCFF00] text-[9px] font-black uppercase tracking-widest block">LAB WORKBENCH</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">SIMULATE COATING MATRIX</h3>
            </div>

            {/* Select Material */}
            <div className="space-y-3">
              <label className="block text-[9px] uppercase tracking-widest font-black text-[#9E9EA7]">Select Crystalline Formula</label>
              <div className="grid grid-cols-3 gap-3">
                {['Ceramic', 'Borophene', 'Nano Diamond'].map((tech) => (
                  <button 
                    key={tech} 
                    onClick={() => setSelectedCoating(tech)}
                    className={`py-3 rounded-xl border text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${
                      selectedCoating === tech 
                        ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.15)]' 
                        : 'bg-white/2 border-white/10 text-white hover:border-[#CCFF00]/40'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Range slider for layers */}
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[#9E9EA7]">
                <span>Active Layer Thickness</span>
                <span className="text-[#CCFF00]">{coatingLayers} {coatingLayers === 1 ? 'Layer' : 'Layers'} Matrix</span>
              </div>
              <div className="relative flex items-center">
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  value={coatingLayers} 
                  onChange={(e) => setCoatingLayers(Number(e.target.value))}
                  className="w-full accent-[#CCFF00] bg-white/10 h-2.5 rounded-lg appearance-none cursor-pointer" 
                />
              </div>
            </div>

            {/* Spec outputs block */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
              <div>
                <span className="text-[9px] text-[#9E9EA7] uppercase tracking-widest font-bold block">Hardness Factor</span>
                <span className="text-sm sm:text-base font-black text-white mt-1 block">{specs.hardness}</span>
              </div>
              <div>
                <span className="text-[9px] text-[#9E9EA7] uppercase tracking-widest font-bold block">Curing Protocol</span>
                <span className="text-sm sm:text-base font-black text-white mt-1 block">{specs.curingTime} Hours</span>
              </div>
              <div>
                <span className="text-[9px] text-[#9E9EA7] uppercase tracking-widest font-bold block">Beading Angle</span>
                <span className="text-sm sm:text-base font-black text-[#CCFF00] mt-1 block">{specs.hydrophobicAngle}° Struct</span>
              </div>
            </div>
          </div>

          {/* Output projection */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#CCFF00] font-black uppercase tracking-[0.4em] text-xs">SPECIFICATION RESULT</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              ESTIMATED <br />
              FORMULA <br />
              SPECS
            </h2>
            <p className="text-[#9E9EA7] text-sm leading-relaxed">
              Every formula request undergoes rigorous chemical testing and infra-red heat curing inside our isolated workshop bays to guarantee layer adhesion.
            </p>

            <div className="bg-[#0C0C0E] border border-[#CCFF00]/15 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-20 h-20 bg-[#CCFF00]/5 rounded-full blur-2xl" />
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7]">Estimated Deployment Cost</span>
                <span className="text-3xl sm:text-4xl font-black text-[#CCFF00] block">
                  ₹{specs.cost.toLocaleString('en-IN')}
                </span>
                <span className="text-[9px] text-white/50 block font-bold uppercase tracking-wider pt-2">
                  *Includes full multi-stage decontamination paint correction
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. PRICING PACKAGES TABLE */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="text-center space-y-3 pb-12">
          <span className="text-[#CCFF00] font-black uppercase tracking-[0.4em] text-xs">PRICING TABLES</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">PROTECTION PROGRAM SPECS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Standard Shield */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[480px]">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[#9E9EA7] text-[10px] font-black uppercase tracking-widest">Entry Tier</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Standard Shield</h3>
                <span className="text-3xl font-black text-[#CCFF00] block pt-2">₹18,000</span>
              </div>
              <p className="text-[#9E9EA7] text-xs leading-relaxed">
                Essential paint correction and 2-layer high-solids silica coating providing robust scratch protection and glossy water-shedding performance.
              </p>
              <ul className="space-y-3 text-xs font-bold text-white/80 pt-4 border-t border-white/5">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>9H Ceramic Coating (2 Layers)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>2 Years Warranty Protection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>Single-Stage Polish Correction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>108° Hydrophobic Contact</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a href="#booking" onClick={() => setFormData({...formData, service: 'Standard Shield'})} className="w-full text-center block bg-white/5 hover:bg-[#CCFF00] text-white hover:text-black border border-white/10 hover:border-transparent text-[10px] font-black uppercase tracking-widest py-4 transition-all duration-300 rounded-xl">
                CHOOSE PACKAGE
              </a>
            </div>
          </div>

          {/* Card 2: Pro Crystalline (HIGHLIGHTED) */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden border border-[#CCFF00]/40 shadow-[0_15px_40px_rgba(204,255,0,0.1)]">
            <div className="absolute top-0 right-0 bg-[#CCFF00] text-black text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-bl-2xl">
              RECOMMENDED SYSTEM
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[#CCFF00] text-[10px] font-black uppercase tracking-widest">Intermediate Spec</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Pro Crystalline</h3>
                <span className="text-3xl font-black text-[#CCFF00] block pt-2">₹32,000</span>
              </div>
              <p className="text-[#9E9EA7] text-xs leading-relaxed">
                Advanced molecular shielding incorporating chemical scratch resistance. Forms a thick glass-like armor that shields from bird-droppings and minor scuffs.
              </p>
              <ul className="space-y-3 text-xs font-bold text-white/90 pt-4 border-t border-white/5">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>10H Hardness Rating (3 Layers)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>5 Years Crystalline Warranty</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>Two-Stage De-Swirl Polish</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>118° Hydrophobic Angle</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>Infrared Heat Curing</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a href="#booking" onClick={() => setFormData({...formData, service: 'Pro Crystalline'})} className="w-full text-center block bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-widest py-4 transition-all duration-300 rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                CHOOSE SYSTEM
              </a>
            </div>
          </div>

          {/* Card 3: Ultra Borophene */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[480px]">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[#9E9EA7] text-[10px] font-black uppercase tracking-widest">Extreme Spec</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Ultra Borophene</h3>
                <span className="text-3xl font-black text-[#CCFF00] block pt-2">₹54,000</span>
              </div>
              <p className="text-[#9E9EA7] text-xs leading-relaxed">
                Elite nanotechnology using atom-thick carbon allotropes. Provides structural toughness, ultra-deep reflections, and maximum self-cleaning.
              </p>
              <ul className="space-y-3 text-xs font-bold text-white/80 pt-4 border-t border-white/5">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>10H Borophene Matrix (4 Layers)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>Lifetime Crystalline Guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>3-Stage Absolute Mirror Polish</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>122° Hydrophobic contact angle</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>Glass & Wheels Protection Coat</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a href="#booking" onClick={() => setFormData({...formData, service: 'Ultra Borophene'})} className="w-full text-center block bg-white/5 hover:bg-[#CCFF00] text-white hover:text-black border border-white/10 hover:border-transparent text-[10px] font-black uppercase tracking-widest py-4 transition-all duration-300 rounded-xl">
                CHOOSE EXTREME
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 8. SECURE BOOKING FORM */}
      <section id="booking" className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="bg-[#0C0C0E] border border-white/5 rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-2xl">
          {isSubmitted && (
            <div className="absolute inset-0 bg-[#050505]/95 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 z-30 border border-[#CCFF00] transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#CCFF00]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight text-[#CCFF00]">BLUEPRINT COMMITTED</h3>
              <p className="text-[#9E9EA7] text-xs font-medium max-w-sm">
                The Detailing Cartel coordination desk will verify your requested specifications and schedule your slots directly.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left instructions block */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#CCFF00] font-black uppercase text-xs tracking-widest block">BOOKING ENGINE</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                DEPLOY SECURE <br />
                ASSIGNMENT
              </h2>
              <p className="text-[#9E9EA7] text-xs sm:text-sm font-medium leading-relaxed">
                Transmit your details below to schedule your vehicle's alignment. Our operators will establish contact within 2 operational hours.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-white/5 text-xs font-bold text-[#9E9EA7]">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>Workshop Slots: Active // Limited Availability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                  <span>Hotline Support: +91 73065 33407</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest font-black text-[#9E9EA7]">Operator/Client Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#131316] border border-white/5 focus:border-[#CCFF00] rounded-xl px-5 py-4 focus:outline-none text-xs font-bold text-white transition-colors" 
                  placeholder="e.g., Alex Mercer" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest font-black text-[#9E9EA7]">Asset Blueprint (Vehicle Model)</label>
                <input 
                  type="text" 
                  required 
                  value={formData.vehicle} 
                  onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                  className="w-full bg-[#131316] border border-white/5 focus:border-[#CCFF00] rounded-xl px-5 py-4 focus:outline-none text-xs font-bold text-white transition-colors" 
                  placeholder="e.g., Porsche 911 GT3" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest font-black text-[#9E9EA7]">Contact Hotline</label>
                <input 
                  type="tel" 
                  required 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#131316] border border-white/5 focus:border-[#CCFF00] rounded-xl px-5 py-4 focus:outline-none text-xs font-bold text-white transition-colors" 
                  placeholder="e.g., +91 XXXXX XXXXX" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest font-black text-[#9E9EA7]">Target Protection System</label>
                <select 
                  value={formData.service} 
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-[#131316] border border-white/5 focus:border-[#CCFF00] rounded-xl px-5 py-4 focus:outline-none text-xs font-bold text-white transition-colors"
                >
                  <option value="Standard Shield">Standard Shield // 9H Ceramic</option>
                  <option value="Pro Crystalline">Pro Crystalline // 10H Protection</option>
                  <option value="Ultra Borophene">Ultra Borophene // Atom Allotrope</option>
                </select>
              </div>

              <div className="sm:col-span-2 pt-4">
                <button type="submit" className="w-full bg-[#CCFF00] hover:bg-white text-black font-black uppercase tracking-widest py-4 transition-all duration-300 text-xs rounded-xl shadow-[0_0_15px_rgba(204,255,0,0.15)] hover:shadow-[0_0_25px_rgba(204,255,0,0.35)]">
                  TRANSMIT SPECIFICATION PROTOCOL REQUEST
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-[9px] text-[#9E9EA7] font-bold uppercase tracking-[0.25em]">
        <div className="flex items-center space-x-2">
          <span>&copy; {new Date().getFullYear()} DETAILING CARTEL. CLEAN. PROTECT. PERFECT.</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-right">
          <span>THIRUVALLOM • TRIVANDRUM • KERALA</span>
          <span className="text-[#CCFF00] hidden sm:inline">//</span>
          <span className="text-white hover:text-[#CCFF00] transition-colors">HOTLINE: +91 73065 33407</span>
        </div>
      </footer>

    </div>
  );
}