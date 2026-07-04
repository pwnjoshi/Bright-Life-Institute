import { MetadataRoute } from 'next'
import { blogPosts } from '@/app/data/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brightlife.edu.np'
  const staticRoutes = [
    '',
    '/about',
    '/courses',
    '/staffs',
    '/blog',
    '/admission',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : (route === '/privacy' || route === '/terms') ? 0.3 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  ]

  return sitemapEntries
}
