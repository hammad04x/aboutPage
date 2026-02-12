/////section 10th
import React from 'react';

const ComplianceAndTransparency = () => {
  return (
    <section className="py-16 px-6 bg-[var(--color-secondary)]">
      <div className="max-w-4xl mx-auto">
        
        {/* Compact Glass Capsule */}
        <div className="relative group p-[1px] rounded-[30px] overflow-hidden bg-gradient-to-r from-[var(--color-fourth)]/40 via-transparent to-[var(--color-fourth)]/40">
          
          <div className="bg-[#0a0a0a] rounded-[29px] p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* LARGE IMPACT ICON */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Outer Glow for Icon */}
                <div className="absolute inset-0 bg-[var(--color-fourth)] blur-2xl opacity-20"></div>
                <svg 
                  width="80" 
                  height="80" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--color-fourth)" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="relative z-10 opacity-90"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <circle cx="12" cy="12" r="3" fill="var(--color-fourth)" className="opacity-40" />
                  <path d="m9 12 2 2 4-4" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            {/* CONTENT BLOCK - EXACT CONTENT AS REQUESTED */}
            <div className="text-center md:text-left relative z-10">
              <h4 className="text-[var(--color-fourth)] font-black uppercase tracking-[0.5em] text-[12px] mb-4">
                Compliance & Transparency Note
              </h4>
              <p className="text-[var(--color-primary)] text-lg md:text-xl font-[var(--font-secondary)] leading-relaxed">
                AVX is a marketplace platform. Transactions, pricing, and negotiation occur <span className="text-[var(--color-fourth)] font-bold italic">directly</span> between buyers and consultants. AVX does not hold or process payments between parties.
              </p>
              <p className="mt-4 text-[var(--color-fourth)] font-bold uppercase tracking-widest text-sm italic">
                This protects you legally.
              </p>
            </div>

            {/* Subtle "Safe" Badge */}
            <div className="absolute top-4 right-8 hidden md:block">
              <span className="text-[var(--color-fourth)] opacity-[0.07] font-black italic text-5xl select-none">AVX-SECURE</span>
            </div>

          </div>
        </div>

        {/* Minimalist Footer Detail */}
        <div className="mt-6 flex justify-center gap-10">
            <div className="h-[1px] w-20 bg-[var(--color-third)]/30 self-center"></div>
            <span className="text-[8px] uppercase tracking-[0.8em] font-bold text-[var(--color-fourth)]">Legal Independence Verified</span>
            <div className="h-[1px] w-20 bg-[var(--color-third)]/30 self-center"></div>
        </div>

      </div>
    </section>
  );
};

export default ComplianceAndTransparency;