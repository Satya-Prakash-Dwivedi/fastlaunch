"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useTranslation } from "react-i18next";

export function Cta32() {
  const { t } = useTranslation();
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-5 btn-light alternate logo-alt">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold text-scheme-text md:mb-6">
              {t('cta32.title', 'Stay ahead with our updates')}
            </h2>
            <p className="text-medium text-scheme-text">
              {t('cta32.description', 'Get the latest on AI, DevOps, and development trends delivered to your inbox.')}
            </p>
            <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
              <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input id="email" type="email" placeholder={t('cta32.placeholder', 'Enter your email')} />
                <Button
                  title={t('cta32.button', 'Subscribe now')}
                  size="sm"
                  className="items-center justify-center px-6 py-3"
                >
                  {t('cta32.button', 'Subscribe now')}
                </Button>
              </form>
              <p className="text-tiny text-scheme-text/75">
                {t('cta32.terms', "By clicking Subscribe you're confirming that you agree with our Terms and Conditions.")}
              </p>
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
