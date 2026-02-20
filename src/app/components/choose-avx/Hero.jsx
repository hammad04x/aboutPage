"use client";

export default function AvxHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-secondary overflow-hidden">

      {/* ===== BACKGROUND DEPTH ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-black/60 to-secondary" />

      {/* glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-fourth/10 blur-[160px] rounded-full" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <div className="max-w-xl">

            <p className="text-xs tracking-[0.4em] uppercase text-third font-semibold mb-6">
              AVX Marketplace
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.05] text-primary tracking-tight">
              A Structured Marketplace
              <span className="block text-fourth">
                for Serious Vehicle Buyers
              </span>
            </h1>

            <p className="mt-6 text-[16px] leading-relaxed text-third max-w-lg">
              AVX is built for clarity, accountability, and performance
              transparency in the pre-owned vehicle ecosystem. Unlike open
              classifieds, AVX operates through verified consultants, structured
              listings, and optional inspection assurance.
            </p>

            <div className="mt-8 w-24 h-[2px] bg-gradient-to-r from-fourth to-fourth/40" />

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <a
                href="/vehicles"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-primary
                bg-fourth shadow-lg shadow-fourth/30
                hover:shadow-fourth/40 transition hover:-translate-y-[1px]"
              >
                Browse Vehicles
              </a>

              <a
                href="/consultant"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold
                border border-white/10 text-third
                bg-secondary hover:border-fourth
                hover:text-fourth transition"
              >
                Become a Consultant
              </a>

            </div>
          </div>

          {/* ================= RIGHT VIDEO ================= */}

          <div className="relative h-[520px] flex items-center justify-center">

            {/* glow layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-fourth/10 to-transparent blur-3xl rounded-3xl" />

            {/* VIDEO CARD */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">

              {/* VIDEO */}
              <iframe
                src="https://www.youtube.com/embed/8b1JEDvenQU?autoplay=1&mute=1&loop=1&playlist=8b1JEDvenQU&controls=0&showinfo=0&modestbranding=1"
                className="w-full h-full object-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-70" />

              {/* floating stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-secondary/70 backdrop-blur-xl border border-white/10 rounded-xl p-4">

                <div className="grid grid-cols-3 text-center">

                  <div>
                    <p className="text-lg font-semibold text-fourth">100+</p>
                    <p className="text-xs text-third">Consultants</p>
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-fourth">500+</p>
                    <p className="text-xs text-third">Listings</p>
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-fourth">98%</p>
                    <p className="text-xs text-third">Transparency</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
