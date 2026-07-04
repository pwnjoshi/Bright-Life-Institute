'use client'

import React from 'react'
import { Icon } from '@iconify/react'

export default function FacebookFeed() {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 w-full max-w-[348px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Icon icon="lucide:facebook" width={18} height={18} />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900">Facebook Updates</h3>
            <p className="text-[10px] font-semibold text-slate-400">Live announcements & feeds</p>
          </div>
        </div>
        <a
          href="https://www.facebook.com/brightlife.edu.np"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-bold text-blue-600 hover:underline flex items-center gap-0.5"
        >
          Visit Page
          <Icon icon="lucide:external-link" width={10} />
        </a>
      </div>

      {/* Frame layout wrapper to embed timeline */}
      <div className="w-[300px] mx-auto h-[450px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex justify-center">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrightlife.edu.np&tabs=timeline&width=300&height=450&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
          width="100%"
          height="450"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}
