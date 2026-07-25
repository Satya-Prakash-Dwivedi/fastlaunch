import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogsData } from '@/data/blogsData';
import { SEO } from '@/components/seo';
import { ArrowLeft, Calendar, Clock, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BlogPostPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();

  const blog = blogsData.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('blogPostPage.notFoundTitle', 'Blog Post Not Found')}</h1>
        <p className="text-neutral-400 mb-8">{t('blogPostPage.notFoundDesc', 'The requested article could not be located.')}</p>
        <Link to="/blog" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-bold text-black transition-colors">
          {t('blogPostPage.backToBlogs', 'Back to All Blogs')}
        </Link>
      </div>
    );
  }

  const currentLang = (i18n.language || 'en').slice(0, 2);
  const activeContent = (typeof blog.content === 'object' && blog.content !== null)
    ? (blog.content[currentLang] || blog.content['en'] || '')
    : (typeof blog.content === 'string' ? blog.content : '');

  const translatedTitle = t(`blogsData.${blog.translationKey}.title`, blog.title);
  const translatedExcerpt = t(`blogsData.${blog.translationKey}.excerpt`, blog.excerpt);
  const translatedCategory = t(`blogsData.${blog.translationKey}.category`, blog.category);
  const translatedBadge = t(`blogsData.${blog.translationKey}.badgeText`, blog.badgeText);

  const relatedBlogs = blogsData.filter((b) => b.slug !== slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: translatedTitle,
        url: window.location.href,
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t('blogPostPage.linkCopied', 'Link copied to clipboard!'));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black pb-24">
      <SEO
        title={`${translatedTitle} - Fastlaunch Blog`}
        description={translatedExcerpt}
      />

      {/* Header Hero Section: Split Layout (Image Left, Heading & Meta Right) */}
      <section className="relative pt-10 pb-8 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-cyan-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('blogPostPage.backToBlogs', 'Back to All Blogs')}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-center">
          {/* Left Column: Square Graphic Cover Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 sm:w-56 lg:w-64 aspect-square rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_0_35px_-5px_rgba(6,182,212,0.25)] bg-neutral-950 flex items-center justify-center p-2 shrink-0">
              <img src={blog.image} alt={translatedTitle} className="w-full h-full object-contain rounded-xl" />
            </div>
          </div>

          {/* Right Column: Badges, Title, Subtitle, and Meta Info */}
          <div className="flex flex-col justify-center space-y-3">
            {/* Category & Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold backdrop-blur-md">
                {translatedCategory}
              </span>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-white">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                {translatedBadge}
              </span>
            </div>

            {/* Pure White Heading */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {translatedTitle}
            </h1>

            {/* Subtitle */}
            {blog.subtitle && (
              <p className="text-xs sm:text-sm text-white italic font-medium leading-relaxed border-l-2 border-cyan-400 pl-2.5">
                {blog.subtitle}
              </p>
            )}

            {/* Meta Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-900 text-[11px] text-neutral-400">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <img
                    src="/icon-03-silver.svg"
                    alt="FastLaunch"
                    className="w-5 h-5 rounded-md object-cover border border-white/20 shadow-sm"
                  />
                  <span className="font-semibold text-white">{t('blogListPage.author', 'FastLaunch')}</span>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1 text-white">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  {blog.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-white">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  {blog.readTime}
                </span>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-white hover:bg-neutral-800 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <Share2 className="w-3 h-3" />
                {t('blogPostPage.share', 'Share')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Separator Line */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 my-6">
        <div className="w-full h-px bg-neutral-900" />
      </div>

      {/* Main Content with Pure White Text & Cyan Accents */}
      <article className="max-w-3xl mx-auto px-6 sm:px-12 lg:px-16">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight border-l-4 border-cyan-400 pl-3 py-1 mt-10 mb-4 bg-gradient-to-r from-cyan-950/40 to-transparent rounded-r-lg">
                {children}
              </h2>
            ),
            h2: ({ children }) => (
              <h3 className="text-base sm:text-lg font-bold text-cyan-300 mt-8 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                {children}
              </h3>
            ),
            h3: ({ children }) => (
              <h4 className="text-sm sm:text-base font-semibold text-white mt-6 mb-2">
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="text-white leading-relaxed font-normal text-sm sm:text-base mb-4">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-white bg-cyan-500/15 px-1.5 py-0.5 rounded text-white border border-cyan-500/30">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="text-cyan-200 italic font-medium">{children}</em>
            ),
            ul: ({ children }) => (
              <ul className="space-y-2.5 my-4 pl-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="space-y-2.5 my-4 pl-1 list-decimal text-white text-xs sm:text-sm">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="flex gap-2.5 items-start text-white text-xs sm:text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>{children}</div>
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-8 px-6 py-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-white italic text-center font-serif text-sm sm:text-base leading-relaxed max-w-xl mx-auto shadow-lg">
                {children}
              </blockquote>
            ),
            table: ({ children }) => (
              <div className="flex justify-center my-8">
                <div className="overflow-x-auto w-full max-w-xl border border-neutral-800 rounded-xl bg-neutral-950/90 shadow-xl">
                  <table className="w-full text-center text-xs sm:text-sm text-white border-collapse">
                    {children}
                  </table>
                </div>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-cyan-950/60 text-cyan-200 font-bold uppercase text-[11px] border-b border-neutral-800">
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th className="p-3 font-bold border-r border-neutral-800/60 last:border-r-0 text-center text-white">{children}</th>
            ),
            td: ({ children }) => (
              <td className="p-3 border-t border-neutral-900 border-r border-neutral-900 last:border-r-0 text-white font-normal text-center">{children}</td>
            ),
          }}
        >
          {activeContent}
        </ReactMarkdown>
      </article>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-6 sm:px-12 mt-16">
        <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-br from-cyan-950/40 via-neutral-950 to-neutral-900 border border-cyan-500/30 text-center space-y-4 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-transparent pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {t('blogPostPage.ctaTitle', 'Ready to Build Your Autonomous Stack or D2C Brand?')}
          </h3>
          <p className="max-w-lg mx-auto text-white text-xs sm:text-sm font-normal">
            {t('blogPostPage.ctaDesc', 'Fastlaunch delivers turnkey AI systems, white-label e-commerce platforms, and high-velocity engineering in days.')}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button asChild size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold px-6 border-0 shadow-lg">
              <Link to="/booking">{t('blogPostPage.bookCall', 'Book a Call')}</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-neutral-700 text-white hover:bg-neutral-800">
              <Link to="/services">{t('blogPostPage.exploreServices', 'Explore Services')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 sm:px-12 mt-16 pt-10 border-t border-neutral-900">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-6">{t('blogPostPage.relatedTitle', 'Related Articles')}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedBlogs.map((rBlog) => {
            const rTitle = t(`blogsData.${rBlog.translationKey}.title`, rBlog.title);
            const rExcerpt = t(`blogsData.${rBlog.translationKey}.excerpt`, rBlog.excerpt);
            const rCategory = t(`blogsData.${rBlog.translationKey}.category`, rBlog.category);

            return (
              <Link
                key={rBlog.slug}
                to={`/blog/${rBlog.slug}`}
                className="group p-4 rounded-xl bg-neutral-950 border border-neutral-850 hover:border-cyan-500/50 transition-all space-y-2"
              >
                <div className="text-[10px] font-semibold text-cyan-400">{rCategory}</div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {rTitle}
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2">{rExcerpt}</p>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 pt-1">
                  {t('blogListPage.readMore', 'Read')} <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
