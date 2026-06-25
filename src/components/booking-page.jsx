import React, { useEffect } from "react";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "@/components/relume-icons";
import { useTranslation } from "react-i18next";

export function BookingPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col h-dvh w-full scheme-7 alternate btn-light bg-[var(--color-scheme-background)] text-[var(--color-scheme-text)]">
      <SEO 
        title="Book a Consultation | FastLaunch"
        description="Schedule a consultation call with the FastLaunch team to discuss your project requirements."
      />
      <div className="px-[5%] h-16 lg:h-20 flex items-center justify-end shrink-0 border-b border-[var(--color-scheme-border)]">
        <Button asChild variant="secondary" size="sm" className="rounded-full px-5 hover:scale-[1.02] transition-transform">
          <a href="#/" className="flex items-center gap-2">
            <ChevronLeft className="size-4" />
            <span className="font-semibold text-sm">{t('booking.backToHome', 'Back to Home')}</span>
          </a>
        </Button>
      </div>
      <div className="flex-grow w-full relative bg-[var(--color-scheme-background)]">
        <iframe
          src="https://cal.com/fastlaunch?theme=dark"
          className="absolute inset-0 w-full h-full border-none"
          title="Schedule a Call"
        />
      </div>
    </div>
  );
}
