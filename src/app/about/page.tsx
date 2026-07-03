import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export const metadata = {
  title: 'About Us - Bright Life Educational Institute',
  description: 'Learn more about Bright Life, its history, values, and guarantee of quality education.',
}

export default function AboutPage() {
  const guarantees = [
    {
      num: '01',
      title: 'Best Ranked Institution',
      description: 'Ranked as leading & reputed institution with Academic excellence in Kanchanpur.',
    },
    {
      num: '02',
      title: 'Best Support & Mentorship',
      description: '100% full support, guidance, and one-on-one Saturday doubt solving sessions.',
    },
    {
      num: '03',
      title: 'Qualified Teachers',
      description: 'Classes led by mentors with 20+ years of active tutoring experience.',
    },
    {
      num: '04',
      title: 'Best Quality Education',
      description: 'Uncompromising dedication to syllabus coverage, model tests, and conceptual clarity.',
    },
    {
      num: '05',
      title: 'Proven Success Strategies',
      description: 'Focused test-taking tactics, board preparation plans, and confidence-building coaching.',
    },
    {
      num: '06',
      title: 'Saturday Doubt Sessions',
      description: 'Dedicated weekly doubt clearing slots to ensure every concept is solid.',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      
      {/* Premium Typographic Header (Light Theme) */}
      <section className="relative pt-40 pb-20 bg-slate-50/50 border-b border-slate-100 overflow-hidden text-center">
        {/* Soft light background glow orbs */}
        <div className="absolute top-10 left-[15%] h-64 w-64 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 right-[15%] h-64 w-64 rounded-full bg-brand-red/4 blur-3xl pointer-events-none" />
        
        {/* Subtle grid dots backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 shadow-xs pl-2 pr-3.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase text-slate-600">
            <span className="bg-brand-red text-white text-[9px] font-black px-2.5 py-0.5 rounded-full mr-1">ESTD. 2005</span>
            Bright Life
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 leading-tight">
            About Bright Life
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Mahendranagar&apos;s leading tutoring and coaching academy, committed to academic excellence.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="space-y-6">
            <span className="text-brand-red text-xs font-black uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-955 leading-tight">
              Welcome to Bright Life Educational Institute
            </h2>
            <div className="h-1 w-12 bg-brand-red rounded-full mx-auto"></div>
            
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              <p>
                Bright Life had a very humble beginning in 2005. It was set up with a clear vision: to impart top-tier quality education and provide proper direction to students aspiring for academic success and career growth in their choice of fields.
              </p>
              <p>
                Over the past two decades, we have evolved into Mahendranagar&apos;s premier coaching hub. We focus not just on textbook learning, but on building strong conceptual foundations, exam strategies, and overall confidence.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 justify-center">
              <Link href="/courses" className="bg-slate-950 text-white font-extrabold px-6 py-3 rounded-xl hover:bg-slate-800 transition duration-300 text-xs tracking-wider uppercase">
                Explore Courses
              </Link>
              <Link href="/admission" className="border border-slate-200 text-slate-950 hover:bg-slate-50 font-extrabold px-6 py-3 rounded-xl transition duration-300 text-xs tracking-wider uppercase">
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-3 mb-16">
            <span className="text-primary text-xs font-black uppercase tracking-widest">Our Commitment</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950">Guarantees From Bright Life</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">We stand for quality, consistency, and unparalleled academic support.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Giant watermark number */}
                <span className="absolute -top-4 -right-2 text-[7rem] font-black text-slate-100 select-none leading-none pointer-events-none transition-colors duration-300 group-hover:text-slate-200/50">
                  {item.num}
                </span>

                {/* Content */}
                <div className="relative z-10 space-y-3 pt-6">
                  <h3 className="text-lg font-black text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-brand-red rounded-b-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
