"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TEASER_MODELS = [
  {
    id: "animated-gradient",
    name: "Animated Gradient UI",
    emoji: "🌈",
    category: "Web Applications",
    type: "iframe",
    desc: "An interactive, physics-based animated gradient studio. Customize colors, speeds, and flow vectors in real-time.",
    color: "from-blue-500/20 to-teal-500/20",
  },
  {
    id: "rare-natural",
    name: "Rare Natural Elements",
    emoji: "🍃",
    category: "Web Applications",
    type: "iframe",
    desc: "A gorgeous, high-end organic interactive landing page showcasing advanced grid physics and color theory integrations.",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: "element-visualizer",
    name: "Element Visualizer Studio",
    emoji: "📐",
    category: "Web Applications",
    type: "iframe",
    desc: "A powerful developer canvas to experiment with CSS layouts, particle fields, and custom animation configurations dynamically.",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    id: "server",
    name: "Futuristic Server Node",
    emoji: "🗄️",
    category: "Infrastructure",
    desc: "A massive, heavy-duty server rack node with high-fidelity ports, wires, and internal slots. Represents robust serverless infrastructure.",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "laptop",
    name: "Laptop Pro",
    emoji: "💻",
    category: "Hardware",
    desc: "A modern, ultra-slim designer laptop with mechanical key bounds, robust hinge articulation, and sleek trackpad boundaries.",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: "keyboard",
    name: "Mechanical Keyboard",
    emoji: "⌨️",
    category: "Input Devices",
    desc: "A premium custom mechanical keyboard featuring tactile keycaps, retro-futuristic key mappings, and ergonomic angle support.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "mouse",
    name: "Wireless Mouse",
    emoji: "🖱️",
    category: "Input Devices",
    desc: "A streamlined, ergonomic modern wireless mouse engineered for precision, custom gestures, and silent tactile scroll feedback.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "rubik",
    name: "Rubik's Game Cube",
    emoji: "🎲",
    category: "Algorithms",
    desc: "A perfect game-logic Rubik's Cube representing algorithmic problem solving, reinforcement learning models, and code logic.",
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    id: "coffee",
    name: "Iced Latte Cup",
    emoji: "☕",
    category: "Developer Fuel",
    desc: "An organic glass cup of iced latte with realistic coffee layers, ice cubes, and a straw. Represents developer fuel and active focus.",
    color: "from-cyan-500/20 to-sky-500/20",
  },
  {
    id: "clock",
    name: "Vintage Desk Clock",
    emoji: "🕰️",
    category: "Craftsmanship",
    desc: "A stunning retro mechanical gears desk clock, showing intricate gear boundaries and timeless mechanical craftsmanship.",
    color: "from-fuchsia-500/20 to-purple-500/20",
  },
];

export function PlaygroundTeaser() {
  return (
    <section id="playground" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-7 alternate logo-alt border-t border-scheme-border/10">
      <div className="container">
        
        {/* Header Block */}
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-2xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-scheme-accent bg-scheme-accent/15 rounded-full border border-scheme-accent/30">
              Interactive 3D Studio
            </span>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Our 3D Design Playground
            </h2>
            <p className="text-medium text-scheme-text/85">
              Step into an immersive, interactive design playground. Click any card to explore our high-tech custom 3D hardware assets or run fully interactive live web applications in real-time.
            </p>
          </div>
        </div>

        {/* Teaser Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch mb-12 md:mb-16">
          {TEASER_MODELS.map((model) => (
            <a
              key={model.id}
              href={`#/playground?id=${model.id}`}
              className="group flex flex-col justify-between p-6 rounded-card border border-scheme-border/30 bg-neutral-900/40 hover:bg-neutral-900/90 hover:border-scheme-text transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500`} />

              <div>
                {/* Emoji Graphic with circular glow */}
                <div className={`size-16 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center text-4xl mb-5 shadow-inner border border-white/5`}>
                  {model.emoji}
                </div>

                {/* Category Badge */}
                <span className="inline-block px-2.5 py-0.5 text-tiny font-medium text-white/50 bg-white/5 border border-white/10 rounded-md mb-3">
                  {model.category}
                </span>

                {/* Model Title */}
                <h3 className="text-h6 font-bold text-white mb-2 group-hover:text-scheme-accent transition-colors duration-300">
                  {model.name}
                </h3>

                {/* Short Desc */}
                <p className="text-regular text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-6 line-clamp-3">
                  {model.desc}
                </p>
              </div>

              {/* View Link */}
              <div className="flex items-center gap-2 text-sm font-bold text-scheme-accent group-hover:translate-x-1 transition-transform duration-300 mt-auto">
                <span>{model.type === "iframe" ? "Launch Live Web App" : "View Live 3D Model"}</span>
                <span className="text-base">→</span>
              </div>
            </a>
          ))}

          {/* Call To Action Box (Sits as the 8th grid item to balance the 7 models!) */}
          <div className="flex flex-col justify-between p-6 rounded-card border border-dashed border-scheme-border/40 bg-neutral-950/20 text-center items-center justify-center min-h-[300px]">
            <div className="space-y-4">
              <div className="size-14 rounded-full bg-scheme-accent/10 border border-scheme-accent/20 flex items-center justify-center text-2xl mx-auto">
                🚀
              </div>
              <h4 className="text-regular font-bold text-white">
                Launch Full Design Sandbox
              </h4>
              <p className="text-small text-white/50 max-w-[200px] mx-auto">
                Access the full sandbox viewport with category filters and model technical metrics.
              </p>
            </div>
            
            <Button
              asChild
              variant="alternate"
              className="mt-6 w-full text-xs py-2.5 font-bold hover:scale-[1.02]"
            >
              <a href="#/playground">
                Enter 3D Playground
              </a>
            </Button>
          </div>
        </div>

        {/* Large Centered CTA Button */}
        <div className="flex justify-center">
          <Button
            asChild
            variant="alternate"
            className="px-8 py-3.5 text-base font-bold shadow-lg hover:scale-[1.02] flex items-center gap-3"
          >
            <a href="#/playground">
              Launch Full 3D Interactive Sandbox
              <span className="text-xl">➔</span>
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
