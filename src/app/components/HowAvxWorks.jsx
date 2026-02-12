///4th section
import React from 'react';

const HowAvxWorks = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-[var(--color-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            How AVX Works
          </h2>
          <p className="text-xl md:text-2xl text-[var(--color-third)] max-w-3xl mx-auto">
            A clear, transparent, and direct path from discovery to ownership
          </p>
          <div className="w-24 h-1 bg-[var(--color-fourth)] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Steps - Vertical timeline style with cards */}
        <div className="relative">
          {/* Optional subtle vertical line (visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/5 transform -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
                  1
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
                    Search & Discover
                  </h3>
                  <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
                    Browse vehicles using powerful filters — budget, body type, fuel, brand, location, or directly by trusted consultants.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
                  2
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
                    Evaluate Transparently
                  </h3>
                  <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
                    Access detailed specs, real condition reports, high-quality photos, and — when available — full inspection reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
                  3
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
                    Connect Directly
                  </h3>
                  <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
                    Message or chat directly with the consultant — ask questions, book test drives, negotiate, all in one place.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
                  4
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
                    Verify if Needed
                  </h3>
                  <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
                    For extra peace of mind, request an AVX-verified inspection — transparent reports visible to you and the consultant.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
                  5
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
                    Transact Independently
                  </h3>
                  <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
                    Finalize the deal directly between buyer and consultant — securely and on your terms.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Optional subtle final message */}
        <div className="mt-20 md:mt-28 text-center">
          <p className="text-xl md:text-2xl font-medium text-[var(--color-third)] max-w-4xl mx-auto">
            Simple. Transparent. Direct. Built for real people buying and selling real vehicles.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowAvxWorks;