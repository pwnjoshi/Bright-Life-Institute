'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const NotFound = () => {
  return (
    <section className="relative pt-36 pb-24 sm:pt-48 sm:pb-36 bg-slate-50 overflow-hidden min-h-[70vh] flex items-center justify-center">
      {/* Animated floating background orbs */}
      <div className="absolute top-10 left-[10%] h-64 w-64 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 right-[10%] h-64 w-64 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      
      {/* Dot grid backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#00000005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 sm:gap-16 text-center md:text-left">
          
          {/* Giant Number Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end select-none">
            <h1 className="text-[9rem] sm:text-[13rem] font-black text-slate-950/15 tracking-tighter leading-none relative">
              404
              <span className="absolute inset-0 text-[9rem] sm:text-[13rem] font-black text-brand-red tracking-tighter leading-none blur-[2px] opacity-80 animate-pulse">
                404
              </span>
            </h1>
          </div>

          {/* Description Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-slate-200/60 shadow-xs px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase text-slate-500">
              <Icon icon="lucide:alert-circle" className="text-brand-red" /> Page Not Found
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight">
              Lost in the journey?
            </h2>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-extrabold px-8 py-4 rounded-2xl hover:cursor-pointer transition-all duration-300 text-xs tracking-wider uppercase shadow-md group"
              >
                Go Back Home
                <Icon icon="lucide:arrow-right" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default NotFound
