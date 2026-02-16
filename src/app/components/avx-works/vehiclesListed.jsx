"use client";


import { CheckCircle2, ShieldCheck, UserCheck, FileText, MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function VehiclesListed() {
  const points = [
    { text: "Verified ownership information", icon: <UserCheck size={18} /> },
    { text: "Structured vehicle specifications", icon: <FileText size={18} /> },
    { text: "Transparent condition disclosures", icon: <Search size={18} /> },
    { text: "Precise location clarity", icon: <MapPin size={18} /> },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary font-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Main Glassmorphic Container */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/[0.02] backdrop-blur-sm p-8 md:p-12">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT: Verification System */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-sm tracking-[0.4em] uppercase text-third font-semibold">
                  Trust Engine
                </p>
              </div>

              <h2 className="text-3xl md:text-5xl font-primary font-bold leading-tight mb-6">
                Standardized <span className="text-fourth">Verification</span>
              </h2>

              <p className="text-third text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                We eliminate ambiguity. Every vehicle on AVX undergoes a structured verification protocol,
                transforming raw data into reliable, decision-ready information.
              </p>

              {/* Verification "Scanner" UI */}
              <div className="space-y-3 mb-8">
                {points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-xl border border-primary/5 bg-primary/[0.03] group hover:border-fourth/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-fourth opacity-80 group-hover:opacity-100">
                        {point.icon}
                      </div>
                      <p className="text-sm md:text-[15px] text-primary/85 font-medium">
                        {point.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-third uppercase tracking-tighter">Verified</span>
                      <CheckCircle2 size={16} className="text-fourth" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-fourth/5 border border-fourth/20">
                <ShieldCheck className="text-fourth" size={24} />
                <p className="text-sm text-third">
                  This approach ensures <span className="text-primary font-semibold">100% comparable data</span> for every buyer.
                </p>
              </div>
            </div>

           {/* RIGHT VISUAL */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="relative flex justify-center lg:justify-end"
>
  <div
    className="
      group relative
      w-full max-w-[340px]
      rounded-[24px]
      overflow-hidden
      bg-[#0c0f14]
      border-2 border-primary/25
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.25)]
    "
  >
    {/* subtle inner rim */}
    <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-primary/[0.05]" />

    {/* IMAGE SECTION */}
    <div className="relative p-2 pb-0">
      <div className="rounded-[16px] overflow-hidden border border-primary/10 relative">
        <img
          src="/car_image_olx.jpg"
          alt="Chevrolet Camaro"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        
        {/* ✨ PROFESSIONAL BADGE: TOP LEFT */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 bg-fourth px-2.5 py-1 rounded-full shadow-lg backdrop-blur-md">
            <ShieldCheck size={12} className="text-white" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">AVX Verified</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/60 border border-white/20 px-2.5 py-1 rounded-full backdrop-blur-md">
             <span className="text-[10px] font-medium text-white/90">200+ Points Inspected</span>
          </div>
        </div>
      </div>

      {/* wishlist */}
      <button className="absolute right-5 top-5 w-9 h-9 rounded-full bg-black/55 backdrop-blur border border-primary/20 flex items-center justify-center hover:bg-black/70 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f8fafc"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80"
        >
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      </button>
    </div>

    {/* CONTENT */}
    <div className="px-5 pt-4 pb-5">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-[20px] font-semibold text-primary tracking-tight">
          Chevrolet Camaro
        </h3>
        {/* ✨ RATING BADGE */}
        <div className="flex items-center gap-1 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
          <span className="text-fourth text-[11px]">★</span>
          <span className="text-primary/80 text-[11px] font-bold">4.3</span>
        </div>
      </div>

      <p className="text-[13px] text-primary/65 mb-3">
        Listed By: <span className="text-primary/90 font-medium">Nihal Chaudhary</span>
      </p>

      {/* ✨ SPECIFICATION BADGES */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-primary/5 border border-primary/10 text-primary/70 text-[10px] px-2 py-1 rounded-md font-medium uppercase">Manual</span>
        <span className="bg-primary/5 border border-primary/10 text-primary/70 text-[10px] px-2 py-1 rounded-md font-medium uppercase">Petrol</span>
        <span className="bg-primary/5 border border-primary/10 text-primary/70 text-[10px] px-2 py-1 rounded-md font-medium uppercase">1st Owner</span>
      </div>

      <div className="flex items-center gap-2 text-primary/55 text-[13px] mb-5">
        <MapPin size={14} className="text-fourth/70" />
        <span>Chhapi, Gujarat</span>
      </div>

      {/* PRICE + BUTTON */}
      <div className="flex items-center justify-between pt-2 border-t border-primary/5">
        <div>
           <p className="text-[22px] font-semibold text-primary tracking-tight">
             ₹ 9.25 Lakh
           </p>
           <p className="text-[10px] text-fourth font-medium uppercase tracking-widest">Fixed Price</p>
        </div>

        <a
          href="/consultant"
          className="
            px-5 py-2
            rounded-full
            bg-secondary
            text-primary/90
            text-[13px]
            font-semibold
            border border-primary/20
            transition-all duration-300
            hover:text-primary
            hover:border-fourth
            hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
          "
        >
          View Details
        </a>
      </div>
    </div>
  </div>
</motion.div>


          </div>
        </div>
      </div>
    </section>
  );
}