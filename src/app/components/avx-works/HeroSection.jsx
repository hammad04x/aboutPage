"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#0d0f14] overflow-hidden">

      {/* === BACKGROUND DEPTH LAYERS === */}

      {/* Soft Blue Orb */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#007bff]/10 blur-[160px] rounded-full" />

      {/* Dark Tech Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f14] via-[#0b0e13] to-[#0d0f14]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* === CONTENT === */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 w-full">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div className="max-w-xl space-y-8">

            {/* Badge */}
            <span className="
              inline-flex items-center gap-2
              px-4 py-1.5
              rounded-full
              border border-[#60a5fa]/30
              text-[#60a5fa]
              text-[11px] tracking-[0.25em] uppercase
              bg-[#044596]/10
              backdrop-blur-md
            ">
              <span className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full animate-pulse" />
              Our Process
            </span>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="
                text-4xl sm:text-5xl lg:text-[56px]
                font-bold leading-[1.05]
                text-[#f8fafc]
                tracking-tight
              ">
                How AVX
              </h1>

              <h1 className="
                text-4xl sm:text-5xl lg:text-[56px]
                font-bold leading-[1.05]
                tracking-tight
                bg-gradient-to-r from-[#60a5fa] to-[#007bff]
                bg-clip-text text-transparent
              ">
                Works
              </h1>
            </div>

            {/* Text */}
            <div className="space-y-4 pt-2">
              <p className="text-lg text-[#e5e7eb] font-medium">
                AVX is a structured marketplace for pre-owned vehicles.
              </p>

              <p className="text-[15px] text-[#9ca3af] leading-relaxed">
                We connect verified consultants and serious buyers through
                transparent listings, inspection visibility, and performance accountability.
              </p>
            </div>

            {/* Accent Line */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#044596] to-[#60a5fa] rounded-full" />

            {/* BUTTONS (UNCHANGED AS REQUESTED) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3">

              {/* Primary */}
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

              {/* Secondary */}
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

          {/* ================= RIGHT ================= */}
          <div className="relative h-[340px] lg:h-[480px]">

            {/* Frame Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#007bff]/10 to-transparent blur-2xl rounded-3xl" />

            <div className="
              relative h-full
              rounded-2xl
              overflow-hidden
              border border-[#1f2937]
              shadow-[0_40px_100px_rgba(0,0,0,0.8)]
              bg-[#0b0e13]
            ">

              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80"
                className="w-full h-full object-cover scale-[1.02]"
                alt=""
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent opacity-70" />

              {/* Stats Card */}
              <div className="
                absolute bottom-6 left-6 right-6
                bg-[#0f1117]/95
                backdrop-blur-xl
                border border-[#1f2937]
                rounded-xl
                p-5
              ">
                <div className="grid grid-cols-3 text-center gap-2">
                  <div>
                    <p className="text-xl font-bold text-[#60a5fa]">500+</p>
                    <p className="text-xs text-[#9ca3af]">Vehicles</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#60a5fa]">100+</p>
                    <p className="text-xs text-[#9ca3af]">Consultants</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#60a5fa]">98%</p>
                    <p className="text-xs text-[#9ca3af]">Satisfaction</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
