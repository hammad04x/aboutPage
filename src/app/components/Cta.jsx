// app/about/components/FinalCTAAlt.jsx

export default function Cta() {
    return (
        <section className="bg-[#060606] ">
            <div className="mx-auto max-w-7xl px-6 py-36">

                {/* Heading */}
                <div className="text-center">

                    <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl xl:text-6xl font-medium leading-[1.15] text-white font-[Montserrat]">
                        Ready to explore better
                        <span className="block mt-2 text-neutral-400">
                            used vehicles?
                        </span>
                    </h2>
                </div>

                {/* Split CTA */}
                <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">

                    {/* BUYERS */}
                    <a
                        href="/vehicles"
                        className="group bg-[#0b0b0b] px-10 py-20 text-center hover:bg-[#111] transition"
                    >
                        <p className="mb-4 text-sm tracking-[0.3em] uppercase">
                            <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded-full">
                                For Buyers
                            </span>
                        </p>

                        <p className="text-2xl sm:text-3xl font-medium text-white font-[Montserrat]">
                            Browse Vehicles
                        </p>

                        <p className="mt-4 text-base text-neutral-400 max-w-sm mx-auto">
                            Discover verified vehicles through structured, transparent listings.
                        </p>


                        <span className="mt-10 inline-block text-white underline underline-offset-8 decoration-neutral-600 group-hover:decoration-neutral-300 transition">
                            Enter Marketplace →
                        </span>
                    </a>

                    {/* CONSULTANTS */}
                    <a
                        href="/consultant"
                        className="group bg-[#0b0b0b] px-10 py-20 text-center hover:bg-[#111] transition"
                    >
                        <p className="mb-4 text-sm tracking-[0.3em] uppercase">
                            <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded-full">
                                For Consultants
                            </span>
                        </p>


                        <p className="text-2xl sm:text-3xl font-medium text-white font-[Montserrat]">
                            Become a Consultant
                        </p>

                        <p className="mt-4 text-base text-neutral-400 max-w-sm mx-auto">
                            Build visibility and credibility on a structured, performance-led platform.
                        </p>


                        <span className="mt-10 inline-block text-white underline underline-offset-8 decoration-neutral-600 group-hover:decoration-neutral-300 transition">
                            Start Your Storefront →
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}
