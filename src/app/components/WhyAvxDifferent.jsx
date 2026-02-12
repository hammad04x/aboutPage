/////3rd  section 
import React from 'react';

const WhyAvxDifferent = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-secondary)] overflow-hidden">
      {/* Background Decor - Subtle blue glow for interest */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-fourth)]/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase italic">
            Not Another <br />
            <span className="text-[var(--color-fourth)] not-italic">Listing Platform</span>
          </h2>
          <p className="text-[var(--color-third)] max-w-2xl mx-auto font-[var(--font-secondary)]">
            We didn't just build a database; we built an ecosystem of trust and verified performance.
          </p>
        </div>

        {/* Differentiator Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
          {/* 01. Verified Consultant Identity */}
          <div className="relative p-10 bg-white/5 border border-[var(--color-third)]/10 rounded-3xl group hover:bg-[var(--color-fourth)]/10 transition-all duration-300">
            <span className="absolute top-8 right-10 text-5xl font-bold opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-fourth)] transition-opacity">01</span>
            <div className="max-w-[85%]">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Verified Consultant Identity</h3>
              <p className="text-[var(--color-third)] leading-relaxed">
                Every consultant profile carries structured business information and performance signals. No anonymous sellers—only verified professionals.
              </p>
            </div>
          </div>

          {/* 02. Inspection Layer */}
          <div className="relative p-10 bg-white/5 border border-[var(--color-third)]/10 rounded-3xl group hover:bg-[var(--color-fourth)]/10 transition-all duration-300">
            <span className="absolute top-8 right-10 text-5xl font-bold opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-fourth)] transition-opacity">02</span>
            <div className="max-w-[85%]">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Inspection Layer</h3>
              <p className="text-[var(--color-third)] leading-relaxed">
                Optional assurance that matters. AVX enables independent inspection visibility and re-verification options to give you peace of mind.
              </p>
            </div>
          </div>

          {/* 03. Performance Transparency */}
          <div className="relative p-10 bg-white/5 border border-[var(--color-third)]/10 rounded-3xl group hover:bg-[var(--color-fourth)]/10 transition-all duration-300">
            <span className="absolute top-8 right-10 text-5xl font-bold opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-fourth)] transition-opacity">03</span>
            <div className="max-w-[85%]">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Performance Transparency</h3>
              <p className="text-[var(--color-third)] leading-relaxed">
                Numbers don't lie. Consultant storefronts display real-time activity, authentic reviews, and actual engagement metrics.
              </p>
            </div>
          </div>

          {/* 04. Structured Search & Discovery */}
          <div className="relative p-10 bg-white/5 border border-[var(--color-third)]/10 rounded-3xl group hover:bg-[var(--color-fourth)]/10 transition-all duration-300">
            <span className="absolute top-8 right-10 text-5xl font-bold opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-fourth)] transition-opacity">04</span>
            <div className="max-w-[85%]">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Structured Search & Discovery</h3>
              <p className="text-[var(--color-third)] leading-relaxed">
                Our algorithm ranks vehicles by relevance and quality signals, ensuring you see the best value first, not just the newest post.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyAvxDifferent;