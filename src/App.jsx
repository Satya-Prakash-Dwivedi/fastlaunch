import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { WhatsAppButton } from './components/whatsapp-button';
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
import { ServicesPage } from './components/services-page';
import { TestimonialsPage } from './components/testimonials-page';
import { FaqPage } from './components/faq-page';
import { BlogListPage } from './components/blog/blog-list-page';
import { BlogPostPage } from './components/blog/blog-post-page';

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
    <Cta31 />
    <Cta32 />
    <Faq4 />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="antialiased min-h-screen flex flex-col">
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
      <WhatsAppButton />
    </div>
  );
}

export default App;
