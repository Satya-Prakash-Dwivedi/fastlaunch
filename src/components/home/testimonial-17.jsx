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
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderGlow: "group-hover:border-purple-500/50",
    starColor: "text-purple-400",
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
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
    starColor: "text-cyan-400",
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
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "group-hover:border-emerald-500/50",
    starColor: "text-emerald-400",
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
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "group-hover:border-amber-500/50",
    starColor: "text-amber-400",
    badge: "Coaching & Education",
    quote:
      "Fastlaunch built our complete digital institute portal for Elite in English Coaching Classes. Batch scheduling, student enrollment, and digital study resources run smoothly on autopilot. It gave our coaching institute an enterprise edge!",
    metrics: "Student Portal & Scheduling"
  }
];

export function Testimonial17() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % realTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + realTestimonials.length) % realTestimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-black text-white overflow-hidden border-t border-neutral-900">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/10 to-pink-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            {t("testimonial17.badge", "Verified Client Impact")}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {t("testimonial17.title", "Trusted by Growth Leaders")}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-normal">
            {t("testimonial17.description", "See how we empower video platforms, D2C brands, EdTech portals, and coaching institutes to scale faster.")}
          </p>
        </div>

        {/* Featured Interactive Hero Testimonial Card */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={realTestimonials[activeIndex].id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className={`relative rounded-3xl p-6 sm:p-10 border border-neutral-800 bg-neutral-950/90 shadow-2xl backdrop-blur-xl bg-gradient-to-br ${realTestimonials[activeIndex].gradient} overflow-hidden`}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                {/* Left Side Quote */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 fill-current ${realTestimonials[activeIndex].starColor}`} />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Verified Client Case
                    </span>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-3 -left-4 w-10 h-10 text-white/5 pointer-events-none" />
                    <p className="text-base sm:text-lg lg:text-xl font-medium text-white leading-relaxed italic relative z-10">
                      "{realTestimonials[activeIndex].quote}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold text-black text-xs border border-white/20 shadow-md">
                      {realTestimonials[activeIndex].avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {realTestimonials[activeIndex].client}
                      </h4>
                      <p className="text-xs text-neutral-400">{realTestimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side Impact Metric Box */}
                <div className="shrink-0 p-5 rounded-2xl bg-neutral-900/90 border border-white/10 text-center w-full lg:w-52 space-y-1">
                  <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Solution Built</div>
                  <div className="text-xs font-extrabold text-cyan-300">{realTestimonials[activeIndex].metrics}</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Production Deployed</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-2">
              {realTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? "w-8 bg-cyan-400" : "w-2 bg-neutral-800 hover:bg-neutral-700"
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
          {realTestimonials.map((item, index) => {
            const isSelected = activeIndex === index;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -3 }}
                className={`group p-4 rounded-2xl bg-neutral-950 border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-white/40 shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] bg-neutral-900/90"
                    : "border-neutral-850 hover:border-neutral-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    {item.badge}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 fill-current ${item.starColor}`} />
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
                  <span className="text-white group-hover:text-neutral-300 font-bold">View Case &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
