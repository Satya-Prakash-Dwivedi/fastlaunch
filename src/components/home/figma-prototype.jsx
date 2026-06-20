import React from "react";

export function FigmaPrototype() {
  return (
    <section className="px-2 md:px-4 py-8 md:py-12 bg-[#0B0A05]">
      <div className="w-full max-w-[98%] mx-auto">
        <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <iframe 
            src="https://oil-crayon-05581256.figma.site/" 
            title="Figma Prototype"
            className="w-full h-[85vh] md:h-[92vh] border-0 bg-white" 
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
