import React, { useEffect } from "react";
import { SEO } from "@/components/seo";
import { Layout373 } from "@/components/home/layout-373";

export function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Our Services | FastLaunch"
        description="Explore the services we offer including AI/ML engineering, web development, mobile apps, and DevOps."
      />
      <Layout373 />
    </>
  );
}
