'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0b0f19] text-slate-400 border-t border-slate-900 relative overflow-hidden">
      {/* Premium ambient decorative blurred light spots */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[150px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[150px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Section - Interactive Admission Call to Action */}
      <div className="container mx-auto max-w-7xl px-6 pt-16">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/30 p-8 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">Enrollment Open</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-3">Ready to boost your academic grades?</h3>
            <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
              Join Mahendranagar&apos;s leading tutoring academy. Register online today and get matched with expert tutors.
            </p>
          </div>

          <Link
            href="/admission"
            className="bg-brand-yellow hover:bg-yellow-450 text-slate-950 px-8 py-3.5 rounded-2xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-brand-yellow/10 active:scale-98 shrink-0 relative z-10"
          >
            Apply Online Now &rarr;
          </Link>
        </div>
      </div>

      {/* Grid Links Section */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-6 lg:col-span-4">
            <div className="space-y-2">
              <span className="text-white text-xl font-bold tracking-tight">Bright Life</span>
              <div className="text-[10px] text-brand-yellow font-black uppercase tracking-widest flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-brand-red rounded-full"></span>
                Educational Institute
              </div>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs font-medium">
              Empowering students in Mahendranagar since 2005 with top-tier school tuitions, board preparation, and career-oriented coaching.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="http://facebook.com/brightlife.edu.np"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/50 border border-slate-800/40 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-500 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook Page"
              >
                <Icon icon="lucide:facebook" width={18} height={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/50 border border-slate-800/40 hover:bg-pink-600 hover:text-white hover:border-pink-600 text-slate-500 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Icon icon="lucide:instagram" width={18} height={18} />
              </a>
              <a
                href="https://www.youtube.com/@BrightlifeAcademy"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900/50 border border-slate-800/40 hover:bg-red-600 hover:text-white hover:border-red-600 text-slate-500 flex items-center justify-center transition-all duration-300"
                aria-label="Youtube Channel"
              >
                <Icon icon="lucide:youtube" width={18} height={18} />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
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
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-150 flex items-center gap-2 group font-medium"
                  >
                    <span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-brand-yellow group-hover:w-2 transition-all duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Programs info */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Programs</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-slate-800 rounded-full"></span> School Tuition (Grades 5-10)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-slate-800 rounded-full"></span> SEE, +2 Board Coaching
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-slate-800 rounded-full"></span> Bachelor & Master preparation
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-slate-800 rounded-full"></span> TSC preparation (शिक्षक सेवा)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-slate-800 rounded-full"></span> Public Speaking & English Language
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-slate-500 font-medium">
                <Icon icon="lucide:map-pin" className="text-brand-red shrink-0 mt-0.5" width={16} />
                <span>Campus Road (near Park Old Gate), Bhimdatta-18, Mahendranagar</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                <Icon icon="lucide:phone" className="text-brand-red shrink-0" width={16} />
                <span>099-520863 · +977 9858751680</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                <Icon icon="lucide:mail" className="text-brand-red shrink-0" width={16} />
                <span>info@brightlife.edu.np</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright footer block */}
      <div className="border-t border-slate-900 py-6 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600 font-medium">
          <p>&copy; {year} Bright Life Educational Institute. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Mahendranagar, Kanchanpur, Nepal</span>
            <span className="h-3 w-px bg-slate-800"></span>
            <span>ESTD. 2005</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
