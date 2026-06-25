"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/seo";

const MODELS = [
  {
    id: "animated-gradient",
    name: "Animated Gradient UI",
    emoji: "🌈",
    category: "Web Applications",
    path: "https://animated-gradient-ui.vercel.app/",
    type: "iframe",
    desc: "An interactive, physics-based animated gradient studio. Customize colors, speeds, and flow vectors in real-time.",
    size: "Live URL",
    vertices: "WebGL Canvas",
    complexity: "Fluid Dynamics",
    scale: "Responsive Full",
    materials: "GLSL / Shader Math",
    color: "from-blue-500/20 to-teal-500/20",
    glowColor: "rgba(13, 148, 136, 0.3)",
    notes: "A stunning canvas demo running fluid mechanics equations in WebGL. Drag to interact with physics vectors, change colors, and export styling attributes directly.",
  },
  {
    id: "rare-natural",
    name: "Rare Natural Elements",
    emoji: "🍃",
    category: "Web Applications",
    path: "https://rare-natural.vercel.app/",
    type: "iframe",
    desc: "A gorgeous, high-end organic interactive landing page showcasing advanced grid physics and color theory integrations.",
    size: "Live URL",
    vertices: "HTML DOM Nodes",
    complexity: "Parallax Engine",
    scale: "Symmetric Design",
    materials: "Framer Motion / CSS",
    color: "from-emerald-500/20 to-green-500/20",
    glowColor: "rgba(16, 185, 129, 0.3)",
    notes: "Implements organic landing page patterns combining SVG path drawing, smooth parallax boundaries, and green-themed color palettes to represent eco-friendly technology solutions.",
  },
  {
    id: "element-visualizer",
    name: "Element Visualizer Studio",
    emoji: "📐",
    category: "Web Applications",
    path: "https://element-visualizer-demo.vercel.app/",
    type: "iframe",
    desc: "A powerful developer canvas to experiment with CSS layouts, particle fields, and custom animation configurations dynamically.",
    size: "Live URL",
    vertices: "WebGL / ThreeJS",
    complexity: "Particle Solver",
    scale: "Variable Scale",
    materials: "React Three Fiber",
    color: "from-purple-500/20 to-indigo-500/20",
    glowColor: "rgba(124, 58, 237, 0.3)",
    notes: "A complete developer utility sandbox designed to visualize DOM elements, node graphs, and 3D coordinate grids in real-time. Features adjustable sliders for structural metrics.",
  },
  {
    id: "server",
    name: "Futuristic Server Node",
    emoji: "🗄️",
    category: "Infrastructure",
    path: "/assets/playground/Server.glb",
    desc: "A massive, heavy-duty server rack node with high-fidelity ports, wires, and internal slots. Represents robust serverless infrastructure.",
    size: "4.14 MB",
    vertices: "84,520 Verts",
    complexity: "High Poly (Complex)",
    scale: "19\" Rack Standard",
    materials: "PBR Metallic / Roughness",
    color: "from-blue-500/20 to-purple-500/20",
    glowColor: "rgba(59, 130, 246, 0.3)",
    notes: "Features high-fidelity physical wire leads, active port terminals, and heat sink vents. Designed to visually represent high-availability DevOps & auto-scaling serverless infrastructure.",
  },
  {
    id: "laptop",
    name: "Laptop Pro",
    emoji: "💻",
    category: "Hardware",
    path: "/assets/playground/Laptop.glb",
    desc: "A modern, ultra-slim designer laptop with mechanical key bounds, robust hinge articulation, and sleek trackpad boundaries.",
    size: "1.32 MB",
    vertices: "45,310 Verts",
    complexity: "Medium-High Poly",
    scale: "32.6cm x 22.9cm",
    materials: "PBR Brushed Aluminum",
    color: "from-pink-500/20 to-rose-500/20",
    glowColor: "rgba(244, 63, 94, 0.3)",
    notes: "Engineered with fully articulated mechanical display hinges, standard mechanical key cap boundaries, and precision glass trackpad bevels. Represents native cross-platform application design.",
  },
  {
    id: "keyboard",
    name: "Mechanical Keyboard",
    emoji: "⌨️",
    category: "Input Devices",
    path: "/assets/playground/Keyboard.glb",
    desc: "A premium custom mechanical keyboard featuring tactile keycaps, retro-futuristic key mappings, and ergonomic angle support.",
    size: "622 KB",
    vertices: "32,180 Verts",
    complexity: "Medium Poly",
    scale: "36.2cm x 14.1cm",
    materials: "Tactile Matte PBT",
    color: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(16, 185, 129, 0.3)",
    notes: "A modern, tenkeyless custom keyboard layout with individually modeled keys, custom escape/enter color accents, and ergonomic typing angle stands. Represents high-velocity engineering workflows.",
  },
  {
    id: "mouse",
    name: "Wireless Mouse",
    emoji: "🖱️",
    category: "Input Devices",
    path: "/assets/playground/Mouse.glb",
    desc: "A streamlined, ergonomic modern wireless mouse engineered for precision, custom gestures, and silent tactile scroll feedback.",
    size: "65 KB",
    vertices: "8,400 Verts",
    complexity: "Low-Medium Poly",
    scale: "11.8cm x 6.4cm",
    materials: "Satin Polycarbonate",
    color: "from-amber-500/20 to-orange-500/20",
    glowColor: "rgba(245, 158, 11, 0.3)",
    notes: "A sleek, ultra-ergonomic wireless pointer showing streamlined palm arcs and silent scroll wheel boundaries. Designed for high precision, speed, and continuous daily developer comfort.",
  },
  {
    id: "rubik",
    name: "Rubik's Game Cube",
    emoji: "🎲",
    category: "Algorithms",
    path: "/assets/playground/RubikCube.glb",
    desc: "A perfect game-logic Rubik's Cube representing algorithmic problem solving, reinforcement learning models, and code logic.",
    size: "25 KB",
    vertices: "3,120 Verts",
    complexity: "Low Poly (Optimized)",
    scale: "5.7cm x 5.7cm",
    materials: "Glossy Polymer",
    color: "from-violet-500/20 to-indigo-500/20",
    glowColor: "rgba(139, 92, 246, 0.3)",
    notes: "A fully symmetric game-state Rubik's Cube. Represents complex logic structures, reinforcement learning models, and algorithmic problem-solving capabilities of our software systems.",
  },
  {
    id: "coffee",
    name: "Iced Latte Cup",
    emoji: "☕",
    category: "Developer Fuel",
    path: "/assets/playground/IcedCoffee.glb",
    desc: "An organic glass cup of iced latte with realistic coffee layers, ice cubes, and a straw. Represents developer fuel and active focus.",
    size: "298 KB",
    vertices: "12,850 Verts",
    complexity: "Medium Poly",
    scale: "15.0cm Height",
    materials: "Frosted Glass & Fluids",
    color: "from-cyan-500/20 to-sky-500/20",
    glowColor: "rgba(6, 182, 212, 0.3)",
    notes: "Features physical light-refraction glass parameters, multi-level espresso milk gradients, and custom ice-cube placement logic. Represents developer focus, energy, and late-night launches.",
  },
  {
    id: "clock",
    name: "Vintage Desk Clock",
    emoji: "🕰️",
    category: "Craftsmanship",
    path: "/assets/playground/VintageClock.glb",
    desc: "A stunning retro mechanical gears desk clock, showing intricate gear boundaries and timeless mechanical craftsmanship.",
    size: "368 KB",
    vertices: "24,620 Verts",
    complexity: "Medium-High Poly",
    scale: "12.5cm Diameter",
    materials: "Polished Brass / Iron",
    color: "from-fuchsia-500/20 to-purple-500/20",
    glowColor: "rgba(217, 70, 239, 0.3)",
    notes: "Features fine mechanical interlocking gears, roman numeral typography, and dual support arches. Represents timeless software craftsmanship, long-term support reliability, and robust uptime.",
  },
];

const CATEGORIES = ["All", "Web Applications", "Infrastructure", "Hardware", "Input Devices", "Algorithms", "Developer Fuel", "Craftsmanship"];

export function PlaygroundPage() {
  const { t } = useTranslation();

  const getModelFromHash = () => {
    const hash = window.location.hash;
    const match = hash.match(/\?id=([^&]+)/);
    const id = match ? match[1] : null;
    return MODELS.find((m) => m.id === id) || MODELS[0];
  };

  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Sync state on hash change
  useEffect(() => {
    // Initial read
    const model = getModelFromHash();
    setSelectedModel(model);

    const handleHashChange = () => {
      setIsLoading(true);
      const newModel = getModelFromHash();
      setSelectedModel(newModel);
      setTimeout(() => setIsLoading(false), 300);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const selectModel = (model) => {
    window.location.hash = `#/playground?id=${model.id}`;
  };

  // Filtered models list
  const filteredModels = useMemo(() => {
    return MODELS.filter((model) => {
      const matchesCategory = activeCategory === "All" || model.category === activeCategory;
      const matchesSearch =
        t(`teaserModels.${model.id}.name`, model.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(`teaserModels.${model.id}.desc`, model.desc).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(`teaserModels.${model.id}.category`, model.category).toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, t]);

  return (
    <div className="min-h-screen bg-neutral-980 text-white font-sans flex flex-col scheme-7 alternate logo-alt">
      <SEO 
        title={`${t('playgroundPage.headerBadge', '3D Sandbox')} | FastLaunch`}
        description="Interact with our premium 3D assets and web applications in the FastLaunch playground."
        schemas={[{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "FastLaunch Playground",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web"
        }]}
      />
      {/* 3D STUDIO TOPBAR */}
      <header className="sticky top-0 z-[100] w-full h-16 border-b border-white-10 bg-neutral-950/80 backdrop-blur-md px-[5%] flex items-center justify-between">
        
        {/* Brand Logo & Back link */}
        <div className="flex items-center gap-6">
          <a href="#/" className="flex shrink-0 items-center hover:opacity-85 transition-opacity">
            <BrandLogo className="h-9 lg:h-10 w-auto text-white" />
          </a>
          <span className="hidden sm:inline-block h-6 w-px bg-white-20" />
          <div className="hidden sm:flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-tiny tracking-wider uppercase text-white/50 font-bold">
              {t('playgroundPage.headerBadge', '3D Design Sandbox Studio')}
            </span>
          </div>
        </div>

        {/* Dynamic Model Counter Badge */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block px-3 py-1 bg-white-5 border border-white-10 rounded-full text-xs font-semibold text-white/70 whitespace-nowrap">
            {MODELS.length} {t('playgroundPage.premiumAssets', 'Premium Assets')}
          </div>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="px-4 py-1.5 text-xs font-bold transition-all hover:scale-[1.02] flex items-center gap-2"
          >
            <a href="#/">
              <span>←</span> {t('playgroundPage.backToHome', 'Back to Homepage')}
            </a>
          </Button>
        </div>
      </header>

      {/* CORE 3D PLAYGROUND LAYOUT */}
      <main className="flex-grow flex flex-col lg:grid lg:grid-cols-[1.6fr_1fr] items-stretch gap-0 overflow-hidden">
        
        {/* LEFT VIEWPORT: The Immersive 3D Space */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white-10 relative bg-neutral-950 min-h-[50vh] lg:min-h-0 select-none">
          
          {/* Subtle technological matrix grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ 
                 backgroundImage: `radial-gradient(var(--color-scheme-text) 1px, transparent 1px)`, 
                 backgroundSize: '24px 24px' 
               }} 
          />

          {/* Interactive model rendering slot */}
          <div className="flex-grow flex items-center justify-center relative w-full h-full p-4 lg:p-8">
            
            {isLoading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950/70 backdrop-blur-sm z-30 transition-all duration-300">
                <div className="size-12 border-2 border-scheme-accent border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-sm font-semibold tracking-wide text-white/70">{t('playgroundPage.loading', 'Loading 3D asset data...')}</p>
              </div>
            ) : null}

            <div className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/3] max-h-[70vh] lg:max-h-none max-w-4xl mx-auto rounded-2xl bg-black border border-white-10 overflow-hidden relative shadow-2xl flex items-center justify-center transition-all duration-500"
                 style={{ boxShadow: `0 20px 50px -12px ${selectedModel.glowColor}` }}>
              
              {selectedModel.type === "iframe" ? (
                <iframe
                  key={selectedModel.id}
                  src={selectedModel.path}
                  className="w-full h-full border-0 bg-neutral-950"
                  title={selectedModel.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              ) : (
                <model-viewer
                  key={selectedModel.id}
                  src={selectedModel.path}
                  camera-controls
                  auto-rotate
                  disable-zoom={false}
                  shadow-intensity="2.2"
                  shadow-softness="0.6"
                  exposure="1.2"
                  tone-mapping="neutral"
                  alt={selectedModel.name}
                  style={{ width: "100%", height: "100%", outline: "none" }}
                />
              )}

              {/* Viewport UI Overlay: Active Model Floating Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-neutral-950/80 border border-white-10 backdrop-blur-md flex items-center gap-3">
                <div className="text-3xl size-12 rounded-lg bg-white-5 border border-white-10 flex items-center justify-center">
                  {selectedModel.emoji}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white leading-none mb-1">{t(`teaserModels.${selectedModel.id}.name`, selectedModel.name)}</h2>
                  <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">
                    {t(`teaserModels.${selectedModel.id}.category`, selectedModel.category)} // {selectedModel.type === "iframe" ? t('playgroundPage.interactiveFrame', "Interactive Frame") : t('playgroundPage.activeNode', "Active Node")}
                  </span>
                </div>
              </div>

              {/* Viewport UI Overlay: Interactive Control Hints */}
              <div className="hidden sm:flex absolute top-4 right-4 p-2.5 rounded-xl bg-neutral-950/80 border border-white-10 backdrop-blur-md flex-col gap-1 text-[10px] text-white/40 font-medium">
                {selectedModel.type === "iframe" ? (
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> {t('playgroundPage.liveWebApp', 'Live Web App Active')}
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-white-10 text-white/70 font-semibold font-mono">{t('playgroundPage.drag', 'Drag')}</span> {t('playgroundPage.rotateCamera', 'Rotate Camera')}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-white-10 text-white/70 font-semibold font-mono">{t('playgroundPage.pinch', 'Pinch')}</span> {t('playgroundPage.zoomAsset', 'Zoom Asset')}
                    </div>
                  </>
                )}
              </div>

              {/* Viewport UI Overlay: Interactive Technical Specs Floating Panel */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/95 border border-white-10 backdrop-blur-md">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center items-center lg:divide-x divide-white-10">
                  
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider mb-1">
                      {selectedModel.type === "iframe" ? t('playgroundPage.distribution', "Distribution") : t('playgroundPage.fileSize', "File Size")}
                    </span>
                    <span className="text-xs font-bold text-white">{selectedModel.size}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider mb-1">
                      {selectedModel.type === "iframe" ? t('playgroundPage.structure', "Structure") : t('playgroundPage.polygonCount', "Polygon Count")}
                    </span>
                    <span className="text-xs font-bold text-white font-mono">{selectedModel.vertices}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider mb-1">
                      {t('playgroundPage.complexity', 'Complexity')}
                    </span>
                    <span className="text-xs font-bold text-white">{selectedModel.complexity}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider mb-1">
                      {t('playgroundPage.texturingMap', 'Texturing Map')}
                    </span>
                    <span className="text-xs font-bold text-white font-mono">{selectedModel.materials}</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VIEWPORT: Browser List & Technical Spec details */}
        <div className="bg-neutral-980 flex flex-col max-h-none lg:max-h-[calc(100vh-64px)] overflow-y-auto pr-0 custom-scrollbar">
          
          {/* Section: Search and Category Filtering */}
          <div className="p-6 border-b border-white-10 sticky top-0 bg-neutral-980/95 backdrop-blur-sm z-20 space-y-4">
            
            {/* Search inputs */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('playgroundPage.searchModels', 'Search models...')}
                className="w-full h-11 bg-neutral-950 border border-white-15 rounded-xl px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-scheme-accent transition-all font-medium"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3 text-sm text-white/40 hover:text-white font-bold"
                >
                  ✕
                </button>
              ) : null}
            </div>

            {/* Category Filter Pills scrollbar */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-3 py-1.5 text-xs font-bold rounded-lg border transition-all duration-200 ${
                      isActive
                        ? "bg-white text-neutral-darkest border-white shadow-sm font-semibold"
                        : "bg-transparent border-white-15 text-white/60 hover:text-white hover:border-white-30"
                    }`}
                  >
                    {cat === 'All' ? t('playgroundPage.all', 'All') : t(`teaserModels.${MODELS.find(m => m.category === cat)?.id || 'unknown'}.category`, cat)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: Assets Browser List */}
          <div className="p-6 border-b border-white-10 space-y-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-white/40">
              {t('playgroundPage.selectAsset', 'Select 3D Hardware Asset')} ({filteredModels.length})
            </h3>
            
            {filteredModels.length === 0 ? (
              <div className="p-8 text-center border border-dashed border-white-10 rounded-xl bg-white-5 text-white/40">
                {t('playgroundPage.noMatch', 'No matching models found in this category.')}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {filteredModels.map((model) => {
                  const isActive = selectedModel.id === model.id;
                  return (
                    <button
                      key={model.id}
                      onClick={() => selectModel(model)}
                      className={`flex items-center gap-4 p-4 text-left rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                        isActive
                          ? "bg-white-10 border-white text-white shadow-md scale-[1.01]"
                          : "bg-transparent border-white-10 text-white/65 hover:bg-white-5 hover:border-white-20 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-scheme-accent" />
                      )}
                      
                      <span className={`text-3xl flex-shrink-0 size-12 rounded-lg bg-black flex items-center justify-center transition-all ${isActive ? 'scale-105 shadow border border-white-15' : 'opacity-80'}`}>
                        {model.emoji}
                      </span>
                      
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h5 className="font-bold text-sm truncate leading-tight">
                            {t(`teaserModels.${model.id}.name`, model.name)}
                          </h5>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white-5 border border-white-10 text-white/50">
                            {model.size}
                          </span>
                        </div>
                        <p className="text-xs text-white/40 truncate leading-none">
                          {t(`teaserModels.${model.id}.desc`, model.desc)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section: Technical specifications deep-dive card */}
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">
                {t('playgroundPage.techSpecs', 'Technical Specifications')}
              </h3>
              
              <Card className="border border-white-15 bg-neutral-950 p-6 space-y-4">
                
                <div className="flex justify-between items-center pb-3 border-b border-white-5">
                  <span className="text-xs text-white/50 font-medium">{t('playgroundPage.scaleBounds', 'Standard Scale Bounds')}</span>
                  <span className="text-xs font-bold text-white font-mono">{selectedModel.scale}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white-5">
                  <span className="text-xs text-white/50 font-medium">{t('playgroundPage.materialMappings', 'Material Mappings')}</span>
                  <span className="text-xs font-bold text-white font-mono">{selectedModel.materials}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white-5">
                  <span className="text-xs text-white/50 font-medium">
                    {selectedModel.type === "iframe" ? t('playgroundPage.iframeSandboxMode', "Iframe Sandbox Mode") : t('playgroundPage.autoRotation', "Auto-Rotation Enabled")}
                  </span>
                  <span className={`text-xs font-bold font-mono flex items-center gap-1.5 ${selectedModel.type === "iframe" ? "text-amber-500" : "text-emerald-500"}`}>
                    <span className={`size-1.5 rounded-full ${selectedModel.type === "iframe" ? "bg-amber-500" : "bg-emerald-500"}`} />
                    {selectedModel.type === "iframe" ? t('playgroundPage.interactiveSandbox', "Interactive Sandbox") : t('playgroundPage.yes', "Yes")}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs text-white/50 font-medium block">{t('playgroundPage.designerNotes', 'Detailed Designer Notes')}</span>
                  <p className="text-xs text-white/70 leading-relaxed bg-white-5 p-3 rounded-lg border border-white-10">
                    {selectedModel.notes}
                  </p>
                </div>
              </Card>
            </div>
            
            {/* Share Link box */}
            <div className="p-4 rounded-xl border border-scheme-accent/20 bg-scheme-accent/5 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold text-white mb-0.5">{t('playgroundPage.shareView', 'Share this asset view')}</h4>
                <p className="text-[10px] text-white/50">{t('playgroundPage.directLink', 'Direct link pre-selects this exact model automatically.')}</p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const url = `${window.location.origin}${window.location.pathname}#/playground?id=${selectedModel.id}`;
                  navigator.clipboard.writeText(url);
                  alert(`${t('playgroundPage.copied', 'Direct link copied to clipboard:')} ${url}`);
                }}
                className="text-[10px] font-bold px-3 py-1 text-white border border-white-20 hover:bg-white-10"
              >
                {t('playgroundPage.copyLink', 'Copy Link')}
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
