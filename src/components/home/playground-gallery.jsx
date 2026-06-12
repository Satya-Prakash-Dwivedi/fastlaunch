"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const MODELS = [
  {
    id: "server",
    name: "Futuristic Server Node",
    emoji: "🗄️",
    path: "/assets/playground/Server.glb",
    desc: "A massive, heavy-duty server rack node with high-fidelity ports, wires, and internal slots. Represents robust serverless infrastructure.",
  },
  {
    id: "laptop",
    name: "Laptop Pro",
    emoji: "💻",
    path: "/assets/playground/Laptop.glb",
    desc: "A modern, ultra-slim designer laptop with mechanical key bounds, robust hinge articulation, and sleek trackpad boundaries.",
  },
  {
    id: "keyboard",
    name: "Mechanical Keyboard",
    emoji: "⌨️",
    path: "/assets/playground/Keyboard.glb",
    desc: "A premium custom mechanical keyboard featuring tactile keycaps, retro-futuristic key mappings, and ergonomic angle support.",
  },
  {
    id: "mouse",
    name: "Wireless Mouse",
    emoji: "🖱️",
    path: "/assets/playground/Mouse.glb",
    desc: "A streamlined, ergonomic modern wireless mouse engineered for precision, custom gestures, and silent tactile scroll feedback.",
  },
  {
    id: "rubik",
    name: "Rubik's Game Cube",
    emoji: "🎲",
    path: "/assets/playground/RubikCube.glb",
    desc: "A perfect game-logic Rubik's Cube representing algorithmic problem solving, reinforcement learning models, and code logic.",
  },
  {
    id: "coffee",
    name: "Iced Latte Cup",
    emoji: "☕",
    path: "/assets/playground/IcedCoffee.glb",
    desc: "An organic glass cup of iced latte with realistic coffee layers, ice cubes, and a straw. Represents developer fuel and active focus.",
  },
  {
    id: "clock",
    name: "Vintage Desk Clock",
    emoji: "🕰️",
    path: "/assets/playground/VintageClock.glb",
    desc: "A stunning retro mechanical gears desk clock, showing intricate gear boundaries and timeless mechanical craftsmanship.",
  },
];

export function PlaygroundGallery() {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);

  return (
    <section id="playground" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-7 alternate logo-alt">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Interactive 3D</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Our 3D Design Playground
            </h2>
            <p className="text-medium text-scheme-text/80">
              Drag to rotate, pinch to zoom, and explore our custom 3D hardware & workspace design assets in real-time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr] w-full items-stretch">
          
          {/* Left Panel: Big 3D interactive viewer */}
          <div className="flex flex-col">
            <div className="aspect-[4/3] w-full rounded-image overflow-hidden shadow-2xl bg-black border border-scheme-border/20 flex items-center justify-center transition-all duration-300 relative">
              {/* Dynamic 3D model-viewer */}
              <model-viewer
                key={selectedModel.id}
                src={selectedModel.path}
                camera-controls
                auto-rotate
                disable-zoom={false}
                shadow-intensity="2"
                shadow-softness="0.5"
                exposure="1.2"
                tone-mapping="neutral"
                alt={selectedModel.name}
                style={{ width: "100%", height: "100%", outline: "none" }}
              />
              
              {/* Overlay active info */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-card bg-neutral-950/80 border border-white/10 backdrop-blur-md select-none pointer-events-none">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">{selectedModel.emoji}</span>
                  <h4 className="text-h6 font-bold text-white leading-none">{selectedModel.name}</h4>
                </div>
                <p className="text-tiny text-white/60 leading-normal">{selectedModel.desc}</p>
              </div>
            </div>
          </div>

          {/* Right Panel: Scrollable Grid Selector */}
          <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-scheme-text/40 mb-2">Select Asset to Render</h4>
            <div className="flex flex-col gap-3">
              {MODELS.map((model) => {
                const isActive = selectedModel.id === model.id;
                return (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`flex items-center gap-4 p-4 text-left rounded-card border transition-all duration-300 ${
                      isActive
                        ? "bg-scheme-text/10 border-scheme-text text-scheme-text shadow-md scale-[1.01]"
                        : "bg-scheme-text/0 border-scheme-border/40 text-scheme-text/60 hover:bg-scheme-text/5 hover:border-scheme-border/80 hover:text-scheme-text"
                    }`}
                  >
                    <span className="text-3xl flex-shrink-0">{model.emoji}</span>
                    <div className="flex-grow min-w-0">
                      <h5 className="font-bold text-regular truncate leading-tight mb-1">{model.name}</h5>
                      <p className="text-tiny text-scheme-text/40 truncate leading-none">{model.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
