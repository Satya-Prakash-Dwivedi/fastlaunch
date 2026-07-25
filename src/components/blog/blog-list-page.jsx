import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { blogsData } from '@/data/blogsData';
import { SEO } from '@/components/seo';
import { ArrowRight, Search, Calendar, Clock, Sparkles } from 'lucide-react';

export function BlogListPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogsData.filter((blog) => {
    const title = t(`blogsData.${blog.translationKey}.title`, blog.title);
    const excerpt = t(`blogsData.${blog.translationKey}.excerpt`, blog.excerpt);
    const category = t(`blogsData.${blog.translationKey}.category`, blog.category);
    
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black pb-20">
      <SEO
        title="FastLaunch Blogs - AI, D2C & White-Label Engineering Insights"
        description="Read the latest articles on building autonomous enterprises, transforming ODOP sellers into D2C powerhouses, white-label tech stacks, and social commerce."
      />

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-8 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-tr from-cyan-600/20 via-blue-500/15 to-violet-600/20 blur-[90px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative z-10 space-y-2.5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            {t('blogListPage.badge', 'FastLaunch Insights')}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {t('blogListPage.heroTitle', 'Engineering & Business Intelligence')}
          </h1>
          <p className="max-w-md mx-auto text-xs text-neutral-300 font-normal">
            {t('blogListPage.heroDesc', 'Tactical playbooks and deep dives on scaling D2C, deploying autonomous AI, and white-label tech stacks.')}
          </p>
        </motion.div>

        {/* Search Control */}
        <div className="mt-6 max-w-md mx-auto flex items-center gap-2">
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
        </div>
      </section>

      {/* Slightly Narrower & Taller Card Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-2">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-14 text-neutral-400">
            <p className="text-xs">{t('blogListPage.noResults', 'No articles found matching your query.')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, idx) => {
              const translatedTitle = t(`blogsData.${blog.translationKey}.title`, blog.title);
              const translatedExcerpt = t(`blogsData.${blog.translationKey}.excerpt`, blog.excerpt);
              const translatedBadge = t(`blogsData.${blog.translationKey}.badgeText`, blog.badgeText);

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
