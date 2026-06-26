"use client";

import { Button } from "@/components/ui/button";
import {
  LinkedinLogo,
  XLogo,
} from "relume-icons";
import { BrandLogo } from "./brand-logo";
import { useTranslation } from "react-i18next";

export function Footer1() {
  const { t } = useTranslation();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-5 alternate">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col justify-start">
            <a href="#" className="flex items-center justify-start w-max">
              <BrandLogo className="h-9 lg:h-11 w-auto text-scheme-text" />
            </a>
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
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.aiSolutions', 'AI solutions')}
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.webDev', 'Web development')}
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.mobileApps', 'Mobile apps')}
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.devOps', 'DevOps services')}
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.ecommerce', 'E-commerce')}
                  </a>
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
                  <a href="#/booking" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    {t('footer.contact', 'Contact')}
                  </a>
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
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0 text-scheme-text/60">
            {t('footer.rights', '© 2026 Fastlaunch. All rights reserved.')}
          </p>
          <ul className="text-small flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0">
            <li className="underline">
              <a href="#/privacy-policy" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">{t('footer.privacyPolicy', 'Privacy Policy')}</a>
            </li>
            <li className="underline">
              <a href="#/terms-of-service" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">{t('footer.termsOfService', 'Terms of service')}</a>
            </li>
            <li className="underline">
              <a href="#/cookie-settings" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">{t('footer.cookieSettings', 'Cookie settings')}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
