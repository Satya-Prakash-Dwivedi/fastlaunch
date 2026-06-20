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

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isPlaygroundPage = route.startsWith('#/playground');
  const isPortfolioPage = route.startsWith('#/portfolio-page');

  useEffect(() => {
    if (isPlaygroundPage || isPortfolioPage) {
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
  }, [route, isPlaygroundPage, isPortfolioPage]);

  if (isPlaygroundPage) {
    return <PlaygroundPage />;
  }

  if (isPortfolioPage) {
    return <PortfolioPage />;
  }

  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Navbar3 />
      <main className="flex-grow">
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
      </main>
      <Footer1 />
    </div>
  );
}

export default App;
