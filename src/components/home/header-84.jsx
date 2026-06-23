"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Header84() {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20 scheme-1">
      <div className="container">
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              Build fast. Deploy everywhere. Scale without limits.
            </h1>
            <p className="text-medium">
              We deliver intelligent solutions that work immediately. From
              machine learning models to serverless infrastructure, everything
              is ready to plug in and perform.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="#/booking">
                <Button title="Start now">Start now</Button>
              </a>
              {/* <Button title="Learn more" variant="secondary">
                Learn more
              </Button> */}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full object-cover rounded-b-card lg:rounded-bl-none lg:rounded-r-card"
              alt="Fastlaunch Diverse Tech Team Collaborating"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
