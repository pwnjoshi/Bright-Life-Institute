import Image from 'next/image'
import { Icon } from '@iconify/react'

export const metadata = {
  title: 'Our Staff & Faculty - Bright Life Educational Institute',
  description: 'Meet our highly experienced, qualified, and dedicated teaching and administrative faculty.',
}

const teachingFaculty = [
  { name: 'Mr. Dev Pant',            role: 'Finance & Management Teacher', qualification: 'M.B.S. Finance / M.Phil.', icon: 'lucide:line-chart' },
  { name: 'Mr. Tikêndrã Bhãtt',      role: 'Management Faculty',           qualification: 'M.BM', icon: 'lucide:briefcase' },
  { name: 'Mr. Ganesh D. Sharma',    role: 'Mathematics Teacher',           qualification: 'B.Sc. / B.Ed.', icon: 'lucide:calculator' },
  { name: 'Mr. Ram Kunwar',          role: 'English Teacher',               qualification: 'M.A. English', icon: 'lucide:book-open' },
  { name: 'Mr. Dev Raj Paneru',      role: 'Finance Teacher',               qualification: 'M.B.S. Finance', icon: 'lucide:trending-up' },
  { name: 'Mr. Dipendra Ayer',       role: 'Accounts Teacher',              qualification: 'M.B.S. Account', icon: 'lucide:receipt' },
  { name: 'Mr. Janak Raj Joshi',     role: 'Accounts Teacher',              qualification: 'M.B.S. Account', icon: 'lucide:database' },
  { name: 'Mr. Navraj Pant',         role: 'English Teacher',               qualification: 'M.Ed. in English', icon: 'lucide:languages' },
  { name: 'Mr. Mahadev Awasthi',     role: 'Physics Teacher',               qualification: 'M.Sc. in Physics', icon: 'lucide:atom' },
  { name: 'Mr. Kamal Raj Bhandari',  role: 'Mathematics Teacher',           qualification: 'M.A. in Mathematics', icon: 'lucide:percent' },
]

const adminFaculty = [
  { name: 'Bikram Nath',  role: 'Administrator', qualification: 'MBS', icon: 'lucide:shield-check' },
  { name: 'Devaki Joshi', role: 'Accountant',    qualification: 'BBS', icon: 'lucide:wallet' },
]

const avatarColors = [
  'bg-rose-50 text-rose-600 border-rose-100',
  'bg-blue-50 text-blue-600 border-blue-100',
  'bg-violet-50 text-violet-600 border-violet-100',
  'bg-emerald-50 text-emerald-600 border-emerald-100',
  'bg-amber-50 text-amber-600 border-amber-100',
  'bg-sky-50 text-sky-600 border-sky-100',
  'bg-pink-50 text-pink-600 border-pink-100',
  'bg-indigo-50 text-indigo-600 border-indigo-100',
  'bg-teal-50 text-teal-600 border-teal-100',
  'bg-orange-50 text-orange-600 border-orange-100',
]

export default function StaffsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Premium Typographic Header (Light Theme) */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-20 bg-slate-50/50 border-b border-slate-100 overflow-hidden text-center">
        {/* Soft light background glow orbs */}
        <div className="absolute top-10 left-[15%] h-64 w-64 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 right-[15%] h-64 w-64 rounded-full bg-brand-red/4 blur-3xl pointer-events-none" />
        
        {/* Subtle grid dots backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl px-4 relative z-10 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 shadow-xs pl-2 pr-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-slate-600">
            <span className="bg-brand-red text-white text-[9px] font-black px-2.5 py-0.5 rounded-full mr-1">ESTD. 2005</span>
            Faculty
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">Our Faculty</h1>
          <p className="text-slate-500 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Experienced educators and administrators dedicated to shaping academic excellence.
          </p>
        </div>
      </section>

      {/* Founder highlight */}
      <div className="bg-slate-50 border-b border-slate-100 py-10 sm:py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
            <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
              <Image
                src="/images/uploads/sudarsan-sit-e1668217849758-300x292.jpg"
                alt="Mr. Sudarsan Pd. Bhatt"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Founder & Director</span>
              <h2 className="text-2xl font-bold text-slate-900">Mr. Sudarsan Pd. Bhatt</h2>
              <p className="text-slate-500 text-xs font-semibold">M.Ed. Mathematics · 20+ Years Experience</p>
              <p className="text-slate-655 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                &ldquo;As the founder of Bright Life, my goal has always been to provide quality coaching and study strategies that help every student achieve their highest potential.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-10 sm:py-16 space-y-12 sm:space-y-16">

        {/* Teaching Faculty */}
        <div>
          <div className="mb-8 sm:mb-10 text-center space-y-2">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Teaching Staff</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">Our Excellent Teaching Faculty</h2>
            <div className="h-[2px] w-8 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teachingFaculty.map((faculty, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white border border-slate-100 hover:border-slate-200/80 hover:shadow-xs rounded-2xl p-5 transition-all duration-200 group"
              >
                <div className={`h-12 w-12 rounded-xl border flex items-center justify-center shrink-0 ${avatarColors[idx % avatarColors.length]}`}>
                  <Icon icon={faculty.icon} width={20} height={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-brand-red transition-colors">{faculty.name}</h3>
                  <p className="text-slate-500 text-[11px] font-semibold mt-0.5">{faculty.role}</p>
                  <p className="text-slate-400 text-[10px] font-medium mt-0.5">{faculty.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Faculty */}
        <div>
          <div className="mb-10 text-center space-y-2">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Administrative Staff</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Non-Teaching & Administrative Faculty</h2>
            <div className="h-[2px] w-8 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {adminFaculty.map((admin, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white border border-slate-100 hover:border-slate-200/80 hover:shadow-xs rounded-2xl p-5 transition-all duration-200 group"
              >
                <div className={`h-12 w-12 rounded-xl border flex items-center justify-center shrink-0 ${avatarColors[(idx + 4) % avatarColors.length]}`}>
                  <Icon icon={admin.icon} width={20} height={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-brand-red transition-colors">{admin.name}</h3>
                  <p className="text-slate-500 text-[11px] font-semibold mt-0.5">{admin.role}</p>
                  <p className="text-slate-400 text-[10px] font-medium mt-0.5">{admin.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
