"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "relume-icons";
import { BrandLogo } from "./brand-logo";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-5 alternate">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="#" className="mb-5 md:mb-6 flex items-center justify-start w-max">
              <BrandLogo className="h-9 lg:h-11 w-auto text-scheme-text" />
            </a>
            <p className="mb-5 md:mb-6 text-scheme-text/90">
              Get updates on new features and product releases.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-4 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Subscribe" variant="alternate" size="sm">
                  Subscribe
                </Button>
              </form>
              <p className="text-tiny text-scheme-text/60">
                You agree to our Privacy Policy and consent to receive company
                updates.
              </p>
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
                  <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
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
                  <a href="#" className="flex items-center gap-3 text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    <FacebookLogo className="size-5 text-current" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    <InstagramLogo className="size-5 text-current" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    <XLogo className="size-5 p-0.5 text-current" />
                    <span>X</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    <LinkedinLogo className="size-5 text-current" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">
                    <YoutubeLogo className="size-5 text-current" />
                    <span>YouTube</span>
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
              <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">Terms of service</a>
            </li>
            <li className="underline">
              <a href="#" className="text-scheme-text/75 transition-colors duration-300 hover:text-scheme-text">Cookie settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
