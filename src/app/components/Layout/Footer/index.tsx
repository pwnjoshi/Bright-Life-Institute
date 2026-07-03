'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Footer = () => {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-[#080B11] text-slate-400 border-t border-slate-900 relative overflow-hidden">
      
      {/* ── Background Design Elements (GPU-accelerated) ── */}
      {/* Grid Dot Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff01_1.2px,transparent_1.2px)] bg-[size:32px_32px] pointer-events-none opacity-80" />
      
      {/* Large Glowing Ambient Orbs */}
      <div className="absolute -top-32 left-1/3 h-[400px] w-[400px] rounded-full bg-brand-yellow/3 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-[450px] w-[450px] rounded-full bg-brand-red/3 blur-[140px] pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-900/40 to-transparent pointer-events-none hidden xl:block" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-900/40 to-transparent pointer-events-none hidden xl:block" />

      {/* ── Top CTA Banner Section ── */}
      <div className="container mx-auto max-w-7xl px-6 pt-20 relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/45 bg-slate-900/10 p-8 sm:p-12 md:p-14 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Inner card orbs */}
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-brand-red/4 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2.5 text-center md:text-left relative z-10">
            <span className="text-[9px] font-black uppercase tracking-widest text-brand-red bg-brand-red/10 px-3.5 py-1 rounded-full border border-brand-red/10">
              Enrollment Open
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">Ready to boost your academic grades?</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed font-medium">
              Join Mahendranagar&apos;s leading tutoring academy. Register online today and get matched with expert tutors.
            </p>
          </div>

          <Link
            href="/admission"
            className="bg-brand-yellow hover:bg-yellow-305 text-slate-955 px-8 py-3.5 rounded-2xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-brand-yellow/5 active:scale-98 shrink-0 relative z-10 border border-brand-yellow/10"
          >
            Apply Online Now &rarr;
          </Link>
        </div>
      </div>

      {/* ── Main Links Section ── */}
      <div className="container mx-auto max-w-7xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-6 lg:col-span-4">
            <div className="space-y-2">
              <span className="text-white text-xl font-extrabold tracking-tight">Bright Life</span>
              <div className="text-[9px] text-brand-yellow font-black uppercase tracking-widest flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-brand-red rounded-full animate-pulse"></span>
                Educational Institute
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs font-medium">
              Empowering students in Mahendranagar since 2005 with top-tier school tuitions, board preparation, and career-oriented coaching.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="http://facebook.com/brightlife.edu.np"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/40 border border-slate-800/30 hover:bg-primary hover:text-white hover:border-primary text-slate-500 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook Page"
              >
                <Icon icon="lucide:facebook" width={17} height={17} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/40 border border-slate-800/30 hover:bg-pink-600 hover:text-white hover:border-pink-600 text-slate-500 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Icon icon="lucide:instagram" width={17} height={17} />
              </a>
              <a
                href="https://www.youtube.com/@BrightlifeAcademy"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/40 border border-slate-800/30 hover:bg-red-600 hover:text-white hover:border-red-600 text-slate-500 flex items-center justify-center transition-all duration-300"
                aria-label="Youtube Channel"
              >
                <Icon icon="lucide:youtube" width={17} height={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-5 lg:col-span-2 lg:col-start-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Courses Offered', href: '/courses' },
                { label: 'Our Faculty', href: '/staffs' },
                { label: 'Online Admission', href: '/admission' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-500 hover:text-white transition-colors duration-150 flex items-center gap-2 group font-medium"
                  >
                    <span className="h-1 w-1 bg-slate-800 rounded-full group-hover:bg-brand-yellow group-hover:w-2 transition-all duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter Box */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Subscribe to get tuition batch schedule announcements and study materials.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full bg-slate-900/40 border border-slate-800/60 px-4 py-2.5 rounded-xl text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-700 transition"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-brand-yellow hover:bg-yellow-350 text-slate-950 px-3 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  {subscribed ? 'Subscribed!' : 'Join'}
                </button>
              </div>
            </form>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-5 lg:col-span-3 lg:col-start-10">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-500 font-medium">
                <Icon icon="lucide:map-pin" className="text-brand-red shrink-0 mt-0.5" width={15} />
                <span>Campus Road (near Park Old Gate), Bhimdatta-18, Mahendranagar</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
                <Icon icon="lucide:phone" className="text-brand-red shrink-0" width={15} />
                <span>099-520863 · +977 9858751680</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
                <Icon icon="lucide:mail" className="text-brand-red shrink-0" width={15} />
                <span>info@brightlife.edu.np</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Copyright Bar ── */}
      <div className="border-t border-slate-900/60 py-6 px-6 relative z-10 bg-slate-950/20">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] text-slate-600 font-medium">
          <p>&copy; {year} Bright Life Educational Institute. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Mahendranagar, Kanchanpur, Nepal</span>
            <span className="h-3 w-px bg-slate-850"></span>
            <span>ESTD. 2005</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
