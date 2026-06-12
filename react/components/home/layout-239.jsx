"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout239() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Method</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                How we work and what matters
              </h2>
              <p className="text-medium">
                Speed without shortcuts. Quality without delays. Everything
                arrives ready to use. We build what you need, test it
                thoroughly, and hand it over working.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">Fast delivery</h3>
              <p>
                Code moves from our hands to your servers in days, not months.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Ready to plug in
              </h3>
              <p>
                No assembly required. Your solution works the moment it lands.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Post-delivery support
              </h3>
              <p>
                We stay close after launch to keep everything running smooth.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Get started</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              Arrow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
