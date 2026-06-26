import React, { useState, useEffect } from 'react';
import { Navbar3 } from './components/navbar-03';
import { Header84 } from './components/home/header-84';
import { Layout373 } from './components/home/layout-373';
import { FigmaPrototype } from './components/home/figma-prototype';
import { Layout239 } from './components/home/layout-239';
import { DigitalTransformation } from './components/home/digital-transformation';
import { PlaygroundTeaser } from './components/home/playground-teaser';
import { PlaygroundPage } from './components/playground/playground-page';
import { PortfolioPage } from './components/portfolio/portfolio-page';
import { Testimonial17 } from './components/home/testimonial-17';
import { Stats54 } from './components/home/stats-54';
import { Cta31 } from './components/home/cta-31';
import { Cta32 } from './components/home/cta-32';
import { Faq4 } from './components/home/faq-04';
import { Footer1 } from './components/footer-01';
import { PrivacyPolicyPage, TermsOfServicePage, CookieSettingsPage } from './components/legal/legal-pages';
import { BookingPage } from './components/booking-page';
import { SEO } from './components/seo';

function App() {
  const getInitialRoute = () => {
    const hash = window.location.hash;
    if (hash && hash !== '#/') return hash;
    
    // SEO Fallback: if search engines visit the raw pathname (e.g. /playground) from the sitemap
    const path = window.location.pathname;
    if (path === '/playground') return '#/playground';
    if (path === '/portfolio-page') return '#/portfolio-page';
    if (path === '/booking') return '#/booking';
    if (path === '/privacy-policy') return '#/privacy-policy';
    if (path === '/terms-of-service') return '#/terms-of-service';
    if (path === '/cookie-settings') return '#/cookie-settings';
    if (['/services', '/freelancer-hire', '/ai-ml-engineering', '/web-development', '/mobile-app-development', '/devops-cloud'].includes(path)) return '#services';
    
    return '#/';
  };

  const [route, setRoute] = useState(getInitialRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isPlaygroundPage = route.startsWith('#/playground');
  const isPortfolioPage = route.startsWith('#/portfolio-page');
  const isPrivacyPage = route.startsWith('#/privacy-policy');
  const isTermsPage = route.startsWith('#/terms-of-service');
  const isCookiePage = route.startsWith('#/cookie-settings');
  const isBookingPage = route.startsWith('#/booking');

  useEffect(() => {
    if (isPlaygroundPage || isPortfolioPage || isPrivacyPage || isTermsPage || isCookiePage || isBookingPage) {
      window.scrollTo(0, 0);
    } else {
      const hash = window.location.hash;
      if (hash && hash !== '#/' && hash !== '#') {
        const id = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [route, isPlaygroundPage, isPortfolioPage, isPrivacyPage, isTermsPage, isCookiePage]);

  if (isPlaygroundPage) {
    return <PlaygroundPage />;
  }

  if (isPortfolioPage) {
    return <PortfolioPage />;
  }

  if (isBookingPage) {
    return <BookingPage />;
  }

  let content;
  if (isPrivacyPage) {
    content = <PrivacyPolicyPage />;
  } else if (isTermsPage) {
    content = <TermsOfServicePage />;
  } else if (isCookiePage) {
    content = <CookieSettingsPage />;
  } else {
    content = (
      <>
        <Header84 />
        <Layout373 />
        <FigmaPrototype />
        <Layout239 />
        <DigitalTransformation />
        <PlaygroundTeaser />
        <Testimonial17 />
        <Stats54 />
        <Cta31 />
        <Cta32 />
        <Faq4 />
      </>
    );
  }

  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Navbar3 />
      <main className="flex-grow flex flex-col bg-scheme-background text-scheme-text">
        {!isPrivacyPage && !isTermsPage && !isCookiePage && !isPlaygroundPage && !isPortfolioPage && !isBookingPage && (
          <SEO 
            title="FastLaunch - AI/ML, DevOps & Web Solutions"
            description="Deploy intelligent systems in days. AI/ML, DevOps, mobile apps, and serverless solutions."
            schemas={[
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "FastLaunch",
                "url": "https://fastlaunch.live",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://fastlaunch.live/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "FastLaunch",
                "alternateName": "FastLaunch Freelance AI & Web Development Agency",
                "url": "https://fastlaunch.live",
                "description": "Elite technology agency and top freelancer collective providing hyper-accelerated delivery of AI/ML systems, custom LLMs, RAG, full-stack web applications (React, Next.js, Vite), native mobile apps, and DevOps serverless cloud infrastructure.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "E-6 Arera Colony",
                  "addressLocality": "Bhopal",
                  "addressRegion": "Madhya Pradesh",
                  "postalCode": "462016",
                  "addressCountry": "IN"
                },
                "email": "contact@fastlaunch.live",
                "priceRange": "$$$",
                "sameAs": [
                  "https://x.com/fastlaunchlive",
                  "https://www.linkedin.com/company/fast-launch-live/"
                ],
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Freelance & Agency Technology Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Freelance AI/ML & LLM Engineering"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Freelance Full-Stack Web Development (React, Next.js, Vite)"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Freelance Mobile Development (React Native)"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Freelance DevOps & Cloud Infrastructure"
                      }
                    }
                  ]
                }
              }
            ]}
          />
        )}
        {content}
      </main>
      <Footer1 />
    </div>
  );
}

export default App;
