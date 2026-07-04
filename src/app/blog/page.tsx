import React from 'react'
import BlogClient from './BlogClient'
import { blogPosts } from '@/app/data/blogData'

export const metadata = {
  title: 'Blog & News - Bright Life Educational Institute',
  description: 'Expert study tips, board exam preparation guides, language fluency strategies, and official institute announcements.',
}

export default function BlogPage() {
  return <BlogClient posts={blogPosts} />
}
