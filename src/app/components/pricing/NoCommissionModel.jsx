"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function NoCommissionModel() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-10 overflow-hidden">

      {/* decorative big 0% */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 text-[200px] md:text-[280px] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block">
        0%
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">

        {/* ===== LABEL ===== */}


        {/* ===== MAIN GRID ===== */}
        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-0 items-start">

          {/* ===== LEFT ===== */}
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="lg:pr-16"
          >
            {/* number */}
            <div className="relative mb-5">
                        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-third">
            Revenue Model
          </span>
        </motion.div>
              <span className="text-[84px] sm:text-[105px] md:text-[120px] font-black leading-none text-primary tracking-tight">
                0
                <span className="text-fourth">%</span>
              </span>

              <div className="mt-1 flex items-center gap-3">
                <div className="h-px w-8 bg-fourth/60" />
                <span className="text-[15px] tracking-[0.35em] uppercase text-third">
                  Commission
                </span>
              </div>
            </div>

            <p className="text-third text-[15px] leading-relaxed max-w-md mb-6">
              Every sale you close is entirely yours. AVX earns through
              subscription — not by taking a cut of your work.
            </p>

            {/* subtle accent line to anchor */}
            <div className="w-16 h-px bg-gradient-to-r from-fourth/60 to-transparent mb-6" />

            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-fourth hover:text-primary transition-colors group"
            >
              View pricing plans
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* ===== DIVIDER ===== */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-[#1f2937] to-transparent mx-6" />

          {/* ===== RIGHT ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            {[
              {
                label: "01",
                title: "Full Pricing Control",
                body: "Set your own prices and negotiate on your terms. AVX never interferes with how you close deals.",
              },
              {
                label: "02",
                title: "Direct Transactions",
                body: "All payments happen independently. AVX connects buyers and sellers without sitting in the middle.",
              },
              {
                label: "03",
                title: "Predictable Costs",
                body: "One flat subscription. No surprise deductions, no scaling fees — what you pay is what you pay.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.12 + i * 0.08 }}
                viewport={{ once: true }}
                className="group p-4 border border-fourth/60 rounded-2xl"
              >
                <div className="flex items-start gap-5">
                  <span className="text-[11px] font-semibold text-[#374151] group-hover:text-fourth transition">
                    {item.label}
                  </span>

                  <div>
                    <h3 className="text-[16px] font-semibold text-primary mb-1 group-hover:text-fourth transition">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-third leading-relaxed max-w-md">
                      {item.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
