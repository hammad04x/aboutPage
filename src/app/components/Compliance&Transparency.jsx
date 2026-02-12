import React from 'react';

const ComplianceAndTransparency = () => {
  return (
    <section className="py-24 px-6 bg-[#000000] flex justify-center items-center">
      <div className="relative max-w-4xl w-full">
        
        {/* Decorative Corner Accents */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[var(--color-fourth)] opacity-50"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[var(--color-fourth)] opacity-50"></div>

        {/* Main Content Container */}
        <div className="bg-[#0a0a0a] border border-white/10 p-10 md:p-16 relative overflow-hidden">
          
          {/* Subtle Scanline Animation Effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[var(--color-fourth)]/5 to-transparent h-20 w-full -translate-y-full animate-[scan_4s_linear_infinite]"></div>

          <div className="relative z-10">
            {/* Header with Serial Style */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-white/5 pb-6">
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-fourth)] font-mono text-sm tracking-tighter font-bold">10 //</span>
                <h2 className="text-white text-xs uppercase tracking-[0.5em] font-medium opacity-70">
                  Compliance & Transparency
                </h2>
              </div>
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                Status: Verified Secure
              </div>
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8">
                <p className="text-white/80 text-lg leading-relaxed font-light">
                  AVX operates as a <span className="text-white font-normal">marketplace platform</span>. 
                  All transactions, pricing, and negotiations occur 
                  <span className="text-[var(--color-fourth)] italic"> directly </span> 
                  between buyers and consultants.
                </p>
                <p className="mt-4 text-white/50 text-sm leading-relaxed">
                  AVX does not hold, process, or escrow payments between parties. 
                  Full autonomy remains with the users.
                </p>
              </div>

              {/* The "Shield" Callout */}
              <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center h-full">
                <div className="bg-[var(--color-fourth)]/5 border border-[var(--color-fourth)]/20 px-4 py-6 text-center w-full md:w-auto">
                  <p className="text-[var(--color-fourth)] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                    Legal Protection
                  </p>
                  <p className="text-white text-xs font-semibold uppercase italic">
                    This protects you legally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for the scanline animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(500%); }
          }
        `}} />
      </div>
    </section>
  );
};

export default ComplianceAndTransparency;