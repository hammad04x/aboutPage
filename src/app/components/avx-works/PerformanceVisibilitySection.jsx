"use client";
import { FcRating } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcAreaChart } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";


export default function PerformanceVisibilitySection() {
  return (
    <section className="relative py-28 bg-[var(--color-secondary)] overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-7">
            <p className="text-xs tracking-[0.28em] uppercase text-[var(--color-third)]">
              Performance Visibility
            </p>

            <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-white">
              Consultant Storefronts with
              <span className="block text-[var(--color-fourth)]">
                Accountability
              </span>
            </h2>

            <p className="text-[15px] text-[var(--color-third)] leading-relaxed">
              Each consultant on AVX operates through a public storefront where
              buyers can evaluate performance, reliability, and professionalism.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Active Inventory Visibility",
                "Ratings & Reviews Transparency",
                "Inspection Performance Ratios",
                "Response Time Indicators",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--color-fourth)] rounded-full" />
                  <p className="text-sm text-white/90">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-[15px] text-white pt-4 border-t border-white/10">
              Buyers evaluate not just the vehicle — but the seller behind it.
            </p>
          </div>

          {/* RIGHT VISUAL — FLOATING PERFORMANCE METRICS */}
          <div className="relative h-[520px] flex items-center justify-center">
            {/* BASE STOREFRONT CARD */}
            <div className="relative h-62 rounded-xl overflow-hidden border border-white/10">
              <img
                src="/hand-drawn-financial-consultancy-facebook-cover.png"
                alt="Consultant Storefront"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Consultant Avatar */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[var(--color-fourth)] flex items-center justify-center text-xs font-bold">
                  AV
                </div>
                <span className="text-xs text-white">AVX Certified</span>
              </div>
            </div>

            <div
              className="
absolute top-10 right-9
px-4 py-2 rounded-xl
bg-[linear-gradient(90deg,#313131_0%,#1a1919_45%,#000000_100%)] border border-blue-400/30
backdrop-blur-md text-sm 
animate-[floatY_3s_ease-in-out_infinite]
"
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <FcRating className="text-lg" />
                <span>4.8 Rating</span>
              </div>
            </div>

            {/* Response */}
            <div
              className="
absolute bottom-16 right-10
px-4 py-2 rounded-xl
bg-[linear-gradient(90deg,#313131_0%,#1a1919_45%,#000000_100%)] border border-blue-400/30
backdrop-blur-md text-sm 
animate-[floatY_3s_ease-in-out_infinite]
"
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <FcClock className="text-lg " />
                <span>12 min Response</span>
              </div>
            </div>

            {/* Inventory */}
            <div
              className="
absolute top-24 left-8
px-4 py-2 rounded-xl
bg-[linear-gradient(90deg,#313131_0%,#1a1919_45%,#000000_100%)] border border-blue-400/30
backdrop-blur-md text-sm
animate-[floatY_3s_ease-in-out_infinite]
"
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <FcAreaChart className="text-lg" />
                <span>24 Active Listings</span>
              </div>
            </div>

            {/* Inspection Ratio */}
            <div
              className="
absolute bottom-20 left-10
px-4 py-2 rounded-xl
bg-[linear-gradient(90deg,#313131_0%,#1a1919_45%,#000000_100%)] border border-blue-400/30
backdrop-blur-md text-sm
animate-[floatY_4s_ease-in-out_infinite]
"
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <FcInspection className="text-lg" />
                <span>98% Inspection Pass</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION KEYFRAMES */}
      <style jsx>{`
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}
