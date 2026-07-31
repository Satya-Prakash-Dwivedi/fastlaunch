import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PortableText } from '@portabletext/react';
import { blogsData } from '@/data/blogsData';
import { getSanityPosts, getCachedSanityPosts, urlFor } from '@/lib/sanity';
import { SEO } from '@/components/seo';
import { ArrowLeft, Calendar, Clock, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const imgUrl = urlFor(value);
      if (!imgUrl) return null;
      return (
        <figure className="my-8 ml-4 sm:ml-6">
          <img src={imgUrl} alt={value.alt || 'Sanity Blog Image'} className="w-full rounded-2xl border border-neutral-800 shadow-xl" />
          {value.caption && <figcaption className="text-center text-xs text-neutral-400 mt-2">{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => <h2 className="text-xl sm:text-2xl font-black text-white mt-12 mb-4 pb-2 border-b border-neutral-800 tracking-tight">{children}</h2>,
    h2: ({ children }) => <h3 className="text-base sm:text-lg font-bold text-white mt-8 mb-3 flex items-center gap-2.5 pl-4 sm:pl-6"><span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />{children}</h3>,
    h3: ({ children }) => <h4 className="text-sm sm:text-base font-semibold text-neutral-200 mt-6 mb-2 pl-8 sm:pl-10">{children}</h4>,
    normal: ({ children }) => <p className="text-neutral-200 leading-relaxed font-normal text-sm sm:text-base mb-5 pl-4 sm:pl-6">{children}</p>,
    blockquote: ({ children }) => <blockquote className="my-8 ml-4 sm:ml-6 px-6 py-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-white font-medium text-sm sm:text-base leading-relaxed shadow-lg">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-2.5 my-4 pl-8 sm:pl-12">{children}</ul>,
    number: ({ children }) => <ol className="space-y-2.5 my-4 pl-8 sm:pl-12 list-decimal text-neutral-200 text-xs sm:text-sm">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-2.5 items-start text-neutral-200 text-xs sm:text-sm leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
        <div>{children}</div>
      </li>
    ),
    number: ({ children }) => <li className="text-neutral-200 text-xs sm:text-sm leading-relaxed">{children}</li>,
  },
};

export function BlogPostPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();

  const [blog, setBlog] = useState(() => {
    const cached = getCachedSanityPosts();
    if (cached) {
      const found = cached.find((b) => b.slug === slug);
      if (found) return found;
    }
    return blogsData.find((b) => b.slug === slug);
  });
  const [allBlogs, setAllBlogs] = useState(() => getCachedSanityPosts() || blogsData);
  const [loading, setLoading] = useState(() => !blog);

  useEffect(() => {
    window.scrollTo(0, 0);

    getSanityPosts().then((posts) => {
      if (posts && posts.length > 0) {
        setAllBlogs(posts);
        const found = posts.find((p) => p.slug === slug);
        if (found) {
          setBlog(found);
        }
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-neutral-400 text-xs font-medium">Loading article...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('blogPostPage.notFoundTitle', 'Blog Post Not Found')}</h1>
        <p className="text-neutral-400 mb-8">{t('blogPostPage.notFoundDesc', 'The requested article could not be located.')}</p>
        <Link to="/blog" className="px-6 py-3 bg-white hover:bg-neutral-200 rounded-xl font-bold text-black transition-colors">
          {t('blogPostPage.backToBlogs', 'Back to All Blogs')}
        </Link>
      </div>
    );
  }

  const activeContent = (typeof blog.content === 'object' && blog.content !== null)
    ? (blog.content['en'] || '')
    : (typeof blog.content === 'string' ? blog.content : '');

  const translatedTitle = blog.title;
  const translatedExcerpt = blog.excerpt;
  const translatedCategory = blog.category;
  const translatedBadge = blog.badgeText;

  const relatedBlogs = allBlogs.filter((b) => b.slug !== slug).slice(0, 2);

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
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black pb-24">
      <SEO
        title={`${translatedTitle} - Fastlaunch Blog`}
        description={translatedExcerpt}
      />

      {/* Main Container with Generous Left & Right Page Padding */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 pt-10">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('blogPostPage.backToBlogs', 'Back to All Blogs')}
        </Link>

        {/* Header Hero Section: Split Layout (Image Left, Text & Meta Right) */}
        <header className="pb-8 border-b border-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-center">
            {/* Left Column: Square Graphic Cover Image */}
            <div className="flex justify-center md:justify-start shrink-0">
              <div className="relative w-48 sm:w-56 lg:w-64 aspect-square rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 flex items-center justify-center p-2">
                <img
                  src={blog.image}
                  alt={translatedTitle}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Right Column: Badges, Title, Subtitle, and Meta Info */}
            <div className="flex flex-col justify-center space-y-3">
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 text-xs font-semibold backdrop-blur-md">
                  {translatedCategory}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-white">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  {translatedBadge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                {translatedTitle}
              </h1>

              {/* Subtitle */}
              {blog.subtitle && (
                <p className="text-xs sm:text-sm text-neutral-300 italic font-medium leading-relaxed border-l-2 border-neutral-500 pl-3">
                  {blog.subtitle}
                </p>
              )}

              {/* Meta Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-900/80 text-xs text-neutral-400">
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
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {blog.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-white">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    {blog.readTime}
                  </span>
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <Share2 className="w-3 h-3" />
                  {t('blogPostPage.share', 'Share')}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body: Structured Visual Hierarchy (Scoped Indentation) */}
        <article className="py-10 text-left w-full space-y-2">
          {blog.body && Array.isArray(blog.body) && blog.body.length > 0 ? (
            <PortableText value={blog.body} components={portableTextComponents} />
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // H1: Top-level section title (No left border line, clean pure white)
                h1: ({ children }) => (
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-10 mb-4 pb-2 border-b border-neutral-900">
                    {children}
                  </h2>
                ),
                // H2: Subheading (Shifted right with pl-4 sm:pl-6 to show scope)
                h2: ({ children }) => (
                  <h3 className="text-base sm:text-lg font-bold text-white mt-8 mb-3 flex items-center gap-2.5 pl-4 sm:pl-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    {children}
                  </h3>
                ),
                // H3: Nested Subheading (Shifted further right with pl-8 sm:pl-10)
                h3: ({ children }) => (
                  <h4 className="text-sm sm:text-base font-semibold text-neutral-200 mt-6 mb-2 pl-8 sm:pl-10">
                    {children}
                  </h4>
                ),
                // Paragraphs: Shifted right under subheadings (pl-4 sm:pl-6)
                p: ({ children }) => (
                  <p className="text-neutral-200 leading-relaxed font-normal text-sm sm:text-base mb-5 pl-4 sm:pl-6">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-white bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="text-neutral-300 italic font-medium">{children}</em>
                ),
                // Bullet lists & numbered lists: Shifted further right (pl-8 sm:pl-12) to show clear scope
                ul: ({ children }) => (
                  <ul className="space-y-2.5 my-4 pl-8 sm:pl-12">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-2.5 my-4 pl-8 sm:pl-12 list-decimal text-neutral-200 text-xs sm:text-sm">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="flex gap-2.5 items-start text-neutral-200 text-xs sm:text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    <div>{children}</div>
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-8 ml-4 sm:ml-6 px-6 py-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-white font-medium text-sm sm:text-base leading-relaxed shadow-lg">
                    {children}
                  </blockquote>
                ),
                // Table Component: Left-Aligned, Clean Padding & Borders
                table: ({ children }) => (
                  <div className="flex justify-start my-8 pl-4 sm:pl-6 w-full">
                    <div className="overflow-x-auto w-full border border-neutral-800 rounded-xl bg-neutral-950 shadow-xl">
                      <table className="w-full text-left text-xs sm:text-sm text-white border-collapse">
                        {children}
                      </table>
                    </div>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-neutral-900 text-neutral-200 font-bold uppercase text-[11px] tracking-wider border-b border-neutral-800">
                    {children}
                  </thead>
                ),
                th: ({ children }) => (
                  <th className="p-3.5 sm:p-4 font-bold border-r border-neutral-800 last:border-r-0 text-left text-white">{children}</th>
                ),
                td: ({ children }) => (
                  <td className="p-3.5 sm:p-4 border-t border-neutral-900 border-r border-neutral-900/80 last:border-r-0 text-neutral-300 font-normal text-left leading-relaxed">{children}</td>
                ),
              }}
            >
              {activeContent}
            </ReactMarkdown>
          )}
        </article>

        {/* CTA Box */}
        <section className="mt-12">
          <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-neutral-950 border border-neutral-800 text-center space-y-4 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {t('blogPostPage.ctaTitle', 'Ready to Build Your Autonomous Stack or D2C Brand?')}
            </h3>
            <p className="max-w-lg mx-auto text-neutral-300 text-xs sm:text-sm font-normal">
              {t('blogPostPage.ctaDesc', 'Fastlaunch delivers turnkey AI systems, white-label e-commerce platforms, and high-velocity engineering in days.')}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button asChild size="sm" className="bg-white hover:bg-neutral-200 text-black font-bold px-6 border-0 shadow-lg">
                <Link to="/booking">{t('blogPostPage.bookCall', 'Book a Call')}</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-neutral-700 text-white hover:bg-neutral-900">
                <Link to="/services">{t('blogPostPage.exploreServices', 'Explore Services')}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-16 pt-10 border-t border-neutral-900">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-left">{t('blogPostPage.relatedTitle', 'Related Articles')}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedBlogs.map((rBlog) => {
              const rTitle = rBlog.title;
              const rExcerpt = rBlog.excerpt;
              const rCategory = rBlog.category;

              return (
                <Link
                  key={rBlog.slug}
                  to={`/blog/${rBlog.slug}`}
                  className="group p-4 rounded-xl bg-neutral-950 border border-neutral-850 hover:border-neutral-600 transition-all space-y-2 text-left flex flex-col items-start"
                >
                  <div className="text-[10px] font-semibold text-neutral-400">{rCategory}</div>
                  <h4 className="text-sm font-bold text-white group-hover:text-neutral-300 transition-colors line-clamp-2">
                    {rTitle}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">{rExcerpt}</p>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:translate-x-0.5 transition-transform pt-1">
                    {t('blogListPage.readMore', 'Read')} <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
