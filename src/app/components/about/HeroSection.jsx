"use client";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen  bg-secondary">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute -right-50 -top-50 w-150 h-150 rounded-full" />

      <div className="relative mx-auto max-w-7xl  pt-10 lg:pt-10 pb-5">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-4 pl-8 lg:pl-8 pr-0">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-[40%]">
            <p className="text-sm tracking-[0.4em] uppercase text-third font-semibold mb-6">
              About AVX
            </p>

            <h1
              className="
              text-4xl sm:text-5xl xl:text-6xl
              font-semibold
              leading-[1.05]
              text-primary
              font-[Montserrat]
            "
            >
              India's Premium
              <br />
              <span className="text-primary/70">Pre-Owned Vehicle Platform</span>
            </h1>

            <p className="mt-8 text-lg text-third max-w-lg leading-relaxed">
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
                  bg-fourth
                  text-primary
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
  p-0.5
  rounded-full
  bg-third/20
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
      bg-secondary
      text-primary/90
      font-medium
      transition-all duration-300
      hover:text-primary
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
                h-65
                sm:h-85
                md:h-105
                lg:h-120
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
