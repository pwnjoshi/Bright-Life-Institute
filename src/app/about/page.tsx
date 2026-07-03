import React from 'react'
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
      title: 'Top-Ranked Institution',
      description: 'Ranked as the leading and most trusted tutoring hub for board and university coaching in Kanchanpur.',
      icon: 'lucide:award'
    },
    {
      num: '02',
      title: 'Individual Focus',
      description: 'Small batch sizes to ensure personalized attention and clear academic mentoring for every student.',
      icon: 'lucide:users'
    },
    {
      num: '03',
      title: 'Saturday Doubt Sessions',
      description: 'Dedicated one-on-one Saturday support classes to clear tough questions and reinforce key subjects.',
      icon: 'lucide:help-circle'
    },
    {
      num: '04',
      title: 'Comprehensive Syllabus Cover',
      description: 'Thorough coverage of syllabi with board-standard model exams, revision plans, and writing strategies.',
      icon: 'lucide:book-open'
    },
    {
      num: '05',
      title: 'Experienced Faculty',
      description: 'Mentorship led by senior tutors with decades of board-examination evaluation experience.',
      icon: 'lucide:graduation-cap'
    },
    {
      num: '06',
      title: 'Career Pathway Counseling',
      description: 'Counseling support to assist school and college graduates in selecting matching career pathways.',
      icon: 'lucide:compass'
    },
  ]

  const values = [
    { title: 'Academic Integrity', desc: 'Fostering honest learning habits, active student participation, and rigorous evaluation methodologies.', icon: 'lucide:shield-check' },
    { title: 'Student Success', desc: 'Placing student understanding and confidence at the center of all tutoring activities.', icon: 'lucide:trending-up' },
    { title: 'Inclusivity', desc: 'Providing accessible, affordable, and equal educational opportunities to all learning groups.', icon: 'lucide:heart' }
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

        <div className="container mx-auto max-w-4xl px-4 relative z-10 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 shadow-xs pl-2 pr-3.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase text-slate-600">
            <span className="bg-brand-red text-white text-[9px] font-black px-2.5 py-0.5 rounded-full mr-1">ESTD. 2005</span>
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 leading-tight">
            About Bright Life
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Mahendranagar&apos;s leading tutoring and coaching academy, committed to academic excellence.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white scroll-reveal">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Block */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative p-10 bg-slate-950 text-white rounded-3xl overflow-hidden shadow-xl border border-slate-900">
                {/* Floating ambient colored blur circles inside the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-1.5 bg-brand-yellow text-slate-950 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xs">
                    <Icon icon="lucide:sparkles" width={10} />
                    Leading Institute
                  </div>
                  <h3 className="text-3xl font-extrabold leading-tight text-white">
                    20+ Years of Academic Excellence
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                    Since 2005, we have committed ourselves to preparing students for school boards, entrance tests, and competitive government career tracks.
                  </p>
                  
                  <div className="pt-4 border-t border-white/10 flex items-center gap-6">
                    <div>
                      <p className="text-2xl font-black text-brand-yellow">5K+</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Students Taught</p>
                    </div>
                    <div className="h-8 w-px bg-white/10"></div>
                    <div>
                      <p className="text-2xl font-black text-brand-red">100%</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Success Focus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Text Block */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <div className="space-y-2">
                <span className="text-brand-red text-xs font-black uppercase tracking-widest">Our Story</span>
                 <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                  Welcome to Bright Life Educational Institute
                </h2>
                <div className="h-[2px] w-8 bg-brand-red rounded-full"></div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  Bright Life had a very humble beginning in 2005. It was set up with a clear vision: to impart top-tier quality education and provide proper direction to students aspiring for academic success and career growth in their choice of fields.
                </p>
                <p>
                  Over the past two decades, we have evolved into Mahendranagar&apos;s premier coaching hub. We focus not just on textbook learning, but on building strong conceptual foundations, exam strategies, and overall confidence.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/courses" className="bg-slate-950 text-white font-extrabold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition duration-300 text-xs tracking-wider uppercase">
                  Explore Courses
                </Link>
                <Link href="/admission" className="border border-slate-200 text-slate-950 hover:bg-slate-50 font-extrabold px-6 py-3.5 rounded-xl transition duration-300 text-xs tracking-wider uppercase">
                  Apply Online
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100 scroll-reveal">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-3 mb-16">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Guiding Principles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Our Core Values</h2>
            <div className="h-[2px] w-8 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-250 transition-all duration-350 shadow-xs space-y-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 text-brand-red flex items-center justify-center border border-slate-100">
                  <Icon icon={val.icon} width={18} height={18} />
                </div>
                <h3 className="text-base font-bold text-slate-900">{val.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-24 bg-white border-t border-slate-100 scroll-reveal">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-3 mb-16">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Our Commitment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">Guarantees From Bright Life</h2>
            <div className="h-[2px] w-8 bg-brand-red mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm max-w-md mx-auto pt-2 font-medium">We stand for quality, consistency, and unparalleled academic support.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-slate-50/50 hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
              >
                {/* Icon indicator */}
                <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 text-brand-red flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition duration-300">
                  <Icon icon={item.icon} width={18} height={18} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
