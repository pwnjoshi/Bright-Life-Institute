'use client'

import React, { useState } from 'react'

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    guardianName: '',
    email: '',
    contactNo: '',
    gender: '',
    address: '',
    schoolName: '',
    grade: '',
    semesterSubject: '',
    otherCourses: '',
    convenientTime: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        body: JSON.stringify({ ...formData, formType: 'admission' }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        alert('Admission Registration Form Submitted Successfully! We will contact you within 24 hours.')
        setFormData({
          firstName: '',
          lastName: '',
          guardianName: '',
          email: '',
          contactNo: '',
          gender: '',
          address: '',
          schoolName: '',
          grade: '',
          semesterSubject: '',
          otherCourses: '',
          convenientTime: '',
        })
      } else {
        alert('Error: ' + (data.error || 'Failed to submit form.'))
      }
    } catch (err) {
      alert('Failed to submit form. Please try again.')
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

        <div className="container mx-auto max-w-4xl px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 shadow-xs pl-2 pr-3.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase text-slate-600">
            <span className="bg-brand-red text-white text-[9px] font-black px-2.5 py-0.5 rounded-full mr-1">ESTD. 2005</span>
            Admission
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-955 leading-tight">
            Online Admission & Enrollment
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Submit your details below to register for regular tuition or university coaching batches.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100/90 shadow-sm space-y-8">
            <div className="pb-6 border-b border-slate-100">
              <h2 className="text-xl font-black text-slate-900">Registration Form</h2>
              <p className="text-slate-500 text-xs mt-1">Please fill out all the mandatory fields carefully.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Guardian Name *</label>
                  <input
                    type="text"
                    name="guardianName"
                    required
                    value={formData.guardianName}
                    onChange={handleChange}
                    placeholder="Guardian's full name"
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Gender *</label>
                  <select
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
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
                    placeholder="e.g. name@example.com"
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    name="contactNo"
                    required
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="Phone or mobile number"
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Current address"
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">School / College Name *</label>
                  <input
                    type="text"
                    name="schoolName"
                    required
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="School/College attended"
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Grade / Class *</label>
                  <select
                    name="grade"
                    required
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <option value="">Select Grade</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                    <option value="BBS">BBS</option>
                    <option value="BBA">BBA</option>
                    <option value="BSC">B.Sc</option>
                    <option value="MBS">MBS</option>
                    <option value="MBM">MBM</option>
                    <option value="MSC">M.Sc</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Semester / Subject</label>
                  <input
                    type="text"
                    name="semesterSubject"
                    value={formData.semesterSubject}
                    onChange={handleChange}
                    placeholder="e.g. Math, 1st Sem"
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Other Courses</label>
                  <select
                    name="otherCourses"
                    value={formData.otherCourses}
                    onChange={handleChange}
                    className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <option value="">None</option>
                    <option value="TSC">शिक्षक सेवा आयोग (TSC)</option>
                    <option value="PSC">लोक सेवा आयोग (PSC)</option>
                    <option value="PraSa">प्रा. स (PraSa)</option>
                    <option value="Kharidar">खरिदार (Kharidar)</option>
                    <option value="NaSu">ना.सु (NaSu)</option>
                    <option value="BasicEnglish">Basic English Language</option>
                    <option value="AdvEnglish">Advanced English Language</option>
                    <option value="IELTS">IELTS Preparation</option>
                    <option value="BridgeCourse">Bridge Course</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Convenient Time Slot *</label>
                <input
                  type="text"
                  name="convenientTime"
                  required
                  value={formData.convenientTime}
                  onChange={handleChange}
                  placeholder="e.g. 6:00 AM - 8:00 AM, Evening"
                  className="w-full border border-slate-200/80 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold py-3 px-6 rounded-xl transition duration-300 hover:cursor-pointer disabled:opacity-50 text-xs tracking-wider uppercase"
                >
                  {submitted ? 'Submitting Form...' : 'Submit Admission Form'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  )
}
