"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function NoCommissionModel() {
  return (
    <section className="relative py-20 sm:py-20 lg:py-20 overflow-hidden">
      {/* decorative 0% watermark */}
      <div className="absolute right-[-80] top-1/2 -translate-y-1/2 text-[220px] md:text-[300px] font-black text-white/[0.018] select-none pointer-events-none hidden lg:block leading-none">
        0%
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-14 lg:gap-0 items-start">
          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="lg:pr-16"
          >
            <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase text-fourth border border-fourth/20 bg-fourth/5 mb-4">
              Revenue Model
            </span>

            {/* big number */}
            <div className="mb-6">
              <span className="text-[88px] sm:text-[110px] md:text-[128px] font-black leading-none text-primary tracking-tight">
                0<span className="text-fourth">%</span>
              </span>

              {/* strikethrough label — more intentional */}
              <div className="mt-3 flex items-center gap-3">
                <div className="h-px w-6 bg-fourth/50 shrink-0" />
                <span className="text-[15px] tracking-[0.4em] uppercase text-third font-medium">
                  Commission
                </span>
              </div>
            </div>

            <p className="text-third text-[15px] leading-[1.8] max-w-sm mb-8">
              Every sale you close is entirely yours. AVX earns through
              subscription — not by taking a cut of your work.
            </p>

            {/* <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-fourth hover:text-primary transition-colors duration-200 group"
            >
              View pricing plans
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a> */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3 w-fit">
              <a
                href="/pricing"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border-2 border-[#374151] text-primary bg-[#111318] transition-all duration-300 hover:border-fourth hover:text-fourth hover:bg-[#151922] hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.25)]"
              >
                <span>View Pricing</span>

                <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <div className="hidden lg:block w-px bg-linear-to-b from-transparent via-[#1f2937] to-transparent mx-8 self-stretch" />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:pl-6 divide-y divide-[#1a2030]"
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
                transition={{ duration: 0.35, delay: 0.12 + i * 0.09 }}
                viewport={{ once: true }}
                className="group flex items-start gap-6 py-7 first:pt-0 last:pb-0 cursor-default"
              >
                <span className="text-[18px] text-fourth md:text-[#2d3748] lg:text-[#2d3748]  font-bold group-hover:text-fourth transition-colors duration-200 pt-1 shrink-0 tabular-nums w-5">
                  {item.label}
                </span>

                <div>
                  <h3 className="text-[15px] font-semibold text-primary group-hover:text-fourth transition-colors duration-200 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-third leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
