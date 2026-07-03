import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the enrollment guidelines, tuition policies, fees, and code of conduct for Bright Life Educational Institute.',
}

export default function TermsPage() {
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
            Terms & Conditions
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 leading-tight">Terms & Conditions</h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Last updated: July 2026. General terms governing student registration and academic enrollment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-3xl px-6 text-slate-600 space-y-8 font-medium text-sm sm:text-base leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">1. Enrollment Acceptance</h2>
            <p>
              By submitting an online admission form or registering a student at Bright Life Educational Institute, you agree to comply with our academic guidelines, batch schedules, and administrative directives. Enrollment approval is subject to seat availability and assessment criteria.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">2. Fee Payments & Cancellations</h2>
            <p>
              All fees for school tuitions, board preparation packages, or language classes must be paid according to the pre-agreed installment plan or monthly schedule. 
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
              <li>Tuition fees are non-refundable once the batch teaching sessions have commenced.</li>
              <li>A student wishing to withdraw or transfer classes must submit an official notice to the front office at least 7 days in advance.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">3. Class Schedules & Attendance</h2>
            <p>
              Bright Life reserves the right to adjust batch timings, change assigned tutors, or combine classes in the event of emergencies, government exam schedule changes, or scheduling conflicts. Students are expected to maintain at least 85% attendance for optimal board exam performance.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">4. Code of Conduct</h2>
            <p>
              We maintain a strict learning environment dedicated to respect, integrity, and diligence. Any student engaging in disruption, cheating, academic misconduct, or vandalism of campus property will be subject to immediate disciplinary actions, including suspension or permanent dismissal without fee refunds.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">5. Limitation of Liability</h2>
            <p>
              While Bright Life provides top-tier coaching resources, study guides, and mock tests, academic results depend on student participation and work ethic. The institute does not guarantee specific letter grades or placement rankings.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
