"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";
import { useTranslation } from "react-i18next";

export function Faq4() {
  const { t } = useTranslation();
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-6 alternate logo-alt">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">{t('faq.title', 'Questions')}</h2>
          <p className="text-medium">
            {t('faq.description', 'Everything you need to know about our process, timelines, and what comes after delivery.')}
          </p>
        </div>
        <Accordion type="multiple">
          <div className="grid items-start justify-items-stretch gap-4">
            <Card>
              <AccordionItem
                value="item-0"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  <h3 className="text-left font-medium text-inherit">{t('faq.q1', 'How fast do you deliver?')}</h3>
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <p>{t('faq.a1', 'Most projects ship within days to weeks depending on scope. We move code from development to production without the usual delays. Speed is built into how we work, not something we sacrifice quality for.')}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-1"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  <h3 className="text-left font-medium text-inherit">{t('faq.q2', 'What happens after launch?')}</h3>
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <p>{t('faq.a2', "We don't disappear once your solution goes live. Post-delivery support keeps everything running smooth and handles any issues that surface. You get ongoing maintenance and optimization to ensure peak performance.")}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  <h3 className="text-left font-medium text-inherit">{t('faq.q3', 'Do you handle payments integration?')}</h3>
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <p>{t('faq.a3', 'Yes. We build complete e-commerce solutions with payment processing, order management, and checkout flows that work flawlessly. Everything integrates cleanly and handles transactions securely from day one.')}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  <h3 className="text-left font-medium text-inherit">{t('faq.q4', 'Can you build mobile and backend together?')}</h3>
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <p>{t('faq.a4', "That's exactly what we do. Mobile apps and backend infrastructure built simultaneously so they fit together perfectly. No integration headaches, no delays waiting for one side to finish.")}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  <h3 className="text-left font-medium text-inherit">{t('faq.q5', 'What about serverless infrastructure?')}</h3>
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <p>{t('faq.a5', "We handle full serverless managed services so you don't manage servers. Everything scales automatically, costs stay predictable, and you focus on your business instead of infrastructure.")}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-5"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  <h3 className="text-left font-medium text-inherit">{t('faq.q6', 'Can I hire FastLaunch developers as freelance AI & web engineers?')}</h3>
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <p>{t('faq.a6', 'Yes! FastLaunch operates as an elite freelancer collective and full-service technology agency. Whether you need top freelance AI/ML engineers, full-stack React developers, or mobile app builders, we provide flexible freelancer consulting models or turnkey agency delivery.')}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-6"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  <h3 className="text-left font-medium text-inherit">{t('faq.q7', 'What exact services and technology stacks do you provide?')}</h3>
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <p>{t('faq.a7', 'Our core services include AI/ML engineering (custom LLMs, RAG architectures, PyTorch, LangChain), Full-Stack Web Development (React, Next.js, Vite, Node.js, Python), Native Mobile Apps (React Native), and DevOps Cloud Infrastructure (serverless AWS, Vercel, CI/CD automation).')}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-7"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  <h3 className="text-left font-medium text-inherit">{t('faq.q8', 'Where is FastLaunch located and what is your address?')}</h3>
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  <p>{t('faq.a8', 'Our headquarters is located at E-6 Arera Colony, Bhopal, Madhya Pradesh, India. We serve clients globally with remote freelance engineering and rapid deployment.')}</p>
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">{t('faq.moreAnswers', 'Need more answers?')}</h4>
          <p className="text-medium">
            {t('faq.reachOut', "Reach out and we'll walk you through exactly how we work.")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button asChild title={t('faq.contact', 'Contact')}>
              <a href="#/booking">{t('faq.contact', 'Contact')}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
