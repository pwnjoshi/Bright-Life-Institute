'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderItem } from '@/app/types/menu'

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderItem[]>([])
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderData(data.HeaderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 10)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`fixed z-40 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl transition-all duration-300 rounded-full border border-slate-200/50 shadow-sm px-6 py-2.5 ${
        sticky 
          ? 'top-4 bg-white/95 shadow-md backdrop-blur-lg border-slate-200/60' 
          : 'top-6 bg-white/85 backdrop-blur-md'
      }`}>
      <div>
        <div className='container mx-auto max-w-7xl flex items-center justify-between'>
          <Logo />
          
          <nav className='hidden lg:flex items-center gap-8 justify-center mx-auto'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          
          <div className='flex items-center gap-4 shrink-0'>
            <Link
              href="/courses"
              className='hidden lg:block bg-brand-yellow text-slate-950 hover:bg-slate-950 hover:text-white text-xs font-black px-5 py-2.5 rounded-full hover:cursor-pointer transition shadow-xs'
            >
              Get started
            </Link>
            
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-slate-900'></span>
              <span className='block w-6 h-0.5 bg-slate-900 mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-slate-900 mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-midnight_text'>
              <Logo />
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              className='bg-black/30 rounded-full p-1 text-white hover:cursor-pointer'
              aria-label='Close menu Modal'>
              <Icon
                icon={'material-symbols:close-rounded'}
                width={24}
                height={24}
              />
            </button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
