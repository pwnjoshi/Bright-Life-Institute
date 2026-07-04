'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { BlogPost } from '@/app/data/blogData'

interface PostClientProps {
  post: BlogPost
  related: BlogPost[]
}

export default function PostClient({ post, related }: PostClientProps) {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100
        setReadingProgress(progress)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-brand-red z-50 transition-all duration-100"
        style={{ width: `${readingProgress}%` }}
      ></div>

      <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 text-xs sm:text-sm font-bold mb-8 transition-colors group"
          >
            <Icon
              icon="lucide:arrow-left"
              className="group-hover:-translate-x-1 transition-transform duration-200"
              width={14}
            />
            Back to Articles
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Article Content - 8 Cols */}
            <article className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* Header Info */}
              <div className="space-y-4">
                <span className="bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                  {post.title}
                </h1>

                {/* Author Card & Reading stats */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-y border-slate-100 py-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      <Icon icon="lucide:bell" width={14} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Official Notice</p>
                      <p className="text-[9px] font-semibold text-slate-400">Bright Life Administration</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Icon icon="lucide:calendar" width={12} />
                      {post.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1">
                      <Icon icon="lucide:clock" width={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Styled Category Vector Banner */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-12 border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent"></div>
                <Icon
                  icon={
                    post.category === 'Study Tips'
                      ? 'lucide:book-open'
                      : post.category === 'Language Guide'
                      ? 'lucide:languages'
                      : 'lucide:graduation-cap'
                  }
                  className="text-slate-150 relative z-10"
                  width={150}
                />
              </div>

              {/* Dynamic HTML Content */}
              <div
                className="prose prose-slate max-w-none text-xs sm:text-base leading-relaxed text-slate-650 font-medium space-y-6
                  prose-h3:text-lg prose-h3:font-bold prose-h3:text-slate-900 prose-h3:pt-4
                  prose-p:leading-relaxed prose-p:font-medium
                  prose-strong:font-bold prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>

              {/* Sharing links */}
              <div className="border-t border-slate-100 pt-6 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Share this article:</span>
                <div className="flex gap-2">
                  <a
                    href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-200 hover:border-slate-350 hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all focus:outline-none"
                  >
                    <Icon icon="lucide:facebook" width={14} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-200 hover:border-slate-350 hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all focus:outline-none"
                  >
                    <Icon icon="lucide:twitter" width={14} />
                  </a>
                  <a
                    href={`https://linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-200 hover:border-slate-350 hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all focus:outline-none"
                  >
                    <Icon icon="lucide:linkedin" width={14} />
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar - 4 Cols */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Quick Admission CTA */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-4 relative overflow-hidden border border-slate-800 shadow-lg">
                {/* Decorative glowing backdrops */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-brand-red/10 rounded-full blur-xl pointer-events-none"></div>

                <div className="relative z-10 space-y-3">
                  <h3 className="text-lg font-bold">Ready to Start Learning?</h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium">
                    Secure your batch seat today. We offer flexible timetables and expert instructors.
                  </p>
                  <Link
                    href="/admission"
                    className="w-full bg-brand-yellow hover:bg-yellow-350 text-slate-950 font-extrabold py-3 rounded-xl block text-center transition-all duration-200 text-xs uppercase tracking-wider"
                  >
                    Apply For Admission
                  </Link>
                </div>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
                    Recommended Reading
                  </h3>
                  <div className="space-y-4">
                    {related.map((item) => (
                      <div key={item.slug} className="flex gap-3 group">
                        <div className="relative h-14 w-20 rounded-lg overflow-hidden bg-slate-50 border border-slate-200/50 shrink-0 flex items-center justify-center">
                          <Icon
                            icon={
                              item.category === 'Study Tips'
                                ? 'lucide:book-open'
                                : item.category === 'Language Guide'
                                ? 'lucide:languages'
                                : 'lucide:graduation-cap'
                            }
                            className="text-slate-300"
                            width={24}
                          />
                        </div>
                        <div className="min-w-0 space-y-1">
                          <span className="text-[9px] font-bold text-brand-red uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-brand-red transition-colors duration-200">
                            <Link href={`/blog/${item.slug}`} className="focus:outline-none">
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
