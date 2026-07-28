import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export function SEO({
  title = 'FastLaunch - AI/ML, DevOps & Web Solutions',
  description = 'Deploy intelligent systems in days. AI/ML, DevOps, mobile apps, and serverless solutions.',
  name = 'FastLaunch',
  type = 'website',
  url,
  image = 'https://fastlaunch.live/og-image.jpg',
  schemas = []
}) {
  const location = useLocation();
  const canonicalUrl = url || `https://fastlaunch.live${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Dynamic JSON-LD Schemas */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

