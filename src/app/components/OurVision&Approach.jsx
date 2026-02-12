////section 8 and 9
import React from "react";

const VisionAndApproach = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[var(--color-secondary)] text-[var(--color-primary)]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* OUR VISION */}
        <div
          className="
          border border-[var(--color-fourth)]
          rounded-xl p-8
          bg-gradient-to-b from-[#0e0e0e] to-[#141414]
          hover:scale-[1.02] transition-all
        "
        >
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-[var(--color-fourth)]">Vision</span>
          </h2>

          <p className="text-[var(--color-third)] leading-relaxed">
            To build India’s most accountable and performance-driven automotive marketplace —  
            where credibility, not just listings, defines visibility.
          </p>

          <div className="mt-6 h-1 w-20 bg-[var(--color-fourth)] rounded-full"></div>
        </div>

        {/* OUR APPROACH */}
        <div
          className="
          border border-[var(--color-third)]
          rounded-xl p-8
          bg-[#0f0f0f]
          hover:scale-[1.02] transition-all
        "
        >
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-[var(--color-fourth)]">Approach</span>
          </h2>

          <p className="text-[var(--color-third)] leading-relaxed">
            AVX does not replace consultants.  
            It empowers them with visibility, structure, and measurable performance signals —  
            while giving buyers the confidence of verified identity and inspection clarity.
          </p>

          <div className="mt-6 h-1 w-20 bg-[var(--color-fourth)] rounded-full"></div>
        </div>

      </div>

      {/* Soft Closing Line */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-sm text-[var(--color-third)]">
          Built on trust. Backed by transparency. Driven by performance.
        </p>
      </div>

    </section>
  );
};

export default VisionAndApproach;