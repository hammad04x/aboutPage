"use client";

export default function HeroSection() {

  return (
    <section className="relative overflow-hidden min-h-screen  bg-[var(--color-secondary)]">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute right-[-200px] top-[-200px] w-[600px] h-[600px] rounded-full" />

      <div className="relative mx-auto max-w-7xl  pt-10 lg:pt-10 pb-5">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-4 pl-8 lg:pl-8 pr-0">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-[40%]">
            <p className="text-sm tracking-[0.4em] uppercase text-[var(--color-third)] font-semibold mb-6">
              About AVX
            </p>

            <h1
              className="
              text-4xl sm:text-5xl xl:text-6xl
              font-semibold
              leading-[1.05]
              text-[var(--color-primary)]
              font-[Montserrat]
            "
            >
              India's Premium
              <br />
              <span className="text-white/70">Pre-Owned Vehicle Platform</span>
            </h1>

            <p className="mt-8 text-lg text-[var(--color-third)] max-w-lg leading-relaxed">
              AVX brings structure, performance visibility, and trust into the
              used vehicle ecosystem — connecting serious buyers with verified
              consultants and inspected inventory.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="/vehicles"
                className="
                  px-7 py-4
                  rounded-xl
                  bg-[var(--color-fourth)]
                  text-white
                  font-medium
                  transition-all duration-300
                  hover:scale-[1.04]
                  hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.25)]
                "
              >
                Browse Vehicles
              </a>

              <div
                className="
  p-[2px]
  rounded-full
  bg-neutral-300
  transition-all duration-300
  hover:scale-[1.03]
  hover:bg-[linear-gradient(90deg,#044596_0%,#60a5fa_50%,#044596_100%)]
"
              >
                <a
                  href="/consultant"
                  className="
      block
      px-7 py-3.5
      rounded-full
      bg-[var(--color-secondary)]
      text-white/90
      font-medium
      transition-all duration-300
      hover:text-white
    "
                >
                  Become Consultant
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[60%] relative">
            <img
              src="/hero_car_half.jpg"
              alt="Vehicle"
              className="
                w-full
                h-[260px]
                sm:h-[340px]
                md:h-[420px]
                lg:h-[480px]
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
