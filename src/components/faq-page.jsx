import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { SEO } from "@/components/seo";
import { faqs } from "@/data/faqs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function FaqPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const faq = faqs.find((f) => f.slug === slug);

  if (!faq) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-3xl mx-auto">
        <SEO 
          title={`${faq.question} | FastLaunch FAQ`}
          description={faq.answer.substring(0, 150) + '...'}
        />
        
        <Card className="p-8 md:p-12">
          <div className="mb-6">
            <span className="text-scheme-text/60 text-sm font-semibold uppercase tracking-wider">
              {t('faqPage.category', 'Frequently Asked Question')}
            </span>
          </div>
          
          <h1 className="mb-6 text-h2 font-bold leading-tight">
            {faq.question}
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none mb-10">
            <p className="text-medium text-scheme-text/80 leading-relaxed">
              {faq.answer}
            </p>
          </div>

          <div className="pt-8 border-t border-scheme-border/20 flex items-center justify-between">
            <Button asChild variant="secondary">
              <Link to="/booking">{t('faqPage.bookCall', 'Book a Consultation')}</Link>
            </Button>
            <Link to="/" className="text-sm font-semibold text-scheme-text/60 hover:text-scheme-text transition-colors">
              {t('faqPage.backHome', '← Back to Home')}
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
