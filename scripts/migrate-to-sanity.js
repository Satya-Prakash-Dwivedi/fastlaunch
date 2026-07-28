import { getCliClient } from 'sanity/cli'
import { blogsData } from '../src/data/blogsData.js'

const client = getCliClient({
  apiVersion: '2024-01-01',
})

async function migrateBlogs() {
  console.log(`Starting migration of ${blogsData.length} blog posts to Sanity CMS...`)

  for (const blog of blogsData) {
    const rawContent =
      typeof blog.content === 'object' && blog.content !== null
        ? blog.content.en || ''
        : String(blog.content || '')

    // Convert raw markdown text into Sanity PortableText blocks
    const paragraphs = rawContent.split('\n\n').filter(Boolean)
    const bodyBlocks = paragraphs.map((para, idx) => {
      const isHeader = para.startsWith('# ') || para.startsWith('## ') || para.startsWith('### ')
      const cleanText = para.replace(/^#+\s*/, '').trim()
      const style = para.startsWith('# ')
        ? 'h1'
        : para.startsWith('## ')
        ? 'h2'
        : para.startsWith('### ')
        ? 'h3'
        : 'normal'

      return {
        _type: 'block',
        _key: `block_${idx}`,
        style,
        children: [
          {
            _type: 'span',
            _key: `span_${idx}`,
            text: cleanText,
            marks: [],
          },
        ],
      }
    })

    const doc = {
      _type: 'post',
      _id: `post-${blog.slug}`,
      title: blog.title,
      slug: {
        _type: 'slug',
        current: blog.slug,
      },
      category: blog.category || 'Engineering',
      badgeText: blog.badgeText || 'Fastlaunch Insights',
      excerpt: blog.excerpt || '',
      readTime: blog.readTime || '5 min read',
      publishedAt: new Date().toISOString(),
      body: bodyBlocks,
    }

    try {
      const created = await client.createOrReplace(doc)
      console.log(`✅ Migrated: "${created.title}" (Slug: ${created.slug.current})`)
    } catch (err) {
      console.error(`❌ Failed to migrate "${blog.title}":`, err.message)
    }
  }

  console.log('\n🎉 Migration completed successfully!')
}

migrateBlogs()
