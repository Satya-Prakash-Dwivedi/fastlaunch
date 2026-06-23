"use client";

import { Button } from "@/components/ui/button";
import {
  LinkedinLogo,
  XLogo,
} from "relume-icons";
import { BrandLogo } from "./brand-logo";

export function Footer1() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-5 alternate">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col justify-start">
            <a href="#" className="flex items-center justify-start w-max">
              <BrandLogo className="h-9 lg:h-11 w-auto text-scheme-text" />
            </a>
            <div className="mt-8">
              <p className="mb-2 font-semibold text-scheme-text">Contact us</p>
              <a href="mailto:contact@fastlaunch.live" className="text-small text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                contact@fastlaunch.live
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-scheme-text md:mb-4">Services</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    AI solutions
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    Web development
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    Mobile apps
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    DevOps services
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    E-commerce
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-scheme-text md:mb-4">Company</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    About us
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    Our team
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    Careers
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="https://cal.com/fastlaunch" target="_blank" rel="noopener noreferrer" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    Contact
                  </a>
                </li>

                <li className="text-small py-2">
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-scheme-text md:mb-4">Follow us</h2>
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
            © 2026 Fastlaunch. All rights reserved.
          </p>
          <ul className="text-small flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0">
            <li className="underline">
              <a href="#/privacy-policy" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#/terms-of-service" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">Terms of service</a>
            </li>
            <li className="underline">
              <a href="#/cookie-settings" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">Cookie settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
