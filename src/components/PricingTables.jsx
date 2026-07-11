import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function PricingTables({ onSelectPackage }) {
  const packages = [
    {
      name: "Standard Shield",
      tier: "Entry Tier",
      price: "₹18,000",
      description:
        "Essential paint correction and 2-layer high-solids silica coating providing robust scratch protection.",
      features: [
        "9H Ceramic Coating (2 Layers)",
        "2 Years Warranty Protection",
        "Single-Stage Polish Correction",
      ],
      button: "Standard Shield",
      recommended: false,
    },

    {
      name: "Pro Crystalline",
      tier: "Intermediate Spec",
      price: "₹32,000",
      description:
        "Advanced molecular shielding incorporating chemical scratch resistance. Forms thick glass-like armor.",
      features: [
        "10H Hardness Rating (3 Layers)",
        "5 Years Warranty Protection",
        "Multi-Stage Clarity Decontamination",
      ],
      button: "Pro Crystalline",
      recommended: true,
    },

    {
      name: "Diamond Matrix",
      tier: "Apex Tier",
      price: "₹55,000",
      description:
        "Unmatched carbon-nanotube cross-linked matrix offering carbon self-healing layout structures.",
      features: [
        "10H Diamond Matrix (5 Layers)",
        "Lifetime Warranty & Top-ups",
        "3-Stage Absolute Mirror Correction",
      ],
      button: "Diamond Matrix",
      recommended: false,
    },
  ];


  const PricingCard = ({ item }) => (
    <div
      className={`
      relative flex min-h-[470px] flex-col justify-between overflow-hidden rounded-3xl p-8
      ${
        item.recommended
          ? "border border-[#E9001A]/40 bg-white/5 shadow-[0_15px_40px_rgba(233,0,26,0.12)]"
          : "border border-white/10 bg-white/5"
      }
      `}
    >

      {item.recommended && (
        <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#E9001A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
          Recommended
        </div>
      )}


      <div className="space-y-6">

        <div className="space-y-2">

          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${
              item.recommended
                ? "text-[#E9001A]"
                : "text-[#9E9EA7]"
            }`}
          >
            {item.tier}
          </span>


          <h3 className="text-2xl font-black uppercase tracking-tight text-white">
            {item.name}
          </h3>


          <span className="block pt-2 text-3xl font-black text-[#E9001A]">
            {item.price}
          </span>

        </div>


        <p className="text-xs leading-relaxed text-[#9E9EA7]">
          {item.description}
        </p>


        <ul className="space-y-3 border-t border-white/10 pt-5">

          {item.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-xs font-bold text-white/90"
            >

              <span className="h-1.5 w-1.5 rounded-full bg-[#E9001A]" />

              {feature}

            </li>
          ))}

        </ul>

      </div>


      <div className="pt-8">

        <button
          onClick={() => onSelectPackage(item.button)}
          className={`
          w-full rounded-xl py-4 text-[10px] font-bold uppercase tracking-widest transition-all duration-300
          ${
            item.recommended
              ? "bg-[#E9001A] text-white hover:bg-white hover:text-black"
              : "border border-white/10 bg-white/5 text-white hover:border-transparent hover:bg-[#E9001A]"
          }
          `}
        >
          Choose Package
        </button>

      </div>


    </div>
  );


  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
    >

      <div className="reveal space-y-3 pb-12 text-center">

        <span className="text-xs font-black uppercase tracking-[0.4em] text-[#E9001A]">
          Pricing Tables
        </span>

        <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
          Protection Program Specs
        </h2>

      </div>



      {/* Mobile Slider */}
      <div className="lg:hidden">

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="pb-14"
        >

          {packages.map((item) => (

            <SwiperSlide key={item.name}>
              <PricingCard item={item} />
            </SwiperSlide>

          ))}

        </Swiper>

      </div>



      {/* Desktop Grid */}
      <div className="hidden gap-8 lg:grid lg:grid-cols-3">

        {packages.map((item) => (

          <PricingCard
            key={item.name}
            item={item}
          />

        ))}

      </div>


    </section>
  );
}