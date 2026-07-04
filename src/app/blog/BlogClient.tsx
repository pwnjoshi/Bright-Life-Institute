'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { BlogPost } from '@/app/data/blogData'
import FacebookFeed from '@/app/components/FacebookFeed'

interface BlogClientProps {
  posts: BlogPost[]
}

const CATEGORIES = ['All', 'Study Tips', 'Language Guide', 'Career Guide']

export default function BlogClient({ posts }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Visual Header */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-20 bg-slate-50/50 border-b border-slate-100 overflow-hidden text-center">
        {/* Glow orbs */}
        <div className="absolute top-10 left-[15%] h-64 w-64 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 right-[15%] h-64 w-64 rounded-full bg-brand-red/4 blur-3xl pointer-events-none" />
        
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl px-4 relative z-10 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 shadow-xs pl-2 pr-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-slate-600">
            <span className="bg-brand-red text-white text-[9px] font-black px-2.5 py-0.5 rounded-full mr-1">UPDATES</span>
            Blogs & Guidance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">Latest News & Guidance</h1>
          <p className="text-slate-500 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Expert strategies, prep tips, and license study advice straight from our experienced tutors.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <div className="container mx-auto max-w-6xl px-4 py-10 sm:py-16 space-y-8 sm:space-y-12">
        {/* Search & Tabs control bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-b border-slate-100 pb-6">
          {/* Swipeable Tabs */}
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none pb-2 -mx-4 px-4 w-full md:w-auto gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all hover:cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-slate-50 border border-slate-200/60 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50/80 border border-slate-200/80 text-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:border-slate-350 transition-all focus:bg-white"
            />
            <Icon
              icon="lucide:search"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              width={16}
            />
          </div>
        </div>

        {/* Split Grid Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Posts Column - 8 Cols */}
          <div className="lg:col-span-8">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPosts.map((post, idx) => (
                  <article
                    key={post.slug}
                    className="group bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Visual Thumbnail */}
                    <div className="relative aspect-video bg-slate-50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 to-transparent z-10"></div>
                      {/* Category tag */}
                      <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-xs text-slate-900 border border-slate-200/50 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs">
                        {post.category}
                      </span>
                      
                      {/* Decorative background vectors representing course imagery */}
                      <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100">
                        <Icon
                          icon={
                            post.category === 'Study Tips'
                              ? 'lucide:book-open'
                              : post.category === 'Language Guide'
                              ? 'lucide:languages'
                              : 'lucide:graduation-cap'
                          }
                          className="text-slate-200 group-hover:scale-110 transition-transform duration-300"
                          width={80}
                        />
                      </div>
                    </div>

                    {/* Info and Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-slate-400 text-[10px] font-semibold">
                          <span className="flex items-center gap-1">
                            <Icon icon="lucide:calendar" width={11} />
                            {post.date}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                          <span className="flex items-center gap-1">
                            <Icon icon="lucide:clock" width={11} />
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-red transition-colors duration-200 line-clamp-2">
                          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                            {post.title}
                          </Link>
                        </h2>

                        <p className="text-slate-500 text-xs sm:text-sm font-medium line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Author profile tag (Hidden, replaced with generic Notice) */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        <span>Bright Life Notice</span>
                        <Icon icon="lucide:bell" width={12} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-3">
                <Icon icon="lucide:inbox" className="text-slate-300 mx-auto" width={48} />
                <h3 className="text-slate-700 font-bold text-sm sm:text-base">No articles found</h3>
                <p className="text-slate-400 text-xs max-w-xs mx-auto leading-relaxed">
                  Try adjusting your filters or search keywords to locate articles.
                </p>
              </div>
            )}
          </div>

          {/* Right Live Social Sidebar Column - 4 Cols */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <FacebookFeed />
          </aside>
        </div>
      </div>
    </div>
  )
}
