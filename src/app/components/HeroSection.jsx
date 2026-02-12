// app/about/components/AboutHero.jsx

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.openai.com/static-rsc-3/-s4-goFethhOwkUwmgIaHz6AiDWt5wkAvRpsnZDEgvTtrpesXRZvk0w9EqcJN4O-7LJBhQtDY9TDqmSbvIg8lEOzuRN_K3Pa2C7hJ8SU2XU?purpose=fullsize&v=1')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl px-6 text-center">
                {/* Page Title */}
                <p className="mb-10 inline-block border border-neutral-600 px-5 py-2 text-sm tracking-[0.4em] uppercase text-neutral-100 font-medium">
                    About AVX
                </p>


                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium leading-[1.15] text-white font-[Montserrat]">
                    India’s Structured Marketplace for Pre-Owned Vehicles
                </h1>

                {/* Subtext */}
                <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-neutral-300 font-[Poppins]">
                    AVX exists to solve fragmentation, opacity, and trust gaps in the used
                    vehicle market — enabling buyers and professional consultants to
                    operate with clarity, confidence, and measurable performance.
                </p>

                {/* Soft CTAs */}
                <div className="mt-16 flex justify-center gap-10 text-lg">
                    <a
                        href="/vehicles"
                        className="text-white underline underline-offset-8 decoration-neutral-600 hover:decoration-neutral-300 transition"
                    >
                        Browse vehicles
                    </a>

                    <a
                        href="/consultant"
                        className="text-neutral-300 hover:text-white transition"
                    >
                        Become a consultant →
                    </a>
                </div>
            </div>
        </section>
    );
}
