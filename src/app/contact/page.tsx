'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    botField: '', // Honeypot field to stop automated spam
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false) // Custom success panel trigger

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contact' }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setIsSuccess(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          botField: '',
        })
      } else {
        alert('Error: ' + (data.error || 'Failed to send message.'))
      }
    } catch (err) {
      alert('Failed to send message. Please try again.')
    } finally {
      setSubmitted(false)
    }
  }

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
            Contact
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-955 leading-tight">
            Contact Bright Life
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about admission, fees, or class schedules? Reach out to us.
          </p>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Contact Info Column */}
            <div className="space-y-6 lg:col-span-1">
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-slate-200 transition-all duration-300">
                <span className="text-xl bg-rose-50 text-brand-red h-10 w-10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon icon="lucide:phone" />
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-sm">Phone</h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium leading-relaxed">099-520863 · +977 9858751680</p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-slate-200 transition-all duration-300">
                <span className="text-xl bg-emerald-50 text-emerald-600 h-10 w-10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon icon="lucide:mail" />
                </span>
                <div>
                  <h3 className="font-black text-slate-900 text-sm">E-mail</h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium leading-relaxed">info@brightlife.edu.np</p>
                </div>
              </div>

              {/* Slate visual directions CTA */}
              <div className="bg-slate-950 text-white p-6 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-xl pointer-events-none"></div>
                <h3 className="font-black text-white text-sm">Reach Us Offline</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  Located near Park Old Gate, Campus Road, Mahendranagar. Feel free to visit during office hours: 6:00 AM - 6:00 PM.
                </p>
                <a
                  href="https://goo.gl/maps/YQufThESbrqsTwoj9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-yellow hover:bg-yellow-300 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs inline-block transition-all duration-200 shadow-md"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right: Message Form Column */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100/90 shadow-sm flex flex-col justify-center">
              
              {isSuccess ? (
                /* Custom Success Confirmation View */
                <div className="text-center py-10 space-y-6 animate-fade-in-up">
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-500 rounded-full border border-emerald-100 flex items-center justify-center mx-auto shadow-xs">
                    <Icon icon="lucide:check-circle-2" width={32} height={32} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-slate-900">Message Sent!</h2>
                    <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-medium">
                      Thank you for contacting Bright Life Educational Institute. Your message has been sent successfully. We will reply to your inquiry at the email address provided shortly.
                    </p>
                  </div>
                  
                  <div className="pt-6">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="bg-slate-950 hover:bg-slate-800 text-white font-extrabold px-6 py-3 rounded-xl transition duration-205 text-xs tracking-wider uppercase"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard Contact Form */
                <>
                  <h2 className="text-xl font-black text-slate-900 pb-6 border-b border-slate-100">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    {/* Honeypot field (hidden from humans, bot bait) */}
                    <input
                      type="text"
                      name="botField"
                      value={formData.botField}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject of message"
                          className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Your Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={submitted}
                        className="w-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold py-3.5 px-6 rounded-xl transition duration-300 hover:cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                      >
                        {submitted ? (
                          <>
                            <Icon icon="lucide:loader-2" className="animate-spin" width={16} />
                            Sending Message...
                          </>
                        ) : (
                          'Submit Message'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
