import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/playground', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio-page', changefreq: 'monthly', priority: 0.8 },
  { url: '/booking', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
  { url: '/cookie-settings', changefreq: 'yearly', priority: 0.3 },
];

const stream = new SitemapStream({ hostname: 'https://fastlaunch.live' });
links.forEach(link => stream.write(link));
stream.end();

streamToPromise(stream).then(sitemap => {
  fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
  console.log('Sitemap generated successfully!');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});
