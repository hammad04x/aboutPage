export default function TierCta() {
  return (
    <section className="hero_car_half2 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="
              text-3xl sm:text-4xl xl:text-5xl
              font-semibold
              leading-[1.15]
              text-primary
              font-[Montserrat]
            "
          >
            Choose your tier and start
            <span className="block mt-3 text-fourth">
              building visibility
            </span>
          </h2>
        </div>

        {/* ===== CARDS ===== */}
        <div
          className="
            mt-14
            grid md:grid-cols-3
            rounded-3xl
            overflow-hidden
            border border-primary/10
          "
        >

          {/* ===== BASIC ===== */}
          <a
            href="/consultant/register?plan=basic"
            className="
              group
              transition-all duration-500 ease-out
              hover:bg-[linear-gradient(90deg,#2c2c2c_0%,#1a1a1a_45%,#000000_100%)]
              px-10 py-16 lg:py-20
              text-center
              border-b md:border-b-0 md:border-r border-primary/10
            "
          >
            <p className="mb-6">
              <span className="bg-secondary/25 px-4 py-1.5 rounded-full border border-primary/30 text-xs tracking-[0.35em] uppercase text-third font-semibold">
                Starter
              </span>
            </p>

            <p className="text-2xl sm:text-3xl font-semibold text-fourth">
              Start as Basic
            </p>

            <p className="mt-4 text-primary/90 max-w-xs mx-auto leading-relaxed">
              Perfect for consultants beginning their journey with essential visibility tools.
            </p>

            <div className="mt-10">
              <span className="text-primary underline underline-offset-8 decoration-primary/40 group-hover:decoration-fourth transition">
                Choose Basic →
              </span>
            </div>
          </a>

          {/* ===== PRO ===== */}
          <a
            href="/consultant/register?plan=pro"
            className="
              group
              transition-all duration-500 ease-out
              hover:bg-[linear-gradient(90deg,#2c2c2c_0%,#1a1a1a_45%,#000000_100%)]
              px-10 py-16 lg:py-20
              text-center
              border-b md:border-b-0 md:border-r border-primary/10
            "
          >
            <p className="mb-6">
              <span className="bg-secondary/25 px-4 py-1.5 rounded-full border border-primary/30 text-xs tracking-[0.35em] uppercase text-third font-semibold">
                Most Popular
              </span>
            </p>

            <p className="text-2xl sm:text-3xl font-semibold text-fourth">
              Upgrade to Pro
            </p>

            <p className="mt-4 text-primary/90 max-w-xs mx-auto leading-relaxed">
              Unlock advanced analytics, higher visibility, and performance tools.
            </p>

            <div className="mt-10">
              <span className="text-primary underline underline-offset-8 decoration-primary/40 group-hover:decoration-fourth transition">
                Choose Pro →
              </span>
            </div>
          </a>

          {/* ===== PREMIUM ===== */}
          <a
            href="/consultant/register?plan=premium"
            className="
              group
              transition-all duration-500 ease-out
              hover:bg-[linear-gradient(90deg,#2c2c2c_0%,#1a1a1a_45%,#000000_100%)]
              px-10 py-16 lg:py-20
              text-center
            "
          >
            <p className="mb-6">
              <span className="bg-secondary/25 px-4 py-1.5 rounded-full border border-primary/30 text-xs tracking-[0.35em] uppercase text-third font-semibold">
                Enterprise
              </span>
            </p>

            <p className="text-2xl sm:text-3xl font-semibold text-fourth">
              Go Premium
            </p>

            <p className="mt-4 text-primary/90 max-w-xs mx-auto leading-relaxed">
              Maximum visibility, customization, and priority placement across AVX.
            </p>

            <div className="mt-10">
              <span className="text-primary underline underline-offset-8 decoration-primary/40 group-hover:decoration-fourth transition">
                Choose Premium →
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
