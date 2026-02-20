"use client";

import { motion } from "framer-motion";
import {
  FiCheck,
  FiSearch,
  FiZap,
  FiStar,
  FiTarget,
  FiVideo,
} from "react-icons/fi";
import { useState } from "react";

const tiers = [
  {
    name: "Basic",
    color: "text-emerald-400",
    priceMonth: "₹999 – ₹1,499",
    priceYear: "₹9,999 – ₹12,999",
    bestFor: "Small consultants & entry-level sellers",
    features: [
      "Up to 8 active listings",
      "Default storefront theme",
      "Public search visibility",
      "Receive inquiries",
      "Basic analytics",
      "Inspection request support",
      "Access to PPC (paid separately)",
    ],
    note: "No customization. No featured priority.",
  },
  {
    name: "Pro",
    highlight: true,
    color: "text-yellow-400",
    priceMonth: "₹2,999 – ₹4,999",
    priceYear: "₹19,999 – ₹29,999",
    bestFor: "Growing dealerships",
    features: [
      "25–40 active listings",
      "Enhanced search visibility",
      "Advanced analytics",
      "Performance metrics",
      "Higher inquiry limits",
      "Featured vehicle eligibility",
      "WhatsApp integration",
    ],
    note: "Designed for growth-focused consultants.",
  },
  {
    name: "Premium",
    color: "text-blue-400",
    priceMonth: "₹7,999+",
    priceYear: "₹69,999+",
    bestFor: "Large inventory dealers & brands",
    features: [
      "75+ active listings",
      "Premium customization",
      "Custom banners & media",
      "Top placement eligibility",
      "Dedicated support",
      "Free re-inspection",
      "Priority PPC slots",
      "Advanced analytics dashboard",
    ],
    note: "Premium visibility & authority positioning.",
  },
];

const addons = [
  {
    title: "AVX Inspection Fees",
    desc: "Professional third-party inspections to increase buyer confidence.",
    icon: <FiSearch />,
  },
  {
    title: "Sponsored Vehicle Boost",
    desc: "Promote selected listings to gain higher visibility in search.",
    icon: <FiZap />,
  },
  {
    title: "Featured Consultant Slot",
    desc: "Appear in premium consultant placements across the marketplace.",
    icon: <FiStar />,
  },
  {
    title: "Category Dominance Campaign",
    desc: "Own visibility in your segment with targeted exposure campaigns.",
    icon: <FiTarget />,
  },
  {
    title: "Video Inspection Add-on",
    desc: "Offer video walk-through inspections to increase buyer trust.",
    icon: <FiVideo />,
  },
];

export default function FullPricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing-table" className="py-10 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-[10px] uppercase tracking-[0.35em] text-fourth font-semibold mb-3">
            Pricing
          </p>

          <h2 className="text-[28px] sm:text-[36px] md:text-[46px] font-semibold leading-tight text-primary">
            Transparent Pricing Built for{" "}
            <span className="text-fourth font-bold">Every Growth Stage</span>
          </h2>

          <p className="mt-4 text-third text-[14px] sm:text-[15px] leading-relaxed">
            Choose the plan that aligns with your scale and unlock tools
            designed to increase visibility.
          </p>
        </div>

        {/* TOGGLE */}
        <div className="flex justify-center mb-14">
          <div className="relative flex items-center rounded-full bg-[#1b1e24]/80 backdrop-blur-md border border-white/10 p-1.5">
            <motion.div
              animate={{ x: yearly ? 110 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute left-1.5 top-1.5 bottom-1.5 w-[110px] rounded-full bg-gradient-to-b from-[#2d7be6] to-[#1a63c9]"
            />
            <button
              onClick={() => setYearly(false)}
              className={`relative z-10 w-[110px] py-2.5 text-sm font-semibold hover:cursor-pointer ${!yearly ? "text-white" : "text-white/60"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative z-10 w-[110px] py-2.5 text-sm font-semibold hover:cursor-pointer ${yearly ? "text-white" : "text-white/60"}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 sm:p-8 backdrop-blur-xl flex flex-col transition-all duration-300 ${
                tier.highlight
                  ? "bg-gradient-to-b from-[#0b2a4a]/80 via-[#0d1b2e]/70 to-transparent border border-fourth/40 shadow-[0_40px_120px_rgba(0,0,0,0.9)] scale-[1.05] z-10"
                  : "bg-white/[0.04] border border-white/10 hover:border-white/20"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -inset-0.5 rounded-2xl bg-fourth/10 blur-2xl opacity-40 pointer-events-none" />
              )}

              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fourth text-[10px] font-semibold px-3 py-1 rounded-full text-white shadow">
                  Most Popular
                </div>
              )}

              <h3 className={`text-lg font-semibold ${tier.color}`}>
                {tier.name}
              </h3>

              <p className="text-primary mt-3 text-[26px] font-bold">
                {yearly && tier.priceYear ? tier.priceYear : tier.priceMonth}
                <span className="text-xs text-third font-normal">
                  {" "}
                  / {yearly && tier.priceYear ? "year" : "month"}
                </span>
              </p>

              <p className="text-third text-[12px] mt-2">
                Best for: {tier.bestFor}
              </p>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="space-y-3 flex-1">
                {tier.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiCheck className="text-fourth mt-0.5" />
                    <span className="text-[14px] text-primary/90">{f}</span>
                  </div>
                ))}
              </div>

              <p className="text-third text-[11px] mt-5 italic">{tier.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          {/* HEADER */}
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.35em] text-fourth mb-3">
              Optional Add-ons
            </p>

            <h3 className="text-[26px] sm:text-[32px] font-semibold text-primary">
              Extend Your Growth Capabilities
            </h3>

            <p className="text-third text-[14px] mt-3 max-w-xl mx-auto">
              Add specialized visibility and performance tools without changing
              your core plan.
            </p>
          </div>

          {/* PANEL */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b0e13]/80 to-[#0f1117]/90 backdrop-blur-xl overflow-hidden">
            {/* subtle glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />

            <div className="relative divide-y divide-white/5">
              {addons.map((addon, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-white/[0.03] transition"
                >
                  {/* icon */}
                  <div className="w-11 h-11 rounded-xl bg-fourth/10 border border-fourth/20 flex items-center justify-center text-lg text-fourth shrink-0">
                    {addon.icon}
                  </div>

                  {/* text */}
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-primary">
                      {addon.title}
                    </p>
                    <p className="text-[13px] text-third mt-1 leading-relaxed">
                      {addon.desc}
                    </p>
                  </div>

                  {/* tag */}
                  <span className="text-[10px] font-semibold text-fourth border border-fourth/20 bg-fourth/10 px-3 py-1 rounded-full self-start sm:self-center">
                    Optional
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
