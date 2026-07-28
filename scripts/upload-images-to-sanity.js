import fs from 'fs'
import path from 'path'
import { getCliClient } from 'sanity/cli'
import { blogsData } from '../src/data/blogsData.js'

const client = getCliClient({
  apiVersion: '2024-01-01',
})

async function uploadImagesToSanity() {
  console.log('Uploading local cover images to Sanity Asset Store...')

  for (const blog of blogsData) {
    if (!blog.image) continue

    const relativeImagePath = blog.image.replace(/^\//, '')
    const fullImagePath = path.join(process.cwd(), 'public', relativeImagePath)

    if (!fs.existsSync(fullImagePath)) {
      console.warn(`⚠️ Image file not found: ${fullImagePath}`)
      continue
    }

    try {
      console.log(`Uploading cover image for "${blog.title}" (${path.basename(fullImagePath)})...`)
      
      const fileStream = fs.createReadStream(fullImagePath)
      const imageAsset = await client.assets.upload('image', fileStream, {
        filename: path.basename(fullImagePath),
      })

      console.log(`  └─ Asset created: ${imageAsset._id}`)

      // Patch the blog post document in Sanity with the image asset reference
      const docId = `post-${blog.slug}`
      await client
        .patch(docId)
        .set({
          mainImage: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id,
            },
            alt: blog.title,
          },
        })
        .commit()

      console.log(`  └─ Attached mainImage to document ${docId}`)
    } catch (err) {
      console.error(`❌ Failed to upload image for "${blog.title}":`, err.message)
    }
  }

  console.log('\n🎉 Image upload completed! Refresh Sanity Studio to see your cover images.')
}

uploadImagesToSanity()
