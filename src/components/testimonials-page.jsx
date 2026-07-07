import React, { useEffect } from "react";
import { SEO } from "@/components/seo";
import { Testimonial17 } from "@/components/home/testimonial-17";

export function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Testimonials | FastLaunch"
        description="See what our active consumers have to say about our fast and reliable development services."
      />
      <Testimonial17 />
    </>
  );
}
