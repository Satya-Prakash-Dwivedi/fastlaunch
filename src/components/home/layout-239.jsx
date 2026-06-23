"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout239() {
  return (
    <section id="portfolio" className="px-[5%] pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-12 scheme-1">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg mx-auto">
              <p className="mb-3 font-semibold md:mb-4">Method</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                How we work and what matters
              </h2>
              <p className="text-medium text-scheme-text/80">
                Speed without shortcuts. Quality without delays. Everything
                arrives ready to use. We build what you need, test it
                thoroughly, and hand it over working.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-16 md:gap-24">
            {/* Step 1: Fast delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
              <div className="order-1 md:order-1">
                <video
                  src="/assets/female-it.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-video w-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              <div className="order-2 md:order-2 flex flex-col justify-center pl-0 md:pl-6 lg:pl-12">
                <span className="text-scheme-text/30 text-h4 font-bold mb-2">01</span>
                <h3 className="mb-4 text-h3 font-bold">Fast delivery</h3>
                <p className="text-medium text-scheme-text/75 leading-relaxed">
                  Code moves from our hands to your servers in days, not months. We deliver high-speed, fully tested, and intelligent pipelines that are ready to run in record time.
                </p>
              </div>
            </div>

            {/* Step 2: Ready to plug in */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full pt-12 md:pt-16 border-t border-scheme-border/10">
              <div className="order-2 md:order-1 flex flex-col justify-center pr-0 md:pr-6 lg:pr-12">
                <span className="text-scheme-text/30 text-h4 font-bold mb-2">02</span>
                <h3 className="mb-4 text-h3 font-bold">Ready to plug in</h3>
                <p className="text-medium text-scheme-text/75 leading-relaxed">
                  No assembly required. Your solution works the moment it lands. Everything is engineered to integrate seamlessly and perform inside your active production ecosystem instantly.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/assets/software-engineers.jpg"
                  alt="Software engineers collaborating at modern desk"
                  className="aspect-video w-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Step 3: Post-delivery support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full pt-12 md:pt-16 border-t border-scheme-border/10">
              <div className="order-1 md:order-1">
                <img
                  src="/assets/ux-collaboration.jpg"
                  alt="UI/UX design team collaboration"
                  className="aspect-video w-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              <div className="order-2 md:order-2 flex flex-col justify-center pl-0 md:pl-6 lg:pl-12">
                <span className="text-scheme-text/30 text-h4 font-bold mb-2">03</span>
                <h3 className="mb-4 text-h3 font-bold">Post-delivery support</h3>
                <p className="text-medium text-scheme-text/75 leading-relaxed">
                  We stay close after launch to keep everything running smooth. Continuous monitoring, seamless updates, and fast iteration support to ensure your long-term success.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
            <a href="#/booking">
              <Button variant="secondary">Get started</Button>
            </a>
            {/* <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
              title="Learn more"
            >
              Learn more
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
