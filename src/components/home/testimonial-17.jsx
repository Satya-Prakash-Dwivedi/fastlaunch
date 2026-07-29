"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const realTestimonials = [
  {
    id: "igra-studios",
    client: "IgraStudios",
    role: "Video Editing Agency Platform",
    avatar: "IS",
    badge: "Media SaaS & Workflows",
    quote:
      "Fastlaunch built our complete video editing agency platform. Clients effortlessly upload assets, request custom edits, and pay via PayPal internationally or Razorpay in India. The automated ledgers and order replacement system made our agency operations completely hands-free!",
    metrics: "Dual Payments & Asset Portal"
  },
  {
    id: "maedric",
    client: "Maedric",
    role: "Gemstones & Luxury Jewelry D2C",
    avatar: "MA",
    badge: "E-Commerce & D2C",
    quote:
      "Fastlaunch engineered maedric.com into a stunning, high-converting luxury e-commerce platform for our gemstone and jewelry collection. From high-resolution product showcases to seamless checkout, our online sales surged from day one!",
    metrics: "Turnkey D2C Storefront"
  },
  {
    id: "neti-academy",
    client: "Neti Academy",
    role: "Competitive Exam EdTech Platform",
    avatar: "NA",
    badge: "EdTech & Test Series",
    quote:
      "Fastlaunch built Neti Academy into a powerful competitive exam platform. Students easily access mock tests, PYQ practice engines, and structured courses with zero latency. It transformed how our students prepare for exams!",
    metrics: "PYQs & Course Engine"
  },
  {
    id: "elite-english",
    client: "Elite in English Coaching Classes",
    role: "Language & Coaching Institute",
    avatar: "EE",
    badge: "Coaching & Education",
    quote:
      "Fastlaunch built our complete digital institute portal for Elite in English Coaching Classes. Batch scheduling, student enrollment, and digital study resources run smoothly on autopilot. It gave our coaching institute an enterprise edge!",
    metrics: "Student Portal & Scheduling"
  }
];

export function Testimonial17() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: "igra-studios",
      client: "IgraStudios",
      role: t("testimonialsData.igraStudios.role", "Video Editing Agency Platform"),
      avatar: "IS",
      badge: t("testimonialsData.igraStudios.badge", "Media SaaS & Workflows"),
      quote: t(
        "testimonialsData.igraStudios.quote",
        "Fastlaunch built our complete video editing agency platform. Clients effortlessly upload assets, request custom edits, and pay via PayPal internationally or Razorpay in India. The automated ledgers and order replacement system made our agency operations completely hands-free!"
      ),
      metrics: t("testimonialsData.igraStudios.metrics", "Dual Payments & Asset Portal")
    },
    {
      id: "maedric",
      client: "Maedric",
      role: t("testimonialsData.maedric.role", "Gemstones & Luxury Jewelry D2C"),
      avatar: "MA",
      badge: t("testimonialsData.maedric.badge", "E-Commerce & D2C"),
      quote: t(
        "testimonialsData.maedric.quote",
        "Fastlaunch engineered maedric.com into a stunning, high-converting luxury e-commerce platform for our gemstone and jewelry collection. From high-resolution product showcases to seamless checkout, our online sales surged from day one!"
      ),
      metrics: t("testimonialsData.maedric.metrics", "Turnkey D2C Storefront")
    },
    {
      id: "neti-academy",
      client: "Neti Academy",
      role: t("testimonialsData.netiAcademy.role", "Competitive Exam EdTech Platform"),
      avatar: "NA",
      badge: t("testimonialsData.netiAcademy.badge", "EdTech & Test Series"),
      quote: t(
        "testimonialsData.netiAcademy.quote",
        "Fastlaunch built Neti Academy into a powerful competitive exam platform. Students easily access mock tests, PYQ practice engines, and structured courses with zero latency. It transformed how our students prepare for exams!"
      ),
      metrics: t("testimonialsData.netiAcademy.metrics", "PYQs & Course Engine")
    },
    {
      id: "elite-english",
      client: "Elite in English Coaching Classes",
      role: t("testimonialsData.eliteEnglish.role", "Language & Coaching Institute"),
      avatar: "EE",
      badge: t("testimonialsData.eliteEnglish.badge", "Coaching & Education"),
      quote: t(
        "testimonialsData.eliteEnglish.quote",
        "Fastlaunch built our complete digital institute portal for Elite in English Coaching Classes. Batch scheduling, student enrollment, and digital study resources run smoothly on autopilot. It gave our coaching institute an enterprise edge!"
      ),
      metrics: t("testimonialsData.eliteEnglish.metrics", "Student Portal & Scheduling")
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="scroll-mt-16 lg:scroll-mt-20 relative py-20 lg:py-28 bg-black text-white overflow-hidden border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 text-[10px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-white" />
            {t("testimonialsData.badge", "Verified Client Impact")}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {t("testimonialsData.title", "Trusted by Growth Leaders")}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-normal">
            {t("testimonialsData.description", "See how we empower video platforms, D2C brands, EdTech portals, and coaching institutes to scale faster.")}
          </p>
        </div>

        {/* Featured Interactive Hero Testimonial Card */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-3xl p-6 sm:p-10 border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                {/* Left Side Quote */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-white text-white" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-white" /> {t("testimonialsData.verifiedCase", "Verified Client Case")}
                    </span>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-3 -left-4 w-10 h-10 text-white/5 pointer-events-none" />
                    <p className="text-base sm:text-lg lg:text-xl font-medium text-white leading-relaxed italic relative z-10">
                      "{testimonials[activeIndex].quote}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center font-extrabold text-white text-xs shadow-md">
                      {testimonials[activeIndex].avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {testimonials[activeIndex].client}
                      </h4>
                      <p className="text-xs text-neutral-400">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side Impact Metric Box */}
                <div className="shrink-0 p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center w-full lg:w-52 space-y-1">
                  <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">{t("testimonialsData.solutionBuilt", "Solution Built")}</div>
                  <div className="text-xs font-extrabold text-white">{testimonials[activeIndex].metrics}</div>
                  <div className="text-[10px] text-neutral-400 font-medium">{t("testimonialsData.productionDeployed", "Production Deployed")}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? "w-8 bg-white" : "w-2 bg-neutral-800 hover:bg-neutral-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-8 h-8 rounded-full border-neutral-800 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-8 h-8 rounded-full border-neutral-800 bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* 4-Card Grid Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item, index) => {
            const isSelected = activeIndex === index;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -3 }}
                className={`group p-4 rounded-2xl bg-neutral-950 border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-white/50 shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] bg-neutral-900"
                    : "border-neutral-850 hover:border-neutral-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {item.badge}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-white text-white" />
                    ))}
                  </div>
                </div>

                <h3 className="text-xs font-bold text-white group-hover:text-neutral-300 transition-colors">
                  {item.client}
                </h3>
                <p className="text-[10px] text-neutral-400 line-clamp-2 mt-1 italic">
                  "{item.quote}"
                </p>

                <div className="mt-3 pt-2 border-t border-neutral-900 flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-neutral-400">{item.role.split(" ")[0]}</span>
                  <span className="text-white group-hover:text-neutral-300 font-bold">{t("testimonialsData.viewCase", "View Case")} &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
