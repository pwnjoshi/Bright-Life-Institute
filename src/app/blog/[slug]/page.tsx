import React from 'react'
import { notFound } from 'next/navigation'
import PostClient from './PostClient'
import { blogPosts } from '@/app/data/blogData'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PostPageProps) {
  const resolvedParams = await params
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)
  if (!post) return {}

  return {
    title: `${post.title} - Bright Life`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const resolvedParams = await params
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)
  if (!post) {
    notFound()
  }

  // Filter 3 related recommendations (excluding current)
  const related = blogPosts.filter((p) => p.slug !== resolvedParams.slug).slice(0, 3)

  return <PostClient post={post} related={related} />
}
