"use client";

import { Card } from "@/components/ui/card";
import React, { Fragment } from "react";

export function Stats54() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-6 alternate logo-alt">
      <div className="container flex flex-col items-start">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h1 className="text-h3 font-bold">
            Numbers that show what we've accomplished in the field
          </h1>
          <p className="text-medium">
            We measure success by what gets delivered. Hundreds of projects
            shipped. Thousands of hours of uptime. Clients who came back because
            we earned it.
          </p>
        </div>
        <div className="grid w-full auto-cols-fr grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Fragment>
            <Card className="flex w-full flex-col items-center justify-center p-8 text-center md:col-span-2 lg:col-span-1 lg:row-span-2">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                500+
              </p>
              <h2 className="text-h6 font-bold">Projects delivered</h2>
            </Card>
            <div className="w-full">
              <img
                src="/assets/data-classification.png"
                alt="Data classification charts cover"
                className="aspect-[3/2] size-full rounded-image object-cover shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Fragment>
          <Fragment>
            <Card className="flex w-full flex-col items-center justify-center p-8 text-center">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                99.98%
              </p>
              <h2 className="text-h6 font-bold">Server uptime</h2>
            </Card>
            <div className="order-1 md:order-2 aspect-[3/2] size-full rounded-image bg-scheme-text/5 border border-scheme-border flex items-center justify-center text-scheme-text/30 font-medium">
              {/* Space preserved */}
            </div>
          </Fragment>
          <Fragment>
            <Card className="flex w-full flex-col items-center justify-center p-8 text-center order-2 md:order-1">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                50M+
              </p>
              <h2 className="text-h6 font-bold">API requests handled</h2>
            </Card>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
