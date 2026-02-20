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
import PricingHero from "./PricingHero";

const tiers = [
  {
    name: "Basic",
    tagline: "Start building your presence on AVX.",
    color: "#6b7280",
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
    cta: "Get Started",
    ctaStyle: "border border-[#d1d5db] text-[#111827] hover:bg-[#f9fafb]",
  },
  {
    name: "Pro",
    tagline: "Everything you need to grow and compete.",
    highlight: true,
    color: "#2563eb",
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
    cta: "Get Started",
    ctaStyle: "bg-[#2563eb] text-white hover:bg-[#1d4ed8]",
  },
  {
    name: "Premium",
    tagline: "Maximum authority across the marketplace.",
    color: "#6b7280",
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
    cta: "Get Started",
    ctaStyle: "border border-[#d1d5db] text-[#111827] hover:bg-[#f9fafb]",
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
    <div>
      {/* HERO */}
      <PricingHero yearly={yearly} setYearly={setYearly} />

      {/* CARDS — div NOT section, inline style beats global CSS */}
      <div
        id="pricing-table"
        className="relative z-10 -mt-64 mb-0"
        style={{ background: "#ffffff" }}
      >
        <div className=" relative -top-40 max-w-6xl mx-auto px-5 sm:px-6 pt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-2xl overflow-hidden ${
                  tier.highlight ? "lg:-translate-y-4" : ""
                }`}
                style={{
                  background: tier.highlight
                    ? "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
                    : "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
                  border: tier.highlight
                    ? "1px solid rgba(37,99,235,0.35)"
                    : "1px solid rgba(0,0,0,0.08)",
                  boxShadow: tier.highlight
                    ? "0 20px 60px rgba(37,99,235,0.18)"
                    : "0 8px 30px rgba(0,0,0,0.08)",
                }}
              >
                {/* soft glow ring for highlight */}
                {tier.highlight && (
                  <div className="absolute -inset-0.5 rounded-2xl bg-blue-500/10 blur-xl opacity-40 pointer-events-none" />
                )}

                {tier.highlight && (
                  <div className="text-white text-[10px] font-bold tracking-[0.2em] uppercase text-center py-2.5 bg-blue-600">
                    Recommended
                  </div>
                )}

                <div className="relative p-7 flex flex-col flex-1">
                  <h3 className="text-[20px] font-bold mb-1 text-[#111827]">
                    {tier.name}
                  </h3>

                  <p className="text-[13px] text-[#6b7280] mb-5">
                    {tier.tagline}
                  </p>

                  <div className="mb-1">
                    <span className="text-[26px] font-black text-[#111827]">
                      {yearly && tier.priceYear
                        ? tier.priceYear
                        : tier.priceMonth}
                    </span>
                    <span className="text-[12px] text-[#9ca3af] ml-1">
                      / {yearly ? "year" : "month"}
                    </span>
                  </div>

                  <p className="text-[11px] text-[#9ca3af] mb-5">
                    Best for: {tier.bestFor}
                  </p>

                  {/* BUTTON */}
                  <button
                    className="w-full py-3 rounded-xl text-[14px] font-semibold transition-all duration-300 mb-5 hover:cursor-pointer"
                    style={{
                      background: tier.highlight
                        ? "#2563eb"
                        : "linear-gradient(90deg, #313131 0%, #1a1919 45%, #000000 100%)",
                      color: "#fff",
                      boxShadow: tier.highlight
                        ? "0 6px 20px rgba(37,99,235,0.35)"
                        : "0 6px 20px rgba(0,0,0,0.25)",
                    }}
                  >
                    {tier.cta}
                  </button>

                  <div className="h-px bg-[#eef2f7] mb-5" />

                  {/* FEATURES */}
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                          style={{
                            background: tier.highlight
                              ? "rgba(37,99,235,0.1)"
                              : "rgba(0,0,0,0.05)",
                          }}
                        >
                          <FiCheck
                            className="text-[10px]"
                            style={{
                              color: tier.highlight ? "#2563eb" : "#6b7280",
                            }}
                          />
                        </div>
                        <span className="text-[13px] text-[#374151]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[11px] text-[#9ca3af] mt-5 italic">
                    {tier.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ADD-ONS — div NOT section, inline style white */}
      <div style={{ background: "#ffffff" }}>
        <div className=" pb-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <p className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase text-fourth border border-fourth/20 bg-fourth/5 mb-4">
                Optional Add-ons
              </p>
              <h3
                className="text-[26px] sm:text-[32px] font-semibold"
                style={{ color: "#111827" }}
              >
                Extend Your Growth Capabilities
              </h3>
              <p
                className="text-[14px] mt-3 max-w-xl mx-auto"
                style={{ color: "#6b7280" }}
              >
                Add specialized visibility and performance tools without
                changing your core plan.
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#000000",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              }}
            >
              <div className="divide-y divide-white/5">
                {addons.map((addon, i) => (
                  <div
                    key={i}
                    className="group grid grid-cols-[48px_1fr] sm:flex sm:items-center gap-4 px-5 sm:px-6 py-5 sm:py-6 transition-colors duration-200 hover:bg-white/[0.03]"
                  >
                    {/* ICON */}
                    <div className="w-12 h-12 rounded-xl bg-fourth/10 border border-fourth/20 flex items-center justify-center text-lg text-fourth shrink-0">
                      {addon.icon}
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-center">
                      <p className="text-[15px] font-semibold text-white leading-tight">
                        {addon.title}
                      </p>

                      <p className="text-[13px] text-white/60 mt-1 leading-relaxed max-w-md">
                        {addon.desc}
                      </p>

                      {/* MOBILE BADGE */}
                      <span className="mt-3 sm:hidden inline-flex w-fit text-[10px] font-semibold text-fourth border border-fourth/20 bg-fourth/10 px-3 py-1 rounded-full">
                        Optional
                      </span>
                    </div>

                    {/* DESKTOP BADGE */}
                    <div className="hidden sm:block ml-auto">
                      <span className="text-[10px] font-semibold text-fourth border border-fourth/20 bg-fourth/10 px-3 py-1 rounded-full whitespace-nowrap">
                        Optional
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
