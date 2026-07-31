import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getSanityPosts, getCachedSanityPosts } from '@/lib/sanity';
import { SEO } from '@/components/seo';
import { ArrowRight, Search, Calendar, Clock } from 'lucide-react';

export function BlogListPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState(() => getCachedSanityPosts() || []);
  const [loading, setLoading] = useState(() => !getCachedSanityPosts());

  useEffect(() => {
    getSanityPosts().then((posts) => {
      if (posts) {
        setBlogs(posts);
      }
      setLoading(false);
    });
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.title || '';
    const excerpt = blog.excerpt || '';
    const category = blog.category || '';
    const q = searchQuery.toLowerCase();

    return (
      title.toLowerCase().includes(q) ||
      excerpt.toLowerCase().includes(q) ||
      category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black pb-20">
      <SEO
        title="FastLaunch Blogs - AI, D2C & White-Label Engineering Insights"
        description="Read the latest articles on building autonomous enterprises, transforming ODOP sellers into D2C powerhouses, white-label tech stacks, and social commerce."
      />

      {/* Search Control Section */}
      <section className="pt-10 pb-4 px-4 sm:px-6 max-w-md mx-auto">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
          <input
            type="text"
            placeholder={t('blogListPage.searchPlaceholder', 'Search blogs or topics...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-neutral-900/90 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
          />
        </div>
      </section>

      {/* Card Grid Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-2">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="rounded-2xl bg-neutral-950/90 border border-neutral-900 overflow-hidden animate-pulse flex flex-col">
                <div className="w-full aspect-[16/10] bg-neutral-900" />
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-24 h-3 bg-neutral-900 rounded" />
                    <div className="w-full h-5 bg-neutral-900 rounded" />
                    <div className="w-4/5 h-4 bg-neutral-900/60 rounded" />
                  </div>
                  <div className="w-full h-8 bg-neutral-900/40 rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-14 text-neutral-400">
            <p className="text-xs">{t('blogListPage.noResults', 'No articles found matching your query.')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, idx) => {
              const translatedTitle = blog.title;
              const translatedExcerpt = blog.excerpt;
              const translatedBadge = blog.badgeText;

              return (
                <motion.article
                  key={blog.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative flex flex-col rounded-2xl bg-neutral-950/90 border border-neutral-850 overflow-hidden hover:border-neutral-700 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-black/60"
                >
                  <Link to={`/blog/${blog.slug}`} className="block flex-grow flex flex-col">
                    {/* Card Cover Header Graphic */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
                      <img
                        src={blog.image}
                        alt={translatedTitle}
                        loading={idx < 3 ? "eager" : "lazy"}
                        fetchPriority={idx < 3 ? "high" : "auto"}
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                      {/* Topic Badge */}
                      <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-white text-[9px] font-semibold">
                        <span className="w-1.2 h-1.2 rounded-full bg-white animate-pulse" />
                        {translatedBadge}
                      </div>
                    </div>

                    {/* Card Text Body */}
                    <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
                      <div className="space-y-2">
                        {/* Date & Time */}
                        <div className="flex items-center gap-2 text-[10px] font-medium text-neutral-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-neutral-500" />
                            {blog.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-neutral-500" />
                            {blog.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-neutral-300 transition-colors leading-snug line-clamp-2">
                          {translatedTitle}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 font-normal">
                          {translatedExcerpt}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-3 border-t border-neutral-900 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="/icon-03-silver.svg"
                            alt="FastLaunch"
                            className="w-5 h-5 rounded-md object-cover border border-white/20 shadow-sm"
                          />
                          <span className="text-xs font-semibold text-white">{t('blogListPage.author', 'FastLaunch')}</span>
                        </div>

                        <div className="inline-flex items-center gap-0.5 text-xs font-bold text-white group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all duration-200">
                          {t('blogListPage.readMore', 'Read')}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
