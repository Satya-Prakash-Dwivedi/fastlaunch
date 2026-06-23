"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta31() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-8 btn-light alternate logo-alt">
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
              <a href="https://cal.com/fastlaunch" target="_blank" rel="noopener noreferrer">
                <Button title="Schedule a call" variant="secondary">
                  Schedule a call
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto aspect-video overflow-hidden rounded-image">
          <img
            src="/assets/ux-chart.jpg"
            className="size-full object-cover"
            alt="Collaborator explaining design metrics"
          />
        </div>
      </div>
    </section>
  );
}
