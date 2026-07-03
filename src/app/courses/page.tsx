'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const courses = [
  // Academic Packages
  { name: '5-8 Tuition Class', category: 'academic', duration: 'Yearly', time: '6:00 AM - 8:00 AM', badge: 'Basic Level', desc: 'Booster tuition classes covering core subjects for Grades 5 to 8.', icon: 'lucide:book-open', rating: '4.8', students: '120+', accent: 'from-rose-500 to-orange-400', accentBtn: 'bg-rose-600 hover:bg-rose-700' },
  { name: 'SEE Package', category: 'academic', duration: 'Yearly', time: '4:00 PM - 6:00 PM', badge: 'Grade 10', desc: 'Complete board preparation for SEE with mock tests and analysis.', icon: 'lucide:book-check', rating: '4.9', students: '240+', accent: 'from-red-600 to-rose-400', accentBtn: 'bg-red-600 hover:bg-red-700' },
  { name: '+2 Package', category: 'academic', duration: 'Yearly', time: '6:30 AM - 8:30 AM', badge: 'High School', desc: 'Science & Management classes for Grades 11 and 12 (+2 Level).', icon: 'lucide:brain', rating: '4.8', students: '180+', accent: 'from-violet-600 to-purple-400', accentBtn: 'bg-violet-600 hover:bg-violet-700' },
  { name: "Bachelor's Level Package", category: 'academic', duration: '4 Years', time: '6:00 AM - 8:00 AM', badge: 'TU, FWU & PU', desc: 'Coaching for BBA, BCA, BBS, BA, B.Ed, B.Sc subjects.', icon: 'lucide:award', rating: '4.9', students: '320+', accent: 'from-blue-600 to-indigo-400', accentBtn: 'bg-blue-600 hover:bg-blue-700' },
  { name: "Master's Level Package", category: 'academic', duration: '2 Years', time: '6:00 PM - 8:00 PM', badge: 'Postgraduate', desc: 'Advanced exam coaching for M.A, M.Ed, MBS, MBM courses.', icon: 'lucide:laptop', rating: '4.9', students: '110+', accent: 'from-indigo-600 to-blue-400', accentBtn: 'bg-indigo-600 hover:bg-indigo-700' },

  // Language & Career
  { name: 'Basic English Language', category: 'language-career', duration: '3 Months', time: '11:00 AM - 1:00 PM', badge: 'Fluency', desc: 'Grammar, vocabulary and conversation practice for beginners.', icon: 'lucide:message-circle', rating: '4.7', students: '150+', accent: 'from-emerald-500 to-teal-400', accentBtn: 'bg-emerald-600 hover:bg-emerald-700' },
  { name: 'Advance English Language', category: 'language-career', duration: '3 Months', time: '1:00 PM - 3:00 PM', badge: 'Advanced', desc: 'Professional public speaking, presentation, and communication.', icon: 'lucide:mic', rating: '4.8', students: '120+', accent: 'from-teal-500 to-cyan-400', accentBtn: 'bg-teal-600 hover:bg-teal-700' },
  { name: 'Bridge Course', category: 'language-career', duration: '2 Months', time: '8:00 AM - 10:00 AM', badge: 'After SEE', desc: 'Transition courses preparing SEE graduates for +2 curriculum.', icon: 'lucide:sparkles', rating: '4.8', students: '150+', accent: 'from-amber-500 to-yellow-400', accentBtn: 'bg-amber-500 hover:bg-amber-600' },
  { name: 'शिक्षक सेवा आयोग तयारी (TSC)', category: 'language-career', duration: '3 Months', time: '5:00 PM - 7:00 PM', badge: 'Govt Prep', desc: 'Preparation classes for Teacher Service Commission licenses.', icon: 'lucide:graduation-cap', rating: '4.9', students: '190+', accent: 'from-sky-600 to-blue-400', accentBtn: 'bg-sky-600 hover:bg-sky-700' },
  { name: 'लोक सेवा आयोग तयारी (Loksewa)', category: 'language-career', duration: '3 Months', time: '6:00 AM - 8:00 AM', badge: 'PSC Prep', desc: 'Civil service examination preparation for government posts.', icon: 'lucide:building-2', rating: '4.9', students: '280+', accent: 'from-slate-700 to-slate-500', accentBtn: 'bg-slate-700 hover:bg-slate-800' },
  { name: 'Banking तयारी (Banking Prep)', category: 'language-career', duration: '3 Months', time: '6:00 AM - 8:00 AM', badge: 'Banking', desc: 'Specialized training for banking sector recruitment exams.', icon: 'lucide:landmark', rating: '4.8', students: '140+', accent: 'from-green-600 to-emerald-400', accentBtn: 'bg-green-600 hover:bg-green-700' },
  { name: 'Thesis & Report Consultation', category: 'language-career', duration: 'Custom', time: 'Flexible', badge: 'Thesis', desc: 'Expert academic consultation for Bachelor and Master reports.', icon: 'lucide:file-text', rating: '4.9', students: '95+', accent: 'from-pink-600 to-rose-400', accentBtn: 'bg-pink-600 hover:bg-pink-700' },
  { name: 'Video Editing', category: 'language-career', duration: '3 Months', time: '1:00 PM - 3:00 PM', badge: 'Creative', desc: 'Master editing with Premiere Pro, After Effects, and DaVinci Resolve.', icon: 'lucide:video', rating: '4.8', students: '110+', accent: 'from-orange-500 to-amber-400', accentBtn: 'bg-orange-600 hover:bg-orange-700' },
  { name: 'Graphics Designing', category: 'language-career', duration: '3 Months', time: '10:00 AM - 12:00 PM', badge: 'Design', desc: 'Master visual layouts, typography, Photoshop, and Illustrator.', icon: 'lucide:palette', rating: '4.9', students: '140+', accent: 'from-pink-500 to-rose-400', accentBtn: 'bg-pink-600 hover:bg-pink-700' },
  { name: 'Web Development', category: 'language-career', duration: '3 Months', time: '8:00 AM - 10:00 AM', badge: 'Development', desc: 'Full-stack development training covering HTML, CSS, JavaScript, and Node.js.', icon: 'lucide:globe', rating: '4.9', students: '180+', accent: 'from-blue-600 to-cyan-400', accentBtn: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'App Developer', category: 'language-career', duration: '3 Months', time: '2:00 PM - 4:00 PM', badge: 'Mobile', desc: 'Learn cross-platform mobile app development with Flutter & React Native.', icon: 'lucide:smartphone', rating: '4.8', students: '95+', accent: 'from-indigo-600 to-purple-400', accentBtn: 'bg-indigo-600 hover:bg-indigo-700' },
  { name: 'Computer Basic & Advance Classes', category: 'language-career', duration: '3 Months', time: '7:00 AM - 9:00 AM', badge: 'Basic Skills', desc: 'Essential digital literacy, MS Office Suite, email, and security basics.', icon: 'lucide:monitor', rating: '4.7', students: '220+', accent: 'from-emerald-500 to-teal-400', accentBtn: 'bg-emerald-600 hover:bg-emerald-700' },
  { name: 'Digital Marketing Classes', category: 'language-career', duration: '3 Months', time: '4:00 PM - 6:00 PM', badge: 'Marketing', desc: 'Master SEO, social media ads, analytics, and content strategy.', icon: 'lucide:megaphone', rating: '4.8', students: '130+', accent: 'from-purple-500 to-indigo-400', accentBtn: 'bg-purple-600 hover:bg-purple-750' },
  { name: 'Computer Programming Classes', category: 'language-career', duration: '3 Months', time: '11:00 AM - 1:00 PM', badge: 'Coding', desc: 'Learn programming fundamentals in Python, C, C++, and Java.', icon: 'lucide:code-2', rating: '4.9', students: '115+', accent: 'from-teal-600 to-emerald-400', accentBtn: 'bg-teal-600 hover:bg-teal-700' }
]

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'language-career'>('all')

  const filteredCourses = activeTab === 'all' ? courses : courses.filter(c => c.category === activeTab)

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
            Courses
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-955 leading-tight">
            Our Courses & Programs
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Choose from a wide variety of courses designed to empower students and career-seekers.
          </p>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'academic', label: 'Academic Packages' },
              { id: 'language-career', label: 'Language & Career' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition duration-300 hover:cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100'
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
                    className={`mt-6 w-full text-white text-sm font-bold py-3 rounded-xl text-center block transition-all duration-200 ${course.accentBtn}`}
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Banner Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mt-20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-black text-white leading-tight">Can&apos;t Find Your Course?</h3>
              <p className="text-slate-400 text-sm max-w-md">
                Get in touch with our counselors to inquire about custom batches, exam preparation schedules, or individual mentoring.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0 justify-center">
              <Link href="/contact" className="bg-brand-yellow hover:bg-yellow-300 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200">
                Contact Us
              </Link>
              <Link href="/admission" className="bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200">
                Admission Information
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
