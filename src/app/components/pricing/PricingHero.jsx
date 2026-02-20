"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="relative py-24 md:py-32 min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/car-showroom.avif')",
          filter: "grayscale(100%) brightness(0.45) contrast(0.9)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* LABEL */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full text-[10px] tracking-[0.35em] uppercase text-fourth border border-fourth/20 bg-fourth/10 backdrop-blur mb-6"
        >
          Pricing & Tiers
        </motion.span>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[34px] sm:text-[48px] md:text-[60px] font-semibold leading-[1.08] text-primary"
        >
          Simple, Structured{" "}
          <span className="bg-gradient-to-r from-fourth via-[#60a5fa] to-fourth bg-clip-text text-transparent font-bold">
            Pricing
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-third text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto"
        >
          Choose a subscription tier that fits your inventory size and growth ambitions.
          Built for transparency, scalability, and long-term visibility.
        </motion.p>

        {/* TRUST LINE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#1f2937] bg-[#0f1117]/70 backdrop-blur text-[12px] text-primary/80"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          No commission on vehicle sales
        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-secondary" />

    </section>
  );
}
