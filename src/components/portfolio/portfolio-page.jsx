import React from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    name: "Maedric",
    url: "https://maedric.com/",
    description: "A modern, premium experience tailored for high-end digital services.",
    iframeBlocked: true, // Maedric blocks iframe embedding via X-Frame-Options
    videoUrl: "/projects/maedric-hero-real.mp4", // Extracted high-quality hero video
  },
  {
    name: "Igra Studios",
    url: "https://igrastudios.com/",
    description: "Creative digital studio featuring immersive 3D and dynamic web experiences.",
  },
  {
    name: "Neti Academy",
    url: "https://netiacademy.com/",
    description: "An advanced educational platform built for scale, performance, and seamless user experience.",
  },
];

export function PortfolioPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans flex flex-col scheme-7 alternate logo-alt">
      
      {/* HEADER */}
      <header className="sticky top-0 z-[100] w-full h-16 border-b border-white-10 bg-neutral-950/80 backdrop-blur-md px-[5%] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#/" className="flex shrink-0 items-center hover:opacity-85 transition-opacity">
            <BrandLogo className="h-9 lg:h-10 w-auto text-white" />
          </a>
          <span className="hidden sm:inline-block h-6 w-px bg-white-20" />
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-tiny tracking-wider uppercase text-white/50 font-bold">
              {t('portfolio.headerBadge', 'Deployed Projects Portfolio')}
            </span>
          </div>
        </div>
        <div>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="px-4 py-1.5 text-xs font-bold transition-all hover:scale-[1.02]"
          >
            <a href="#/">{t('portfolio.backToHome', '← Back to Homepage')}</a>
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="px-[5%] py-12 md:py-16 text-center border-b border-white-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
          {t('portfolio.title', 'Our Live Projects')}
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          {t('portfolio.description', 'Explore a selection of our deployed platforms, showcasing our commitment to high-performance, secure, and beautiful digital experiences.')}
        </p>
      </section>

      {/* PROJECTS LIST */}
      <main className="flex-grow px-[5%] py-12 md:py-20 space-y-24 md:space-y-32">
        {PROJECTS.map((project, idx) => (
          <section key={idx} className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Project Details (Left side or top) */}
            <div className={`w-full lg:w-1/3 flex flex-col gap-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{project.name}</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  {idx === 0 && t('portfolioProjects.maedric.desc', project.description)}
                  {idx === 1 && t('portfolioProjects.igra.desc', project.description)}
                  {idx === 2 && t('portfolioProjects.neti.desc', project.description)}
                </p>
              </div>
              <div>
                <Button asChild variant="primary" className="gap-2">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {t('portfolio.visitLiveSite', 'Visit Live Site')} <span>↗</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Preview (Right side or bottom) */}
            <div className={`w-full lg:w-2/3 aspect-video bg-neutral-900 rounded-2xl overflow-hidden border border-white-10 shadow-2xl relative group ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="absolute inset-0 bg-neutral-800 animate-pulse -z-10" />
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : project.iframeBlocked ? (
                <img
                  src="/projects/maedric-preview.png"
                  alt={`${project.name} Preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <iframe
                  src={project.url}
                  title={`${project.name} Preview`}
                  className="w-full h-full border-0 object-cover"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              )}
              {/* Optional overlay that appears on hover to encourage clicking the visit button instead of getting stuck scrolling the iframe */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none flex items-center justify-center">
                {project.iframeBlocked && (
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                    {t('portfolio.clickToView', 'Click "Visit Live Site" to view')}
                  </span>
                )}
              </div>
            </div>

          </section>
        ))}
      </main>

    </div>
  );
}
