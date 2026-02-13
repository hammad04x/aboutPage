"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#0d0f14] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f14] via-[#0b0e13] to-[#0d0f14]" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#007bff]/10 blur-[160px] rounded-full" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 w-full">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT ================= */}
          <div className="max-w-xl space-y-8">

            <span className="
              inline-flex items-center gap-2
              px-4 py-1.5
              rounded-full
              border border-[#60a5fa]/30
             text-sm tracking-[0.4em] uppercase text-[var(--color-third)] font-semibold
              bg-[#044596]/10
              backdrop-blur-md
            ">
              Our Process
            </span>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] text-[#f8fafc] tracking-tight">
                How AVX
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-[var(--color-fourth)]">
                Works
              </h1>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-lg text-[#e5e7eb] font-medium">
                AVX is a structured marketplace for pre-owned vehicles.
              </p>

              <p className="text-[15px] text-[#9ca3af] leading-relaxed">
                We connect verified consultants and serious buyers through
                transparent listings, inspection visibility, and performance accountability.
              </p>
            </div>

            <div className="w-24 h-[2px] bg-[var(--color-fourth)] rounded-full" />

            {/* BUTTONS (UNCHANGED) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3">

              <a
                href="/vehicles"
                className="
                relative group
                inline-flex items-center justify-center
                px-7 py-3.5
                rounded-xl
                text-sm font-semibold
                text-white
                bg-gradient-to-r from-[#044596] to-[#007bff]
                shadow-lg shadow-blue-900/40
                transition duration-300
                hover:shadow-blue-600/40
                hover:-translate-y-[1px]
              ">
                Browse Vehicles
              </a>

              <a
                href="/consultant"
                className="
                px-7 py-3.5
                rounded-xl
                text-sm font-semibold
                border border-[#374151]
                border-2
                text-[#e5e7eb]
                bg-[#111318]
                transition duration-300
                hover:border-[#60a5fa]
                hover:text-[#60a5fa]
                hover:bg-[#151922]
                hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.25)]
              ">
                Become a Consultant
              </a>

            </div>

          </div>

          {/* ================= RIGHT SYSTEM STACK ================= */}
          <div className="relative h-[460px]">

            {/* MAIN SYSTEM CARD */}
            <div className="
              absolute left-0 top-0
              w-[72%] h-[70%]
              rounded-2xl border border-[#1f2937]
              bg-[#0f1117]/95 backdrop-blur-xl
              shadow-[0_40px_100px_rgba(0,0,0,0.8)]
              p-6 z-20
            ">
              <p className="text-sm text-[#9ca3af] mb-5">Marketplace Transparency</p>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-white">Verified Consultants</span>
                  <span className="text-[var(--color-fourth)] font-semibold">100+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Active Listings</span>
                  <span className="text-[var(--color-fourth)] font-semibold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Inspection Visibility</span>
                  <span className="text-[var(--color-fourth)] font-semibold">Enabled</span>
                </div>
              </div>
            </div>

            {/* IMAGE CARD (NEW — MIDDLE LAYER) */}
            <div className="
              absolute left-[10%] top-[48%]
              w-[88%] h-[40%]
              rounded-xl overflow-hidden
              border border-[#1f2937]
              shadow-[0_30px_80px_rgba(0,0,0,0.8)]
              z-30
            ">
              <img
                src="/car-hero-2.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14]/80 to-transparent" />
            </div>

            {/* PERFORMANCE CARD */}
            <div className="
              absolute right-20 bottom-0
              w-[58%]
              rounded-xl border border-[#1f2937]
              bg-[#0b0e13]/95 backdrop-blur-xl
              p-5 shadow-xl z-30
            ">
              <p className="text-xs text-[#9ca3af] mb-3">Performance Snapshot</p>

              <div className="flex justify-between text-sm">
                <span className="text-white">Buyer Satisfaction</span>
                <span className="text-[var(--color-fourth)] font-semibold">98%</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
