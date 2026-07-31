import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { WhatsAppButton } from './components/whatsapp-button';
import { Navbar3 } from './components/navbar-03';
import { Header84 } from './components/home/header-84';
import { Layout373 } from './components/home/layout-373';
import { FigmaPrototype } from './components/home/figma-prototype';
import { Layout239 } from './components/home/layout-239';
import { DigitalTransformation } from './components/home/digital-transformation';
import { PlaygroundTeaser } from './components/home/playground-teaser';
import { Testimonial17 } from './components/home/testimonial-17';
import { Stats54 } from './components/home/stats-54';
import { Cta32 } from './components/home/cta-32';
import { Faq4 } from './components/home/faq-04';
import { Footer1 } from './components/footer-01';
import { SEO } from './components/seo';

// Lazy-load non-homepage routes so homepage loads only homepage data & scripts
const PlaygroundPage = lazy(() => import('./components/playground/playground-page').then(m => ({ default: m.PlaygroundPage })));
const PortfolioPage = lazy(() => import('./components/portfolio/portfolio-page').then(m => ({ default: m.PortfolioPage })));
const BookingPage = lazy(() => import('./components/booking-page').then(m => ({ default: m.BookingPage })));
const ServicesPage = lazy(() => import('./components/services-page').then(m => ({ default: m.ServicesPage })));
const TestimonialsPage = lazy(() => import('./components/testimonials-page').then(m => ({ default: m.TestimonialsPage })));
const FaqPage = lazy(() => import('./components/faq-page').then(m => ({ default: m.FaqPage })));
const BlogListPage = lazy(() => import('./components/blog/blog-list-page').then(m => ({ default: m.BlogListPage })));
const BlogPostPage = lazy(() => import('./components/blog/blog-post-page').then(m => ({ default: m.BlogPostPage })));
const PrivacyPolicyPage = lazy(() => import('./components/legal/legal-pages').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./components/legal/legal-pages').then(m => ({ default: m.TermsOfServicePage })));
const CookieSettingsPage = lazy(() => import('./components/legal/legal-pages').then(m => ({ default: m.CookieSettingsPage })));

const Home = () => (
  <>
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
            "https://www.linkedin.com/company/fast-launch-live/",
            "https://www.instagram.com/fast.launch/"
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
    <Header84 />
    <Layout373 />
    <FigmaPrototype />
    <Layout239 />
    <DigitalTransformation />
    <PlaygroundTeaser />
    <Testimonial17 />
    <Stats54 />
    <Cta32 />
    <Faq4 />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/portfolio-page" element={<PortfolioPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={
            <>
              <Navbar3 />
              <main className="flex-grow flex flex-col bg-scheme-background text-scheme-text">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/faq/:slug" element={<FaqPage />} />
                  <Route path="/blog" element={<BlogListPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/freelancer-hire" element={<ServicesPage />} />
                  <Route path="/ai-ml-engineering" element={<ServicesPage />} />
                  <Route path="/web-development" element={<ServicesPage />} />
                  <Route path="/mobile-app-development" element={<ServicesPage />} />
                  <Route path="/devops-cloud" element={<ServicesPage />} />
                  <Route path="/ecommerce" element={<ServicesPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  <Route path="/cookie-settings" element={<CookieSettingsPage />} />
                </Routes>
              </main>
              <Footer1 />
            </>
          } />
        </Routes>
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}

export default App;
