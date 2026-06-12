"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout373() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Capabilities</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              What we build for you
            </h2>
            <p className="text-medium">
              Intelligent systems that think, learn, and adapt to your needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="grid grid-cols-1 sm:col-span-2 sm:row-span-1">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/pattern.svg"
                    />
                  </div>
                  <h3 className="mb-5 text-h3 font-bold md:mb-6">
                    Machine learning and AI
                  </h3>
                  <p>
                    Models that see patterns others miss and predict what comes
                    next.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Explore" variant="secondary">
                    Explore
                  </Button>
                  <Button
                    title="Arrow"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Arrow
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/desk.svg"
                    />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">
                    DevOps and infrastructure
                  </h3>
                  <p>
                    Pipelines that move code from desk to production without
                    friction.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Arrow"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Arrow
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/desk.svg"
                    />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">
                    DevOps and infrastructure
                  </h3>
                  <p>
                    Pipelines that move code from desk to production without
                    friction.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Arrow"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Arrow
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
