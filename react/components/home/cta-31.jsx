"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta31() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light alternate logo-alt">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Ready to build something
            </h2>
            <p className="text-medium">
              Tell us what you need. We'll show you what's possible and get
              moving.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Request a quote">Request a quote</Button>
              <Button title="Schedule a call" variant="secondary">
                Schedule a call
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
