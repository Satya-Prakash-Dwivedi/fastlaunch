"use client";

import { Button } from "@/components/ui/button";
import {
  LinkedinLogo,
  XLogo,
} from "relume-icons";
import { BrandLogo } from "./brand-logo";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Footer1() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleScrollNav = (e, id) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: id } });
  };
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-5 alternate">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col justify-start">
            <Link to="/" className="flex items-center justify-start w-max">
              <BrandLogo className="h-9 lg:h-11 w-auto text-scheme-text" />
            </Link>
            <div className="mt-8">
              <p className="mb-2 font-semibold text-scheme-text">{t('footer.contactUs', 'Contact us')}</p>
              <a href="mailto:contact@fastlaunch.live" className="block text-small text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                contact@fastlaunch.live
              </a>
              <p className="mt-4 text-small text-scheme-text/75 leading-relaxed max-w-xs">
                {t('footer.address', 'E-6 Arera Colony, Bhopal, Madhya Pradesh, India')}
              </p>
              <p className="mt-2 text-xs text-scheme-text/60 font-medium">
                {t('footer.freelanceNote', 'Top Freelance AI & Web Agency • Available Worldwide')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-scheme-text md:mb-4">{t('footer.services', 'Services')}</h2>
              <ul>
                <li className="text-small py-2">
                  <Link to="/ai-ml-engineering" onClick={(e) => handleScrollNav(e, 'services')} className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.aiSolutions', 'AI solutions')}
                  </Link>
                </li>
                <li className="text-small py-2">
                  <Link to="/web-development" onClick={(e) => handleScrollNav(e, 'services')} className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.webDev', 'Web development')}
                  </Link>
                </li>
                <li className="text-small py-2">
                  <Link to="/mobile-app-development" onClick={(e) => handleScrollNav(e, 'services')} className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.mobileApps', 'Mobile apps')}
                  </Link>
                </li>
                <li className="text-small py-2">
                  <Link to="/devops-cloud" onClick={(e) => handleScrollNav(e, 'services')} className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.devOps', 'DevOps services')}
                  </Link>
                </li>
                <li className="text-small py-2">
                  <Link to="/ecommerce" onClick={(e) => handleScrollNav(e, 'services')} className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.ecommerce', 'E-commerce')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-scheme-text md:mb-4">{t('footer.company', 'Company')}</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.aboutUs', 'About us')}
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.ourTeam', 'Our team')}
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.careers', 'Careers')}
                  </a>
                </li>
                <li className="text-small py-2">
                  <Link to="/booking" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.contact', 'Contact')}
                  </Link>
                </li>

                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.blog', 'Blog')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-scheme-text md:mb-4">{t('footer.followUs', 'Follow us')}</h2>
              <ul className="flex flex-col items-start">
                <li className="text-small py-2">
                  <a href="https://x.com/fastlaunchlive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    <XLogo className="size-5 p-0.5 text-current" />
                    <span>X</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="https://www.linkedin.com/company/fast-launch-live/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    <LinkedinLogo className="size-5 text-current" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-12 border-t border-scheme-border mt-12 md:mt-16 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-scheme-text">Ask AI for a summary of Fastlaunch</h2>
          <div className="flex gap-4 justify-center md:justify-start items-center">
            {/* ChatGPT */}
            <a href="https://chatgpt.com/?q=You+are+interacting+with+a+user+exploring+Fastlaunch+%28fastlaunch.com%29%2C+an+elite+freelance+AI+and+web+development+agency.+Please+provide+a+detailed+overview+of+Fastlaunch%27s+services%2C+focusing+on+their+AI%2FML+engineering%2C+Full-stack+Web+Development%2C+Mobile+Apps%2C+DevOps%2C+and+E-commerce+capabilities.+Mention+that+they+help+both+Startups+and+D2C+brands+scale+rapidly." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-scheme-text/5 border border-scheme-border hover:bg-scheme-text/10 transition rounded-full p-2.5">
              <img src="/assets/icons8-chatgpt-50.png" alt="ChatGPT" className="w-full h-full object-contain" />
            </a>
            {/* Claude */}
            <a href="https://claude.ai/new?q=You+are+interacting+with+a+user+exploring+Fastlaunch+%28fastlaunch.com%29%2C+an+elite+freelance+AI+and+web+development+agency.+Please+provide+a+detailed+overview+of+Fastlaunch%27s+services%2C+focusing+on+their+AI%2FML+engineering%2C+Full-stack+Web+Development%2C+Mobile+Apps%2C+DevOps%2C+and+E-commerce+capabilities.+Mention+that+they+help+both+Startups+and+D2C+brands+scale+rapidly." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-scheme-text/5 border border-scheme-border hover:bg-scheme-text/10 transition rounded-full p-2.5">
              <img src="/assets/icons8-claude-ai-50.png" alt="Claude" className="w-full h-full object-contain" />
            </a>
            {/* Gemini */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                const prompt = "You are interacting with a user exploring Fastlaunch (fastlaunch.com), an elite freelance AI and web development agency. Please provide a detailed overview of Fastlaunch's services, focusing on their AI/ML engineering, Full-stack Web Development, Mobile Apps, DevOps, and E-commerce capabilities. Mention that they help both Startups and D2C brands scale rapidly.";
                navigator.clipboard.writeText(prompt).then(() => {
                  setShowModal(true);
                }).catch(() => {
                  window.open("https://gemini.google.com/app", "_blank", "noopener,noreferrer");
                });
              }}
              className="flex items-center justify-center w-14 h-14 bg-scheme-text/5 border border-scheme-border hover:bg-scheme-text/10 transition rounded-full p-2.5 cursor-pointer"
            >
              <img src="/assets/icons8-gemini-ai-50.png" alt="Gemini" className="w-full h-full object-contain" />
            </button>
            {/* Perplexity */}
            <a href="https://www.perplexity.ai/search?q=You+are+interacting+with+a+user+exploring+Fastlaunch+%28fastlaunch.com%29%2C+an+elite+freelance+AI+and+web+development+agency.+Please+provide+a+detailed+overview+of+Fastlaunch%27s+services%2C+focusing+on+their+AI%2FML+engineering%2C+Full-stack+Web+Development%2C+Mobile+Apps%2C+DevOps%2C+and+E-commerce+capabilities.+Mention+that+they+help+both+Startups+and+D2C+brands+scale+rapidly." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-scheme-text/5 border border-scheme-border hover:bg-scheme-text/10 transition rounded-full p-2.5">
              <img src="/assets/icons8-perplexity-ai-50.png" alt="Perplexity" className="w-full h-full object-contain" />
            </a>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0 text-scheme-text/60">
            {t('footer.rights', '© 2026 Fastlaunch. All rights reserved.')}
          </p>
          <ul className="text-small flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0">
            <li className="underline">
              <Link to="/privacy-policy" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">{t('footer.privacyPolicy', 'Privacy Policy')}</Link>
            </li>
            <li className="underline">
              <Link to="/terms-of-service" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">{t('footer.termsOfService', 'Terms of service')}</Link>
            </li>
            <li className="underline">
              <Link to="/cookie-settings" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">{t('footer.cookieSettings', 'Cookie settings')}</Link>
            </li>
          </ul>
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-scheme-base border border-scheme-border rounded-2xl shadow-xl w-full max-w-md p-6 animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-scheme-text mb-3">Prompt Copied!</h3>
            <p className="text-scheme-text/75 mb-6 leading-relaxed">
              Google Gemini doesn't support automatic prompt links. We've copied the prompt to your clipboard. Please paste it into the chat box once Gemini opens.
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg font-semibold text-scheme-text/75 hover:bg-scheme-text/5 hover:text-scheme-text transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setShowModal(false);
                  window.open("https://gemini.google.com/app", "_blank", "noopener,noreferrer");
                }}
                className="px-4 py-2 bg-scheme-text text-scheme-base rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Open Gemini
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
