"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";
import { useTranslation } from "react-i18next";

export function Layout373() {
  const { t } = useTranslation();
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-7 alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{t('layout373.capabilities', 'Capabilities')}</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              {t('layout373.title', 'What we build for you')}
            </h2>
            <p className="text-medium">
              {t('layout373.description', 'Intelligent systems that think, learn, and adapt to your needs.')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {/* Card 1: AI/ML/RL */}
            <Card className="grid grid-cols-1 sm:col-span-2 sm:row-span-1">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/pattern.svg"
                      alt="AI/ML/RL Icon"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mb-5 text-h3 font-bold md:mb-6">
                    {t('layout373.aiTitle', 'AI / ML / RL Solutions')}
                  </h3>
                  <p>
                    {t('layout373.aiDesc', 'Intelligent neural networks, predictive machine learning models, and reinforcement learning systems designed to adapt and scale.')}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title={t('layout373.explore', 'Explore')} variant="secondary">
                    {t('layout373.explore', 'Explore')}
                  </Button>
                  <Button
                    title={t('layout373.details', 'Details')}
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    {t('layout373.details', 'Details')}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 2: DevOps */}
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/settings.svg"
                      alt="DevOps Icon"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">
                    {t('layout373.devopsTitle', 'DevOps & Automation')}
                  </h3>
                  <p>
                    {t('layout373.devopsDesc', 'CI/CD pipelines, high-availability deployments, and infrastructure as code to ship code rapidly.')}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  {/* <Button
                    title="Learn more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Learn more
                  </Button> */}
                </div>
              </div>
            </Card>

            {/* Card 3: FullStack */}
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/code.svg"
                      alt="FullStack Icon"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">
                    {t('layout373.fullstackTitle', 'FullStack Web')}
                  </h3>
                  <p>
                    {t('layout373.fullstackDesc', 'Cohesive frontend interfaces and robust backend architectures built for performance and security.')}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  {/* <Button
                    title="Learn more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Learn more
                  </Button> */}
                </div>
              </div>
            </Card>

            {/* Card 4: Mobile */}
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/smartphone.svg"
                      alt="Mobile Icon"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">
                    {t('layout373.mobileTitle', 'Mobile Apps')}
                  </h3>
                  <p>
                    {t('layout373.mobileDesc', 'Native iOS and Android applications utilizing smooth animations and shared backend components.')}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  {/* <Button
                    title="Learn more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Learn more
                  </Button> */}
                </div>
              </div>
            </Card>

            {/* Card 5: E-commerce */}
            <Card className="grid grid-cols-1 sm:col-span-2 sm:row-span-1">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/shopping_cart.svg"
                      alt="E-commerce Icon"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mb-5 text-h3 font-bold md:mb-6">
                    {t('layout373.ecommerceTitle', 'E-commerce Applications')}
                  </h3>
                  <p>
                    {t('layout373.ecommerceDesc', 'Complete transactional platforms featuring Stripe/PayPal payments, custom order workflows, smart check-out management, and real-time carrier delivery integrations.')}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title={t('layout373.explore', 'Explore')} variant="secondary">
                    {t('layout373.explore', 'Explore')}
                  </Button>
                  <Button
                    title={t('layout373.details', 'Details')}
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    {t('layout373.details', 'Details')}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 6: Serverless */}
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/cloud.svg"
                      alt="Serverless Icon"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">
                    {t('layout373.serverlessTitle', 'Serverless Managed')}
                  </h3>
                  <p>
                    {t('layout373.serverlessDesc', 'Fully auto-scaling, modern cloud environments that charge only for exact execution time, reducing cloud waste.')}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  {/* <Button
                    title="Learn more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Learn more
                  </Button> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
