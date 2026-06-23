"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { StarFull } from "relume-icons";
import { useTranslation } from "react-i18next";

export function Testimonial17() {
  const { t } = useTranslation();
  return (
    <section id="testimonials" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-7 alternate logo-alt">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">{t('testimonial17.title', 'Client voices')}</h2>
          <p className="text-medium">{t('testimonial17.description', 'What they say about working with us')}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              {t('testimonial17.t1Quote', '"They delivered a machine learning pipeline that cut our processing time in half. No meetings, no excuses, just results."')}
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 flex items-center justify-center rounded-full bg-scheme-text/10 border border-scheme-border text-scheme-text font-bold text-lg md:mr-4 md:mb-0 select-none">
                SC
              </div>
              <div>
                <p className="font-semibold">Sarah Chen</p>
                <p>{t('testimonial17.t1Role', 'CTO, TechVenture Inc')}</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              {t('testimonial17.t2Quote', '"Our e-commerce platform went live in three weeks. The payment integration worked flawlessly from day one."')}
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 flex items-center justify-center rounded-full bg-scheme-text/10 border border-scheme-border text-scheme-text font-bold text-lg md:mr-4 md:mb-0 select-none">
                MW
              </div>
              <div>
                <p className="font-semibold">Marcus Weber</p>
                <p>{t('testimonial17.t2Role', 'Founder, Digital Commerce')}</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              {t('testimonial17.t3Quote', '"They built our mobile app and backend infrastructure simultaneously. Everything integrated perfectly without a single hiccup."')}
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 flex items-center justify-center rounded-full bg-scheme-text/10 border border-scheme-border text-scheme-text font-bold text-lg md:mr-4 md:mb-0 select-none">
                ER
              </div>
              <div>
                <p className="font-semibold">Elena Rossi</p>
                <p>{t('testimonial17.t3Role', 'Product Manager, StartupHub')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
