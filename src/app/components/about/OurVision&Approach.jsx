import React from "react";

const VisionAndApproach = () => {
  const Card = ({ title, highlight, description, isVision }) => (
    <div
      className={`
        group relative overflow-hidden
        border-b-2 border-transparent
        rounded-xl p-8 transition-all duration-500 ease-in-out 
        hover:shadow-[0_10px_40px_-10px_rgba(230,230,230,0.15)]
      `}
    >
      <h2 className="text-3xl font-bold mb-4">
        {title} <span className="text-fourth">{highlight}</span>
      </h2>

      <p className="text-third leading-relaxed relative z-10">
        {description}
      </p>

      {/* The Animated Line: Starts at 0 width and expands on hover */}
      <div className="absolute bottom-0 left-0 h-0.75 w-0 bg-fourth transition-all duration-500 ease-out group-hover:w-full"></div>
      
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute -inset-px bg-fourth opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-10 -z-10"></div>
    </div>
  );

  return (
    <section className="py-10 px-6 md:px-12 bg-secondary text-primary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        <Card 
          isVision={true}
          title="Our" 
          highlight="Vision" 
          description="To build India’s most accountable and performance-driven automotive marketplace — where credibility, not just listings, defines visibility."
        />

        <Card 
          isVision={false}
          title="Our" 
          highlight="Approach" 
          description="AVX does not replace consultants. It empowers them with visibility, structure, and measurable performance signals — while giving buyers the confidence of verified identity and inspection clarity."
        />

      </div>

      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-sm text-third opacity-60 hover:opacity-100 transition-opacity">
          Built on trust. Backed by transparency. Driven by performance.
        </p>
      </div>
    </section>
  );
};

export default VisionAndApproach;