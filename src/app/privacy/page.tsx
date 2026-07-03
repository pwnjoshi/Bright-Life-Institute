import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Bright Life Educational Institute collects, protects, and handles student and guardian personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="relative pt-40 pb-20 bg-slate-50/50 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-10 left-[15%] h-64 w-64 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 right-[15%] h-64 w-64 rounded-full bg-brand-red/4 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 shadow-xs pl-2 pr-3.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase text-slate-600">
            <span className="bg-brand-red text-white text-[9px] font-black px-2.5 py-0.5 rounded-full mr-1">LEGAL</span>
            Privacy Policy
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-955 leading-tight">Privacy Policy</h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Last updated: July 2026. Your privacy and trust are our top priorities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-3xl px-6 text-slate-600 space-y-8 font-medium text-sm sm:text-base leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">1. Information We Collect</h2>
            <p>
              When you use our online admission registration form or contact forms, we collect personal information necessary to process your inquiry. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
              <li>Student details: Full name, gender, current address, previous school/college, and class grade.</li>
              <li>Guardian details: Full name of parent/guardian.</li>
              <li>Contact details: Mobile number and email address.</li>
              <li>Preferences: Course interests and preferred batch time slots.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">2. How We Use Your Information</h2>
            <p>
              The information we collect is strictly used to serve you. Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
              <li>To evaluate student enrollment eligibility and assign correct learning batches.</li>
              <li>To contact parents and students directly regarding admission confirmation, schedules, and tuition fees.</li>
              <li>To respond to queries, feedback, or messages sent via our contact desk.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard security measures to safeguard all digital information collected. Registration entries are transmitted securely and accessed only by authorized administrative staff. We do not sell, rent, or lease our subscriber list or student details to any third-party marketing companies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">4. Cookies & Analytics</h2>
            <p>
              Our website may use local storage to enforce submission rate limits (preventing spam bombing) and standard session tracking cookies to improve user experience. No tracking data is shared with external advertising networks.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">5. Your Rights & Access</h2>
            <p>
              You have the right to request access to the information we hold about you, or ask to update, correct, or completely delete your record from our enrollment registry. For database update requests, please contact us directly at <a href="mailto:info@brightlife.edu.np" className="text-brand-red font-bold hover:underline">info@brightlife.edu.np</a>.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
