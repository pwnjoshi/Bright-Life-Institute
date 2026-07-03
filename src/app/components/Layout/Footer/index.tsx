'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#090D16] text-slate-400 border-t border-slate-900 relative overflow-hidden">
      {/* Top glowing ambient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 pt-16 pb-12 relative z-10">
        
        {/* Dynamic Admission Banner Card */}
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 relative overflow-hidden backdrop-blur-xs">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">Ready to boost your grades?</h3>
            <p className="text-slate-400 text-sm">Join Mahendranagar&apos;s favorite study hub & start learning today.</p>
          </div>
          <Link href="/admission" className="bg-brand-yellow hover:bg-yellow-300 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shrink-0 shadow-md">
            Apply Online Now →
          </Link>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="space-y-5 lg:col-span-1">
            <div>
              <p className="text-white text-xl font-black tracking-tight">Bright Life</p>
              <p className="text-[11px] text-brand-yellow font-bold uppercase tracking-widest mt-0.5">Educational Institute</p>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Quality coaching and tuition academy committed to student success. Empowering minds since 2005.
            </p>
            <div className="flex gap-2 pt-1">
              <a href="http://facebook.com/brightlife.edu.np" target="_blank" rel="noreferrer"
                className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800/40 hover:bg-primary hover:text-white hover:border-primary text-slate-500 flex items-center justify-center transition-all duration-200">
                <Icon icon="lucide:facebook" width={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800/40 hover:bg-pink-600 hover:text-white hover:border-pink-600 text-slate-500 flex items-center justify-center transition-all duration-200">
                <Icon icon="lucide:instagram" width={16} />
              </a>
              <a href="https://www.youtube.com/@BrightlifeAcademy" target="_blank" rel="noreferrer"
                className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800/40 hover:bg-red-600 hover:text-white hover:border-red-600 text-slate-500 flex items-center justify-center transition-all duration-200">
                <Icon icon="lucide:youtube" width={16} />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Courses', href: '/courses' },
                { label: 'Our Faculty', href: '/staffs' },
                { label: 'Admission', href: '/admission' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group">
                    <span className="h-px w-3 bg-slate-700 group-hover:bg-brand-yellow group-hover:w-4 transition-all duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Programs</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>School Tuition (Grade 5–10)</li>
              <li>SEE & +2 Preparation</li>
              <li>Bachelor&apos;s & Master&apos;s Coaching</li>
              <li>Loksewa & TSC Preparation</li>
              <li>English Language Classes</li>
              <li>Banking & Bridge Courses</li>
            </ul>
          </div>

          {/* Col 4 — Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Icon icon="lucide:map-pin" className="text-brand-red shrink-0 mt-0.5" width={15} />
                <span>Campus Road (near Park Old Gate), Bhimdatta-18, Mahendranagar</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Icon icon="lucide:phone" className="text-brand-red shrink-0" width={15} />
                <span>099-520863 · +977 9858751680</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Icon icon="lucide:mail" className="text-brand-red shrink-0" width={15} />
                <span>info@brightlife.edu.np</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900/60 py-5 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <p>© {year} Bright Life Educational Institute. All Rights Reserved.</p>
          <p className="text-slate-700">Mahendranagar, Kanchanpur, Nepal</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
