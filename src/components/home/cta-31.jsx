"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";

export function Cta31() {
  const { t } = useTranslation();
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-8 btn-light alternate logo-alt">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold text-scheme-text md:mb-6">
              {t('cta31.title', 'Ready to build something')}
            </h2>
            <p className="text-medium text-scheme-text">
              {t('cta31.description', "Tell us what you need. We'll show you what's possible and get moving.")}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              {/* <Button title="Request a quote">Request a quote</Button> */}
              <a href="#/booking">
                <Button title={t('cta31.button', 'Schedule a call')} variant="secondary">
                  {t('cta31.button', 'Schedule a call')}
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto aspect-video overflow-hidden rounded-image">
          <img
            src="/assets/workspace.jpg"
            alt="Abstract view of modern software architecture"
            className="h-full w-full object-cover rounded-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
