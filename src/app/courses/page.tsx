'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const courses = [
  // School & Board Prep
  { name: '5-8 Tuition Class', category: 'school-prep', duration: 'Yearly', time: '6:00 AM - 8:00 AM', badge: 'Basic Level', desc: 'Booster tuition classes covering core subjects for Grades 5 to 8.', icon: 'lucide:book-open', rating: '4.8', students: '120+', accent: 'from-rose-500 to-orange-400', accentBtn: 'bg-rose-600 hover:bg-rose-700' },
  { name: 'SEE Package', category: 'school-prep', duration: 'Yearly', time: '4:00 PM - 6:00 PM', badge: 'Grade 10', desc: 'Complete board preparation for SEE with mock tests and analysis.', icon: 'lucide:book-check', rating: '4.9', students: '240+', accent: 'from-red-600 to-rose-400', accentBtn: 'bg-red-600 hover:bg-red-700' },
  { name: '+2 Package', category: 'school-prep', duration: 'Yearly', time: '6:30 AM - 8:30 AM', badge: 'High School', desc: 'Science & Management classes for Grades 11 and 12 (+2 Level).', icon: 'lucide:brain', rating: '4.8', students: '180+', accent: 'from-violet-600 to-purple-400', accentBtn: 'bg-violet-600 hover:bg-violet-700' },
  { name: 'Bridge Course', category: 'school-prep', duration: '2 Months', time: '8:00 AM - 10:00 AM', badge: 'After SEE', desc: 'Transition courses preparing SEE graduates for +2 curriculum.', icon: 'lucide:sparkles', rating: '4.8', students: '150+', accent: 'from-amber-500 to-yellow-400', accentBtn: 'bg-amber-500 hover:bg-amber-600' },

  // College & University
  { name: "Bachelor's Level Package", category: 'college-uni', duration: '4 Years', time: '6:00 AM - 8:00 AM', badge: 'TU, FWU & PU', desc: 'Coaching for BBA, BCA, BBS, BA, B.Ed, B.Sc subjects.', icon: 'lucide:award', rating: '4.9', students: '320+', accent: 'from-blue-600 to-indigo-400', accentBtn: 'bg-blue-600 hover:bg-blue-700' },
  { name: "Master's Level Package", category: 'college-uni', duration: '2 Years', time: '6:00 PM - 8:00 PM', badge: 'Postgraduate', desc: 'Advanced exam coaching for M.A, M.Ed, MBS, MBM courses.', icon: 'lucide:laptop', rating: '4.9', students: '110+', accent: 'from-indigo-600 to-blue-400', accentBtn: 'bg-indigo-600 hover:bg-indigo-700' },
  { name: 'Thesis & Report Consultation', category: 'college-uni', duration: 'Custom', time: 'Flexible', badge: 'Thesis', desc: 'Expert academic consultation for Bachelor and Master reports.', icon: 'lucide:file-text', rating: '4.9', students: '95+', accent: 'from-pink-600 to-rose-400', accentBtn: 'bg-pink-600 hover:bg-pink-700' },

  // Language Prep
  { name: 'Basic English Language', category: 'languages', duration: '3 Months', time: '11:00 AM - 1:00 PM', badge: 'Fluency', desc: 'Grammar, vocabulary and conversation practice for beginners.', icon: 'lucide:message-circle', rating: '4.7', students: '150+', accent: 'from-emerald-500 to-teal-400', accentBtn: 'bg-emerald-600 hover:bg-emerald-700' },
  { name: 'Advance English Language', category: 'languages', duration: '3 Months', time: '1:00 PM - 3:00 PM', badge: 'Advanced', desc: 'Professional public speaking, presentation, and communication.', icon: 'lucide:mic', rating: '4.8', students: '120+', accent: 'from-teal-500 to-cyan-400', accentBtn: 'bg-teal-600 hover:bg-teal-700' },

  // Skills & Career
  { name: 'Video Editing', category: 'skills-career', duration: '3 Months', time: '1:00 PM - 3:00 PM', badge: 'Creative', desc: 'Master editing with Premiere Pro, After Effects, and DaVinci Resolve.', icon: 'lucide:video', rating: '4.8', students: '110+', accent: 'from-orange-500 to-amber-400', accentBtn: 'bg-orange-600 hover:bg-orange-700' },
  { name: 'Graphics Designing', category: 'skills-career', duration: '3 Months', time: '10:00 AM - 12:00 PM', badge: 'Design', desc: 'Master visual layouts, typography, Photoshop, and Illustrator.', icon: 'lucide:palette', rating: '4.9', students: '140+', accent: 'from-pink-500 to-rose-400', accentBtn: 'bg-pink-600 hover:bg-pink-700' },
  { name: 'Web Development', category: 'skills-career', duration: '3 Months', time: '8:00 AM - 10:00 AM', badge: 'Development', desc: 'Full-stack development training covering HTML, CSS, JavaScript, and Node.js.', icon: 'lucide:globe', rating: '4.9', students: '180+', accent: 'from-blue-600 to-cyan-400', accentBtn: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'App Developer', category: 'skills-career', duration: '3 Months', time: '2:00 PM - 4:00 PM', badge: 'Mobile', desc: 'Learn cross-platform mobile app development with Flutter & React Native.', icon: 'lucide:smartphone', rating: '4.8', students: '95+', accent: 'from-indigo-600 to-purple-400', accentBtn: 'bg-indigo-600 hover:bg-indigo-700' },
  { name: 'Computer Basic & Advance Classes', category: 'skills-career', duration: '3 Months', time: '7:00 AM - 9:00 AM', badge: 'Basic Skills', desc: 'Essential digital literacy, MS Office Suite, email, and security basics.', icon: 'lucide:monitor', rating: '4.7', students: '220+', accent: 'from-emerald-500 to-teal-400', accentBtn: 'bg-emerald-600 hover:bg-emerald-700' },
  { name: 'Digital Marketing Classes', category: 'skills-career', duration: '3 Months', time: '4:00 PM - 6:00 PM', badge: 'Marketing', desc: 'Master SEO, social media ads, analytics, and content strategy.', icon: 'lucide:megaphone', rating: '4.8', students: '130+', accent: 'from-purple-500 to-indigo-400', accentBtn: 'bg-purple-600 hover:bg-purple-750' },
  { name: 'Computer Programming Classes', category: 'skills-career', duration: '3 Months', time: '11:00 AM - 1:00 PM', badge: 'Coding', desc: 'Learn programming fundamentals in Python, C, C++, and Java.', icon: 'lucide:code-2', rating: '4.9', students: '115+', accent: 'from-teal-600 to-emerald-400', accentBtn: 'bg-teal-600 hover:bg-teal-700' },
  { name: 'शिक्षक सेवा आयोग तयारी (TSC)', category: 'skills-career', duration: '3 Months', time: '5:00 PM - 7:00 PM', badge: 'Govt Prep', desc: 'Preparation classes for Teacher Service Commission licenses.', icon: 'lucide:graduation-cap', rating: '4.9', students: '190+', accent: 'from-sky-600 to-blue-400', accentBtn: 'bg-sky-600 hover:bg-sky-700' },
  { name: 'लोक सेवा आयोग तयारी (Loksewa)', category: 'skills-career', duration: '3 Months', time: '6:00 AM - 8:00 AM', badge: 'PSC Prep', desc: 'Civil service examination preparation for government posts.', icon: 'lucide:building-2', rating: '4.9', students: '280+', accent: 'from-slate-700 to-slate-500', accentBtn: 'bg-slate-700 hover:bg-slate-800' },
  { name: 'Banking तयारी (Banking Prep)', category: 'skills-career', duration: '3 Months', time: '6:00 AM - 8:00 AM', badge: 'Banking', desc: 'Specialized training for banking sector recruitment exams.', icon: 'lucide:landmark', rating: '4.8', students: '140+', accent: 'from-green-600 to-emerald-400', accentBtn: 'bg-green-600 hover:bg-green-700' }
]

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'school-prep' | 'college-uni' | 'languages' | 'skills-career'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = courses.filter((c) => {
    const matchesTab = activeTab === 'all' || c.category === activeTab
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.badge.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

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
            Courses
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-955 leading-tight">
            Our Courses & Programs
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Choose from a wide variety of courses designed to empower students and career-seekers.
          </p>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          
          {/* Search Box and Filter tabs container */}
          <div className="max-w-3xl mx-auto mb-16 space-y-6">
            {/* Search Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 pointer-events-none">
                <Icon icon="lucide:search" width={18} height={18} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by name or keyword..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition"
                >
                  <Icon icon="lucide:x" width={16} height={16} />
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'all', label: 'All Courses' },
                { id: 'school-prep', label: 'School & SEE Prep' },
                { id: 'college-uni', label: 'College & University' },
                { id: 'languages', label: 'Languages' },
                { id: 'skills-career', label: 'Skills & Careers' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition duration-300 hover:cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-slate-950 text-white shadow-md'
                      : 'bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-100 hover:border-slate-200/80 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle inner top-right colored corner glow */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${course.accent} opacity-5 blur-xl pointer-events-none group-hover:scale-150 transition duration-500`}></div>
                  
                  <div className="space-y-4">
                    {/* Top Meta info */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border border-slate-100 bg-slate-50 text-slate-600`}>
                        {course.badge}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                        <Icon icon="lucide:clock" width={13} />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Course details & icon header */}
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${course.accent} text-white flex items-center justify-center shrink-0 shadow-sm shadow-slate-200`}>
                        <Icon icon={course.icon} width={22} height={22} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-brand-red transition duration-200">{course.name}</h3>
                        <p className="text-slate-400 text-[10px] font-semibold mt-1 flex items-center gap-1">
                          <Icon icon="lucide:calendar" width={11} />
                          <span>Slot: {course.time}</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium pt-2">
                      {course.desc}
                    </p>
                  </div>

                  {/* Enrollment action footer inside card */}
                  <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Icon icon="material-symbols:star-rounded" width={16} height={16} />
                        <span className="text-xs font-black text-slate-900">{course.rating}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold">{course.students} Learners</span>
                    </div>

                    <Link
                      href="/admission"
                      className="bg-slate-950 text-white hover:bg-slate-800 font-extrabold px-4 py-2 rounded-xl text-[10px] uppercase tracking-wider transition duration-200 hover:cursor-pointer"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto space-y-3">
              <div className="h-12 w-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto border border-slate-100">
                <Icon icon="lucide:search-slash" width={20} height={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-base">No Courses Found</h3>
              <p className="text-slate-400 text-xs font-medium">
                We couldn&apos;t find any course matching &ldquo;{searchQuery}&rdquo;. Try using different terms or check another tab category.
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  )
}
