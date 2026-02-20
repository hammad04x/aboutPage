"use client";

import { motion } from "framer-motion";

export default function PricingHero({ yearly, setYearly }) {
  return (
    <section className="relative pt-24 md:pt-32 pb-120 overflow-hidden">

      {/* BACKGROUND IMAGE — covers the whole section including the pb-80 space where cards overlap */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/car-showroom.avif')",
          filter: "grayscale(100%) brightness(0.35) contrast(1)",
        }}
      />

      {/* very subtle bottom darkening so text stays readable — no white */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-b from-transparent to-black/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* LABEL */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#60a5fa]/30 text-sm tracking-[0.35em] uppercase text-third font-semibold bg-[#044596]/10 backdrop-blur-md mb-6"
        >
          Pricing & Tiers
        </motion.span>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[34px] sm:text-[48px] md:text-[60px] font-semibold leading-[1.08] text-white"
        >
          Simple, Structured{" "}
          <span className="bg-linear-to-r from-fourth via-[#60a5fa] to-fourth bg-clip-text text-transparent font-bold">
            Pricing
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-white/60 text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto"
        >
          Choose a subscription tier that fits your inventory size and growth ambitions.
          Built for transparency, scalability, and long-term visibility.
        </motion.p>

        {/* TOGGLE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <span className={`text-sm font-medium transition-colors duration-200 ${!yearly ? "text-white" : "text-white/40"}`}>
            Monthly
          </span>

          <button
            onClick={() => setYearly(!yearly)}
            className="relative w-14 h-7 rounded-full border border-white/20 bg-white/10 backdrop-blur transition-colors duration-200 hover:cursor-pointer"
          >
            <motion.div
              animate={{ x: yearly ? 28 : 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="absolute top-[3] w-[22] h-[22] rounded-full bg-fourth shadow-md"
            />
          </button>

          <span className={`text-sm font-medium transition-colors duration-200 ${yearly ? "text-white" : "text-white/40"}`}>
            Yearly
          </span>
        </motion.div>

        {/* TRUST LINE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-[12px] text-white/60"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          No commission on vehicle sales
        </motion.div>

      </div>

    </section>
  );
}