"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { BrandLogo } from "./brand-logo";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useNavbarState = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "closed";

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    animateMobileMenu,
  };
};

export function Navbar3() {
  const useActive = useNavbarState();
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 991px)");
  const navigate = useNavigate();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ja', name: 'Japanese' },
    { code: 'pl', name: 'Polish' },
    { code: 'fi', name: 'Finnish' },
    { code: 'sv', name: 'Swedish' }
  ];
  const activeLang = languages.find(l => l.code === i18n.language) || languages[0];

  const handleScrollNav = (e, id) => {
    e.preventDefault();
    if (isMobile) useActive.toggleMobileMenu();
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
    }
    navigate('/', { state: { scrollTo: id } });
  };

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setLangMenuOpen(false);
  };
  return (
    <section className="z-[999] sticky top-0 w-full h-16 lg:h-20 border-b border-scheme-border bg-scheme-background px-[5%] scheme-7 alternate btn-light">
      <div className="container h-full grid grid-cols-[max-content_1fr_max-content] lg:grid-cols-[1fr_max-content_1fr] items-center">

        {/* COLUMN 1: Logo (Left on desktop and mobile) */}
        <div className="flex items-center justify-start h-full">
          <Link to="/" className="flex shrink-0 items-center">
            <BrandLogo className="h-9 lg:h-11 w-auto text-scheme-text" />
          </Link>
        </div>

        {/* COLUMN 2: Navigation Links (Centered on desktop, sliding drawer on mobile) */}
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial="closed"
            animate={useActive.animateMobileMenu}
            exit="closed"
            variants={{
              closed: {
                x: isMobile ? "-100%" : "0%",
                opacity: isMobile ? 0 : 1,
                transition: { type: "spring", duration: 0.6, bounce: 0 },
              },
              open: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", duration: 0.4, bounce: 0 },
              },
            }}
            className="absolute top-0 left-0 z-50 flex h-dvh w-full flex-col bg-[var(--color-scheme-background)] px-[5%] pb-6 lg:visible lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
          >
            {/* Logo inside mobile menu drawer */}
            <div className="h-16 flex items-center shrink-0 lg:hidden mb-8 pr-12">
              <BrandLogo className="h-9 w-auto text-scheme-text" />
            </div>

            {/* Links list */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:gap-y-0 lg:gap-x-4 xl:gap-x-6">
              <Link
                to="/services"
                onClick={(e) => handleScrollNav(e, 'services')}
                className="relative block py-3 text-left text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.services', 'Services')}
              </Link>
              <Link
                to="/portfolio-page"
                onClick={() => { if (isMobile) useActive.toggleMobileMenu() }}
                className="relative block py-3 text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.portfolio', 'Portfolio')}
              </Link>
              <Link
                to="/playground"
                onClick={() => { if (isMobile) useActive.toggleMobileMenu() }}
                className="relative block py-3 text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.playground', 'Playground')}
              </Link>
              <Link
                to="/blog"
                onClick={() => { if (isMobile) useActive.toggleMobileMenu() }}
                className="relative block py-3 text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.blogs', 'Blogs')}
              </Link>
              <Link
                to="/testimonials"
                onClick={(e) => handleScrollNav(e, 'testimonials')}
                className="relative block py-3 text-left text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.testimonials', 'Active Consumers')}
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-2 lg:hidden">
              <span className="text-sm font-semibold text-scheme-text/60 px-2 uppercase tracking-wider">{t('navbar.selectLanguage', 'Select Language')}</span>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`py-2 px-3 rounded-lg border text-sm font-bold transition-all ${i18n.language === lang.code
                        ? 'border-scheme-text bg-scheme-text text-scheme-background shadow-md'
                        : 'border-scheme-border/50 text-scheme-text bg-scheme-background hover:bg-white-10'
                      }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Button inside Mobile Drawer (hidden on desktop) */}
            <Button asChild className="mt-4 w-full lg:hidden" title="Contact" size="sm">
              <Link to="/booking">{t('navbar.getStarted', 'Contact')}</Link>
            </Button>
          </motion.div>

          {/* Mobile menu dark background overlay */}
          <AnimatePresence>
            {useActive.isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black lg:hidden"
                onClick={useActive.toggleMobileMenu}
              />
            )}
          </AnimatePresence>
        </div>

        {/* COLUMN 3: Contact & Hamburger Toggle (Right) */}
        <div className="flex items-center justify-end gap-x-4 h-full">

          {/* Desktop Language Custom Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center justify-between gap-2 h-10 px-4 rounded-full border border-scheme-border/50 text-scheme-text font-semibold text-sm hover:bg-white-5 transition-colors bg-scheme-background cursor-pointer shadow-sm outline-none focus:border-scheme-text min-w-[120px]"
            >
              <span>{activeLang.name}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-2 w-44 max-h-80 overflow-y-auto rounded-xl border border-white/10 bg-black shadow-2xl z-50 py-2"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-5 py-2.5 text-sm transition-colors flex items-center justify-between ${i18n.language === lang.code
                          ? 'bg-white/10 text-white font-bold'
                          : 'text-white/80 hover:bg-white/5 hover:text-white font-medium'
                        }`}
                    >
                      {lang.name}
                      {i18n.language === lang.code && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact button (visible on tablet/desktop, hidden on small screens) */}
          <Button
            asChild
            title="Get Started"
            size="sm"
            className="hidden md:flex w-[130px] justify-center px-2 py-2 text-sm font-semibold transition-all hover:scale-[1.02]"
          >
            <Link to="/booking">{t('navbar.getStarted', 'Get Started')}</Link>
          </Button>

          {/* Hamburger Menu Toggle on Mobile with gorgeous micro-animations */}
          <button
            className="relative z-[60] flex size-11 flex-col justify-center items-center lg:hidden rounded-lg hover:bg-white-10 transition-colors"
            onClick={useActive.toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-3.5">
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${useActive.isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${useActive.isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${useActive.isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

