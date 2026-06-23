"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
  };
  return (
    <section className="z-[999] sticky top-0 w-full h-16 lg:h-20 border-b border-scheme-border bg-scheme-background px-[5%] scheme-7 alternate btn-light">
      <div className="container h-full grid grid-cols-[max-content_1fr_max-content] lg:grid-cols-[1fr_max-content_1fr] items-center">
        
        {/* COLUMN 1: Logo (Left on desktop and mobile) */}
        <div className="flex items-center justify-start h-full">
          <a href="#" className="flex shrink-0 items-center">
            <BrandLogo className="h-9 lg:h-11 w-auto text-scheme-text" />
          </a>
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
              <a
                href="#services"
                onClick={() => { if (isMobile) useActive.toggleMobileMenu() }}
                className="relative block py-3 text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.services', 'Services')}
              </a>
              <a
                href="#/portfolio-page"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { if (isMobile) useActive.toggleMobileMenu() }}
                className="relative block py-3 text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.portfolio', 'Portfolio')}
              </a>
              <a
                href="#/playground"
                onClick={() => { if (isMobile) useActive.toggleMobileMenu() }}
                className="relative block py-3 text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.playground', 'Playground')}
              </a>
              <a
                href="#testimonials"
                onClick={() => { if (isMobile) useActive.toggleMobileMenu() }}
                className="relative block py-3 text-base font-bold text-scheme-text/75 lg:px-4 lg:py-2 transition-colors duration-300 hover:text-scheme-text"
              >
                {t('navbar.testimonials', 'Active Consumers')}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 lg:hidden">
              <button 
                onClick={toggleLanguage}
                className="flex-1 py-2 px-4 rounded-lg border border-scheme-border/50 text-scheme-text font-bold text-sm bg-white-5 hover:bg-white-10 transition-colors"
              >
                {i18n.language === 'en' ? t('navbar.switchToHi', 'Switch to Hindi (HI)') : t('navbar.switchToEn', 'Switch to English (EN)')}
              </button>
            </div>

            {/* Contact Button inside Mobile Drawer (hidden on desktop) */}
            <Button asChild className="mt-4 w-full lg:hidden" title="Contact" size="sm">
              <a href="#/booking">{t('navbar.getStarted', 'Contact')}</a>
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
          
          {/* Desktop Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="hidden md:flex items-center justify-center size-9 rounded-full border border-scheme-border/50 text-scheme-text font-bold text-xs hover:bg-white-10 transition-colors"
            title="Toggle Language"
          >
            {i18n.language === 'en' ? 'HI' : 'EN'}
          </button>

          {/* Contact button (visible on tablet/desktop, hidden on small screens) */}
          <Button
            asChild
            title="Get Started"
            size="sm"
            className="hidden md:flex w-[130px] justify-center px-2 py-2 text-sm font-semibold transition-all hover:scale-[1.02]"
          >
            <a href="#/booking">{t('navbar.getStarted', 'Get Started')}</a>
          </Button>

          {/* Hamburger Menu Toggle on Mobile with gorgeous micro-animations */}
          <button
            className="relative z-[60] flex size-11 flex-col justify-center items-center lg:hidden rounded-lg hover:bg-white-10 transition-colors"
            onClick={useActive.toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-3.5">
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                  useActive.isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  useActive.isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                  useActive.isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

