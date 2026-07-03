'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'language-career'>('all')
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index)
  }

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMouse({ x, y })
    }
    const hero = heroRef.current
    hero?.addEventListener('mousemove', handleMouse)
    return () => hero?.removeEventListener('mousemove', handleMouse)
  }, [])

  const achievements = [
    { label: 'SEE Board Toppers', count: '12+', year: '2080 B.S.' },
    { label: 'BBS District Ranks', count: '5+', year: 'T.U. Exams' },
    { label: 'TSC Teacher Licenses', count: '85+', year: 'Govt Portal' },
    { label: 'IELTS 7.5+ Band Achievers', count: '140+', year: 'Global Standard' },
  ]

  const stats = [
    { number: '16+', label: 'Years Experience', icon: 'lucide:award', desc: 'Trust since 2005', color: 'text-blue-500 bg-blue-50' },
    { number: '5,000+', label: 'Students', icon: 'lucide:users', desc: 'Active learners', color: 'text-indigo-500 bg-indigo-50' },
    { number: '20+', label: 'Teachers', icon: 'lucide:graduation-cap', desc: 'Expert mentors', color: 'text-cyan-500 bg-cyan-50' },
    { number: '100%', label: 'Success Rate', icon: 'lucide:badge-check', desc: 'Proven results', color: 'text-emerald-500 bg-emerald-50' },
  ]

  const features = [
    { num: '01', title: 'Experienced Faculty', description: 'Learn from educators with 20+ years of coaching experience who know exactly what boards and universities expect.' },
    { num: '02', title: 'Affordable Fees', description: 'Premium education made accessible — quality resources, expert mentors, and structured learning at honest pricing.' },
    { num: '03', title: 'Interactive Learning', description: 'Live discussions, smart presentations, and hands-on practice — not passive lectures, but real engagement.' },
    { num: '04', title: 'Weekly Doubt Sessions', description: 'Every Saturday is dedicated to clearing your doubts one-on-one, so no question ever goes unanswered.' },
    { num: '05', title: 'Small Batch Sizes', description: 'Limited seats per batch mean your teacher actually knows your name, your pace, and your weak spots.' },
    { num: '06', title: 'Career Guidance', description: 'Beyond academics — pathway counseling, mentorship programs, and clear direction for your future.' },
  ]

  const courses = [
    // Academic Packages
    { name: '5-8 Tuition Class', category: 'academic', duration: 'Yearly', time: '6:00 AM - 8:00 AM', badge: 'Basic Level', desc: 'Booster tuition classes covering core subjects for Grades 5 to 8.', icon: 'lucide:book-open', rating: '4.8', students: '120+', accent: 'from-rose-500 to-orange-400', accentText: 'text-rose-600', accentBg: 'bg-rose-50', accentBorder: 'border-rose-200', accentBtn: 'bg-rose-600 hover:bg-rose-700' },
    { name: 'SEE Package', category: 'academic', duration: 'Yearly', time: '4:00 PM - 6:00 PM', badge: 'Grade 10', desc: 'Complete board preparation for SEE with mock tests and analysis.', icon: 'lucide:book-check', rating: '4.9', students: '240+', accent: 'from-red-600 to-rose-400', accentText: 'text-red-600', accentBg: 'bg-red-50', accentBorder: 'border-red-200', accentBtn: 'bg-red-600 hover:bg-red-700' },
    { name: '+2 Package', category: 'academic', duration: 'Yearly', time: '6:30 AM - 8:30 AM', badge: 'High School', desc: 'Science & Management classes for Grades 11 and 12 (+2 Level).', icon: 'lucide:brain', rating: '4.8', students: '180+', accent: 'from-violet-600 to-purple-400', accentText: 'text-violet-600', accentBg: 'bg-violet-50', accentBorder: 'border-violet-200', accentBtn: 'bg-violet-600 hover:bg-violet-700' },
    { name: "Bachelor's Level Package", category: 'academic', duration: '4 Years', time: '6:00 AM - 8:00 AM', badge: 'TU, FWU & PU', desc: 'Coaching for BBA, BCA, BBS, BA, B.Ed, B.Sc subjects.', icon: 'lucide:award', rating: '4.9', students: '320+', accent: 'from-blue-600 to-indigo-400', accentText: 'text-blue-600', accentBg: 'bg-blue-50', accentBorder: 'border-blue-200', accentBtn: 'bg-blue-600 hover:bg-blue-700' },
    { name: "Master's Level Package", category: 'academic', duration: '2 Years', time: '6:00 PM - 8:00 PM', badge: 'Postgraduate', desc: 'Advanced exam coaching for M.A, M.Ed, MBS, MBM courses.', icon: 'lucide:laptop', rating: '4.9', students: '110+', accent: 'from-indigo-600 to-blue-400', accentText: 'text-indigo-600', accentBg: 'bg-indigo-50', accentBorder: 'border-indigo-200', accentBtn: 'bg-indigo-600 hover:bg-indigo-700' },

    // Language & Career
    { name: 'Basic English Language', category: 'language-career', duration: '3 Months', time: '11:00 AM - 1:00 PM', badge: 'Fluency', desc: 'Grammar, vocabulary and conversation practice for beginners.', icon: 'lucide:message-circle', rating: '4.7', students: '150+', accent: 'from-emerald-500 to-teal-400', accentText: 'text-emerald-600', accentBg: 'bg-emerald-50', accentBorder: 'border-emerald-200', accentBtn: 'bg-emerald-600 hover:bg-emerald-700' },
    { name: 'Advance English Language', category: 'language-career', duration: '3 Months', time: '1:00 PM - 3:00 PM', badge: 'Advanced', desc: 'Professional public speaking, presentation, and communication.', icon: 'lucide:mic', rating: '4.8', students: '120+', accent: 'from-teal-500 to-cyan-400', accentText: 'text-teal-600', accentBg: 'bg-teal-50', accentBorder: 'border-teal-200', accentBtn: 'bg-teal-600 hover:bg-teal-700' },
    { name: 'Bridge Course', category: 'language-career', duration: '2 Months', time: '8:00 AM - 10:00 AM', badge: 'After SEE', desc: 'Transition courses preparing SEE graduates for +2 curriculum.', icon: 'lucide:sparkles', rating: '4.8', students: '150+', accent: 'from-amber-500 to-yellow-400', accentText: 'text-amber-600', accentBg: 'bg-amber-50', accentBorder: 'border-amber-200', accentBtn: 'bg-amber-500 hover:bg-amber-600' },
    { name: 'शिक्षक सेवा आयोग तयारी (TSC)', category: 'language-career', duration: '3 Months', time: '5:00 PM - 7:00 PM', badge: 'Govt Prep', desc: 'Preparation classes for Teacher Service Commission licenses.', icon: 'lucide:graduation-cap', rating: '4.9', students: '190+', accent: 'from-sky-600 to-blue-400', accentText: 'text-sky-600', accentBg: 'bg-sky-50', accentBorder: 'border-sky-200', accentBtn: 'bg-sky-600 hover:bg-sky-700' },
    { name: 'लोक सेवा आयोग तयारी (Loksewa)', category: 'language-career', duration: '3 Months', time: '6:00 AM - 8:00 AM', badge: 'PSC Prep', desc: 'Civil service examination preparation for government posts.', icon: 'lucide:building-2', rating: '4.9', students: '280+', accent: 'from-slate-700 to-slate-500', accentText: 'text-slate-700', accentBg: 'bg-slate-100', accentBorder: 'border-slate-300', accentBtn: 'bg-slate-700 hover:bg-slate-800' },
    { name: 'Banking तयारी (Banking Prep)', category: 'language-career', duration: '3 Months', time: '6:00 AM - 8:00 AM', badge: 'Banking', desc: 'Specialized training for banking sector recruitment exams.', icon: 'lucide:landmark', rating: '4.8', students: '140+', accent: 'from-green-600 to-emerald-400', accentText: 'text-green-600', accentBg: 'bg-green-50', accentBorder: 'border-green-200', accentBtn: 'bg-green-600 hover:bg-green-700' },
    { name: 'Thesis & Report Consultation', category: 'language-career', duration: 'Custom', time: 'Flexible', badge: 'Thesis', desc: 'Expert academic consultation for Bachelor and Master reports.', icon: 'lucide:file-text', rating: '4.9', students: '95+', accent: 'from-pink-600 to-rose-400', accentText: 'text-pink-600', accentBg: 'bg-pink-50', accentBorder: 'border-pink-200', accentBtn: 'bg-pink-600 hover:bg-pink-700' },
    { name: 'Video Editing', category: 'language-career', duration: '3 Months', time: '1:00 PM - 3:00 PM', badge: 'Creative', desc: 'Master editing with Premiere Pro, After Effects, and DaVinci Resolve.', icon: 'lucide:video', rating: '4.8', students: '110+', accent: 'from-orange-500 to-amber-400', accentText: 'text-orange-600', accentBg: 'bg-orange-50', accentBorder: 'border-orange-200', accentBtn: 'bg-orange-600 hover:bg-orange-700' },
    { name: 'Graphics Designing', category: 'language-career', duration: '3 Months', time: '10:00 AM - 12:00 PM', badge: 'Design', desc: 'Master visual layouts, typography, Photoshop, and Illustrator.', icon: 'lucide:palette', rating: '4.9', students: '140+', accent: 'from-pink-500 to-rose-400', accentText: 'text-pink-600', accentBg: 'bg-pink-50', accentBorder: 'border-pink-200', accentBtn: 'bg-pink-600 hover:bg-pink-700' },
    { name: 'Web Development', category: 'language-career', duration: '3 Months', time: '8:00 AM - 10:00 AM', badge: 'Development', desc: 'Full-stack development training covering HTML, CSS, JavaScript, and Node.js.', icon: 'lucide:globe', rating: '4.9', students: '180+', accent: 'from-blue-600 to-cyan-400', accentText: 'text-blue-600', accentBg: 'bg-blue-50', accentBorder: 'border-blue-200', accentBtn: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'App Developer', category: 'language-career', duration: '3 Months', time: '2:00 PM - 4:00 PM', badge: 'Mobile', desc: 'Learn cross-platform mobile app development with Flutter & React Native.', icon: 'lucide:smartphone', rating: '4.8', students: '95+', accent: 'from-indigo-600 to-purple-400', accentText: 'text-indigo-600', accentBg: 'bg-indigo-50', accentBorder: 'border-indigo-200', accentBtn: 'bg-indigo-600 hover:bg-indigo-700' },
    { name: 'Computer Basic & Advance Classes', category: 'language-career', duration: '3 Months', time: '7:00 AM - 9:00 AM', badge: 'Basic Skills', desc: 'Essential digital literacy, MS Office Suite, email, and security basics.', icon: 'lucide:monitor', rating: '4.7', students: '220+', accent: 'from-emerald-500 to-teal-400', accentText: 'text-emerald-600', accentBg: 'bg-emerald-50', accentBorder: 'border-emerald-200', accentBtn: 'bg-emerald-600 hover:bg-emerald-700' },
    { name: 'Digital Marketing Classes', category: 'language-career', duration: '3 Months', time: '4:00 PM - 6:00 PM', badge: 'Marketing', desc: 'Master SEO, social media ads, analytics, and content strategy.', icon: 'lucide:megaphone', rating: '4.8', students: '130+', accent: 'from-purple-500 to-indigo-400', accentText: 'text-purple-600', accentBg: 'bg-purple-50', accentBorder: 'border-purple-200', accentBtn: 'bg-purple-600 hover:bg-purple-750' },
    { name: 'Computer Programming Classes', category: 'language-career', duration: '3 Months', time: '11:00 AM - 1:00 PM', badge: 'Coding', desc: 'Learn programming fundamentals in Python, C, C++, and Java.', icon: 'lucide:code-2', rating: '4.9', students: '115+', accent: 'from-teal-600 to-emerald-400', accentText: 'text-teal-600', accentBg: 'bg-teal-50', accentBorder: 'border-teal-200', accentBtn: 'bg-teal-600 hover:bg-teal-700' }
  ]

  const filteredCourses = activeTab === 'all' ? courses : courses.filter(c => c.category === activeTab)

  const faculty = [
    {
      name: 'Sudarsan Pd. Bhatt',
      role: 'Founder & Mathematics Instructor',
      experience: '20+ Years',
      spec: 'M.Ed. Mathematics',
      desc: 'Expert in core algebra, calculus, and board exam training methodologies.',
      image: '/images/uploads/sudarsan-sit-e1668217849758-300x292.jpg',
      socials: { fb: 'https://facebook.com', lk: 'https://linkedin.com' }
    },
    {
      name: 'Dev Pant',
      role: 'Management & Finance Specialist',
      experience: '15+ Years',
      spec: 'M.B.S. Finance / M.Phil.',
      desc: 'Practical trainer for financial analysis, corporate accounts, and case models.',
      image: '/images/uploads/Dev-Pant.jpg',
      socials: { fb: 'https://facebook.com', lk: 'https://linkedin.com' }
    }
  ]

  const testimonials = [
    {
      name: 'Amit Patel',
      course: 'BBS Completed',
      text: 'Can’t express the amount of respect to all the members in this institute who are working so hard for us. We are so blessed to have this lovely platform in our generation!',
      image: '/images/uploads/testimonial_img-11.jpeg',
      rating: 5,
    },
    {
      name: 'Rohan Sharma',
      course: 'SEE Graduate',
      text: 'I’ve been a part of Bright Life since Sudarsan sir was in my school. I love the way he teaches, and I attribute everything I’ve accomplished to Bright Life.',
      image: '/images/uploads/Team-3.png',
      rating: 5,
    },
    {
      name: 'Anjali Gupta',
      course: '+2 Management',
      text: 'Bright Life has been a great contributor to the development of my personality. I’ve been following Bright Life for the past two years. Thanks for helping me in my study.',
      image: '/images/uploads/team-4.png',
      rating: 5,
    },
  ]

  const faqs = [
    {
      q: 'Where is Bright Life located?',
      a: 'Bright Life is located in Bhimdatta Municipality-18, Campus Road (near Park Old Gate), Mahendranagar, Nepal.',
    },
    {
      q: 'How do online classes work?',
      a: 'Our online classes are streamed live through our dedicated portal. Registered students receive credentials to join interactive sessions, download lesson notes, and access recorded video lectures 24/7.',
    },
    {
      q: 'What courses are available?',
      a: 'We offer tuition for Grades 8-12, university coaching for BBS/BBA/B.Sc/MBS/MBM, Loksewa preparation (PSC/TSC), and English language/IELTS batches.',
    },
    {
      q: 'Do you offer scholarships?',
      a: 'Yes! Bright Life offers merit-based scholarships based on student SEE/Board exam grades, scholarship tests, and support programs for financially underprivileged students.',
    },
  ]

  const galleryImages = [
    '/images/uploads/316286202_926911321629515_5829567133652411077_n.jpg',
    '/images/uploads/WhatsApp-Image-2022-11-19-at-07.11.15-1.jpg',
    '/images/uploads/316219964_1177501046509289_856738710676410818_n.jpg',
    '/images/uploads/illustration-education-concept_53876-20544-1.webp',
    '/images/uploads/sudarsan-sit-e1668217849758.jpg',
    '/images/uploads/cropped-Logo-Design-Bright-life-2022-11-13.jpg',
  ]

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased overflow-x-hidden">
      
      {/* 1. Premium Hero Section */}
      <section ref={heroRef} className="relative pt-36 pb-24 sm:pt-48 sm:pb-36 bg-slate-50 overflow-hidden">

        {/* Animated floating orbs — parallax on mouse */}
        <div
          className="absolute top-16 left-[8%] h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl animate-float-slow pointer-events-none"
          style={{ transform: `translate(${mouse.x * -18}px, ${mouse.y * -12}px)` }}
        />
        <div
          className="absolute top-32 right-[6%] h-72 w-72 rounded-full bg-primary/8 blur-3xl animate-float-medium pointer-events-none"
          style={{ transform: `translate(${mouse.x * 22}px, ${mouse.y * 14}px)` }}
        />
        <div
          className="absolute bottom-8 left-1/2 h-48 w-48 rounded-full bg-brand-red/7 blur-2xl animate-float-fast pointer-events-none"
          style={{ transform: `translate(${mouse.x * -10}px, ${mouse.y * 18}px)` }}
        />

        {/* Subtle grid dots background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#00000008_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        {/* Floating accent pills */}
        <div
          className="absolute top-28 left-[12%] hidden lg:flex items-center gap-2 bg-white border border-slate-100 shadow-sm rounded-full px-4 py-2 text-xs font-bold text-slate-600 animate-float-medium"
          style={{ transform: `translate(${mouse.x * -8}px, ${mouse.y * -6}px)` }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span> 5,000+ Students
        </div>
        <div
          className="absolute top-40 right-[10%] hidden lg:flex items-center gap-2 bg-white border border-slate-100 shadow-sm rounded-full px-4 py-2 text-xs font-bold text-slate-600 animate-float-slow"
          style={{ transform: `translate(${mouse.x * 10}px, ${mouse.y * -8}px)` }}
        >
          <span className="h-2 w-2 rounded-full bg-brand-yellow"></span> 100% Success Rate
        </div>
        <div
          className="absolute bottom-28 left-[8%] hidden lg:flex items-center gap-2 bg-white border border-slate-100 shadow-sm rounded-full px-4 py-2 text-xs font-bold text-slate-600 animate-float-fast"
          style={{ transform: `translate(${mouse.x * -14}px, ${mouse.y * 10}px)` }}
        >
          <span className="h-2 w-2 rounded-full bg-primary"></span> 16+ Years Experience
        </div>

        <div className="container mx-auto max-w-5xl px-4 relative z-10 text-center">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200/60 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] pl-2 pr-4 py-1.5 rounded-full text-[10px] font-black text-slate-800 tracking-wider uppercase animate-fade-in-up">
              <span className="bg-brand-red text-white text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-widest">
                ESTD. 2005
              </span>
              <span>Mahendranagar&apos;s Favorite Study Hub</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-slate-950 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Providing Quality Education for the{' '}
              <span className="text-brand-red relative inline-block">
                Upliftment
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M0 6 Q50 0 100 5 Q150 10 200 4" stroke="#FFE01B" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>{' '}
              of Students
            </h1>

            <p className="text-slate-650 text-sm sm:text-base md:text-[17px] max-w-xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Bright Life couples expert live classes, structured resources, and government exam prep to help every student reach their full potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 px-4 sm:px-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link
                href="/courses"
                className="bg-slate-950 text-white font-extrabold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-all duration-300 text-center flex items-center justify-center gap-2 group text-xs sm:text-sm tracking-wider uppercase w-full sm:w-auto"
              >
                Explore Courses
                <Icon icon="lucide:arrow-right" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/admission"
                className="bg-brand-yellow text-slate-950 font-extrabold px-8 py-3.5 rounded-xl hover:bg-yellow-350 transition-all duration-300 text-center flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wider uppercase border border-brand-yellow/30 shadow-xs w-full sm:w-auto"
              >
                Apply Now
                <Icon icon="lucide:user-plus" width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Statistics Section (Professional Minimalist Layout) */}
      <section className="py-10 sm:py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3"
              >
                <div className="flex justify-between items-start">
                  <span className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {stat.number}
                  </span>
                  <span className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${stat.color}`}>
                    <Icon icon={stat.icon} width={16} height={16} />
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">{stat.label}</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-normal">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Bright Life */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto max-w-7xl px-4">

          <div className="text-center space-y-3 mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">What makes us different</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-8 overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Giant watermark number */}
                <span className="absolute -top-4 -right-2 text-[6rem] sm:text-[7rem] font-black text-slate-100 select-none leading-none pointer-events-none">
                  {feat.num}
                </span>

                {/* Content */}
                <div className="relative z-10 space-y-3 pt-4 sm:pt-6">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">{feat.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{feat.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-primary rounded-b-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Featured Courses Section */}
      <section className="py-20 sm:py-28 bg-slate-50/50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-3 mb-12">
            <span className="text-primary text-xs font-black uppercase tracking-widest">Our Programs</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950">Featured Batches</h2>
            <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Filters */}
          <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-8 sm:mb-12 pb-3 -mx-4 px-4 scrollbar-none select-none">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'academic', label: 'Academic Packages' },
              { id: 'language-career', label: 'Language & Career' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition duration-300 hover:cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Gradient Header Band */}
                <div className={`bg-gradient-to-br ${course.accent} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-black/10 translate-y-6 -translate-x-6"></div>
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="h-12 w-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/30">
                      <Icon icon={course.icon} width={22} height={22} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-white/90 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span> Enrolling
                    </span>
                  </div>
                  <div className="relative z-10 mt-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/25 text-white uppercase tracking-wider`}>
                      {course.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[15px] font-black text-slate-900 leading-snug mt-1 mb-2 group-hover:text-slate-700 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{course.desc}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/admission"
                    className={`mt-5 w-full text-white text-sm font-bold py-3 rounded-xl text-center block transition-all duration-200 ${course.accentBtn}`}
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. Meet Our Faculty Section */}
      <section className="py-16 sm:py-28 bg-slate-50/50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-primary text-xs font-black uppercase tracking-widest">Instructors & Mentors</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950">Meet Our Faculty</h2>
            <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 max-w-4xl mx-auto">
            {faculty.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs hover:shadow-md transition duration-300 flex flex-col items-center text-center space-y-6"
              >
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <span className="bg-blue-50 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.experience} Exp
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950">{item.name}</h3>
                  <p className="text-primary text-xs font-extrabold uppercase tracking-wider">{item.role}</p>
                  <p className="text-slate-500 text-xs font-semibold">Specialization: {item.spec}</p>
                </div>
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed max-w-sm">{item.desc}</p>

                <div className="pt-2 w-full">
                  <Link
                    href="/staffs"
                    className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold py-2.5 rounded-xl block text-center transition"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Student Success Stories (Carousel / Testimonials Grid) */}
      <section className="py-16 sm:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-primary text-xs font-black uppercase tracking-widest">Student Voice</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950">Student Success Stories</h2>
            <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                <span className="absolute top-6 right-6 text-slate-100 text-5xl font-black font-serif select-none leading-none">
                  “
                </span>
                
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Icon key={i} icon="material-symbols:star-rounded" width={18} height={18} />
                    ))}
                  </div>
                  <p className="text-slate-655 text-xs sm:text-sm italic leading-relaxed relative z-10">&ldquo;{item.text}&rdquo;</p>
                </div>
                
                <div className="flex items-center gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100">
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-slate-950 text-xs sm:text-sm">{item.name}</h4>
                      <span className="bg-emerald-100 text-emerald-600 text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase">
                        Verified
                      </span>
                    </div>
                    <p className="text-slate-500 text-[9px] sm:text-[10px] font-semibold">{item.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 10. FAQ Accordion */}
      <section className="py-16 sm:py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center space-y-3 mb-10 sm:mb-12">
            <span className="text-primary text-xs font-black uppercase tracking-widest">FAQ Desk</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950">Frequently Asked Questions</h2>
            <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-sm transition duration-305"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-6 font-bold text-slate-950 flex justify-between items-center hover:bg-slate-50/50 transition duration-300 hover:cursor-pointer text-xs sm:text-sm md:text-base gap-3"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3 leading-snug">
                    <Icon icon="lucide:help-circle" className="text-primary shrink-0" width={18} height={18} />
                    {faq.q}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    <Icon icon={faqOpen === idx ? 'lucide:minus' : 'lucide:plus'} width={16} height={16} />
                  </span>
                </button>
                {faqOpen === idx && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-slate-650 text-xs sm:text-sm leading-relaxed border-t border-slate-50 pt-3 sm:pt-4 pl-10 sm:pl-12">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Call To Action Section */}
      <section className="py-16 sm:py-24 bg-primary text-white text-center relative overflow-hidden">
        {/* Abstract floating circles */}
        <div className="absolute top-[-20%] left-[-10%] h-[300px] w-[300px] rounded-full bg-white/5 blur-2xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] h-[350px] w-[350px] rounded-full bg-white/5 blur-2xl"></div>

        <div className="container mx-auto max-w-4xl px-6 sm:px-4 relative z-10 space-y-6 sm:space-y-8">
          <span className="bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider inline-flex items-center gap-2">
            Admissions Open
          </span>
          <h2 className="text-2xl sm:text-5xl font-black text-white leading-tight">Ready to Build Your Future?</h2>
          <p className="text-blue-100 max-w-xl mx-auto text-xs sm:text-base leading-relaxed font-medium">
            Get in touch with us, explore batch timings, and start learning from Nepal's leading educational mentors today.
          </p>
          <div className="pt-2 px-4 sm:px-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-block bg-white text-slate-950 hover:bg-slate-100 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition duration-300 hover:cursor-pointer text-xs sm:text-sm tracking-wider uppercase"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
