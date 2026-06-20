import React from "react";

export function DigitalTransformation() {
  return (
    <section className="px-[5%] pb-16 md:pb-24 lg:pb-28 pt-0 md:pt-0 scheme-1">
      <div className="container">
        <hr className="w-full border-t-2 border-black/60 mb-12 md:mb-20" />
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 font-bold text-scheme-text/50 tracking-[0.25em] uppercase text-xs md:text-sm">
            Digital Transformation
          </p>
          <h2 className="mb-8 text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.1]">
            Eliminate Outdated Infrastructure.
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl font-light text-scheme-text/70 leading-relaxed max-w-4xl mx-auto">
            Transform your legacy and inactive systems into modern, highly secure, AI-native cloud environments.
          </p>
        </div>
      </div>
    </section>
  );
}
