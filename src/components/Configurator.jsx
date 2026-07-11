import React from 'react';

export default function Configurator({
  selectedCoating,
  setSelectedCoating,
  coatingLayers,
  setCoatingLayers,
  specs
}) {
  return (
    <section
      id="configurator"
      className="max-w-7xl mx-auto px-5 sm:px-6 py-24 border-t border-white/5 font-sans"
    >

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">


        {/* Specification Result */}
        <div className="order-1 lg:order-2 lg:col-span-5 space-y-6 reveal-right">

          <span className="text-[#E9001A] font-black uppercase tracking-[0.4em] text-xs">
            SPECIFICATION RESULT
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none hidden lg:block">
            ESTIMATED <br />
            FORMULA <br />
            SPECS
          </h2>

          <h2 className="text-2xl font-black uppercase tracking-tight text-white leading-none lg:hidden">
            ESTIMATED FORMULA SPECS
          </h2>

          <p className="text-[#9E9EA7] text-sm leading-relaxed">
            Every formula request undergoes rigorous chemical testing and
            infra-red heat curing inside our isolated workshop bays to
            guarantee layer adhesion.
          </p>


          <div className="bg-[#0C0C0E] border border-[#E9001A]/15 rounded-3xl p-6 relative overflow-hidden hidden lg:block">

            <div className="absolute right-0 bottom-0 w-20 h-20 bg-[#E9001A]/5 rounded-full blur-2xl" />

            <div className="space-y-1">

              <span className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7]">
                Estimated Deployment Cost
              </span>

              <span className="text-3xl sm:text-4xl font-black text-[#E9001A] block">
                ₹{specs.cost.toLocaleString('en-IN')}
              </span>

              <span className="text-[9px] text-white/50 block font-bold uppercase tracking-wider pt-2">
                *Includes full multi-stage decontamination paint correction
              </span>

            </div>

          </div>

        </div>



        {/* Lab Workbench */}
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-8 reveal-left">

          <div className="bg-[#0C0C0E] border border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">

            <div className="space-y-2">

              <span className="text-[#E9001A] text-[9px] font-bold uppercase tracking-widest block">
                LAB WORKBENCH
              </span>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                SIMULATE COATING MATRIX
              </h3>

            </div>



            <div className="space-y-3">

              <label className="block text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7]">
                Select Crystalline Formula
              </label>


              <div className="grid grid-cols-3 gap-3">

                {['Ceramic', 'Borophene', 'Nano Diamond'].map((tech) => (

                  <button
                    key={tech}
                    onClick={() => setSelectedCoating(tech)}
                    className={`py-3 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      selectedCoating === tech
                        ? 'bg-[#E9001A] text-white border-[#E9001A]'
                        : 'bg-white/[0.02] border-white/10 text-white hover:border-[#E9001A]/40'
                    }`}
                  >
                    {tech}
                  </button>

                ))}

              </div>

            </div>



            <div className="space-y-4">

              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[#9E9EA7]">

                <span>
                  Active Layer Thickness
                </span>

                <span className="text-[#E9001A]">
                  {coatingLayers} {coatingLayers === 1 ? 'Layer' : 'Layers'} Matrix
                </span>

              </div>


              <input
                type="range"
                min="1"
                max="5"
                value={coatingLayers}
                onChange={(e)=>setCoatingLayers(Number(e.target.value))}
                className="custom-range-input w-full"
              />

            </div>



            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">

              <div>
                <span className="text-[9px] text-[#9E9EA7] uppercase tracking-widest font-bold block">
                  Hardness Factor
                </span>

                <span className="text-sm sm:text-base font-bold text-white block mt-1">
                  {specs.hardness}
                </span>
              </div>


              <div>
                <span className="text-[9px] text-[#9E9EA7] uppercase tracking-widest font-bold block">
                  Curing Protocol
                </span>

                <span className="text-sm sm:text-base font-bold text-white block mt-1">
                  {specs.curingTime} Hours
                </span>
              </div>


              <div>
                <span className="text-[9px] text-[#9E9EA7] uppercase tracking-widest font-bold block">
                  Beading Angle
                </span>

                <span className="text-sm sm:text-base font-bold text-[#E9001A] block mt-1">
                  {specs.hydrophobicAngle}° Struct
                </span>
              </div>


            </div>

          </div>

          {/* Pricing Card for Mobile */}
          <div className="bg-[#0C0C0E] border border-[#E9001A]/15 rounded-3xl p-6 relative overflow-hidden lg:hidden">

            <div className="absolute right-0 bottom-0 w-20 h-20 bg-[#E9001A]/5 rounded-full blur-2xl" />

            <div className="space-y-1">

              <span className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7]">
                Estimated Deployment Cost
              </span>

              <span className="text-2xl sm:text-3xl font-black text-[#E9001A] block">
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
  );
}