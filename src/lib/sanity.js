import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { blogsData } from '@/data/blogsData';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true, // CDN mode for production speed
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/**
 * Builds optimized Sanity CDN image URL
 */
export function urlFor(source) {
  if (!builder || !source) return null;
  try {
    return builder.image(source).auto('format').url();
  } catch (err) {
    return null;
  }
}

/**
 * Normalizes a Sanity post document into the Fastlaunch Blog object format
 */
export function normalizeSanityPost(post) {
  const coverImageUrl = post.mainImage ? urlFor(post.mainImage) : null;

  // Match local blogsData image by slug if Sanity image is empty
  const matchingLocal = blogsData.find(
    (b) => b.slug === post.slug || b.translationKey === post.slug
  );

  const finalImage =
    coverImageUrl ||
    matchingLocal?.image ||
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

  return {
    id: post._id,
    slug: post.slug,
    title: post.title || 'Untitled Post',
    excerpt: post.excerpt || 'Read the latest article on Fastlaunch.',
    category: post.category || 'Engineering',
    badgeText: post.badgeText || post.category || 'Fastlaunch Insights',
    date: formattedDate,
    readTime: post.readTime || '5 min read',
    image: finalImage,
    body: post.body || [],
    isSanity: true,
  };
}

/**
 * Fetch all published posts from Sanity CMS (GROQ query)
 * GROQ: *[_type == "post"] | order(publishedAt desc)
 */
export async function getSanityPosts() {
  if (!sanityClient) {
    console.info('Sanity Project ID not set. Falling back to static blogsData.');
    return blogsData;
  }

  try {
    const query = `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      category,
      badgeText,
      excerpt,
      readTime,
      publishedAt,
      mainImage,
      body
    }`;

    const sanityPosts = await sanityClient.fetch(query);

    if (!sanityPosts || sanityPosts.length === 0) {
      return blogsData;
    }

    return sanityPosts.map(normalizeSanityPost);
  } catch (error) {
    console.warn('Error fetching from Sanity API, falling back to static blogsData:', error);
    return blogsData;
  }
}

/**
 * Fetch single post by slug from Sanity
 */
export async function getSanityPostBySlug(slug) {
  if (!sanityClient || !slug) return null;

  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      category,
      badgeText,
      excerpt,
      readTime,
      publishedAt,
      mainImage,
      body
    }`;

    const post = await sanityClient.fetch(query, { slug });
    return post ? normalizeSanityPost(post) : null;
  } catch (error) {
    console.warn('Error fetching single post from Sanity:', error);
    return null;
  }
}
