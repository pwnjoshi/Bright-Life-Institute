import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brightlife.edu.np'
  const routes = [
    '',
    '/about',
    '/courses',
    '/staffs',
    '/admission',
    '/contact',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : (route === '/privacy' || route === '/terms') ? 0.5 : 0.8,
  }))
}
