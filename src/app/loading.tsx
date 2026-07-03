'use client'

import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/95 backdrop-blur-xs select-none">
      <div className="relative flex items-center justify-center">
        {/* Glowing aura ring */}
        <div className="absolute h-20 w-20 rounded-full border-2 border-brand-yellow/30 animate-ping pointer-events-none" style={{ animationDuration: '1.5s' }}></div>
        
        {/* Outer spinning ring */}
        <div className="h-20 w-20 rounded-full border-2 border-slate-100 border-t-primary animate-spin" style={{ animationDuration: '0.8s' }}></div>
        
        {/* Centered pulsing logo */}
        <div className="absolute h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
          <Image
            src="/images/logo/logo.png"
            alt="Bright Life Logo"
            width={36}
            height={36}
            priority
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Short branding text */}
      <span className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-500 animate-pulse">
        Loading Success...
      </span>
    </div>
  )
}
