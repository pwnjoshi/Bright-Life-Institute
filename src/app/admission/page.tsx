import type { Metadata } from 'next'
import AdmissionClient from './AdmissionClient'

export const metadata: Metadata = {
  title: 'Online Admission & Enrollment',
  description: 'Register online for school tuitions, SEE Packages, +2 courses, university coaching, language classes, and technical programs at Bright Life.',
  openGraph: {
    title: 'Online Admission | Bright Life Educational Institute',
    description: 'Submit your enrollment form online to register for upcoming tuition batches and professional courses.',
  }
}

export default function Page() {
  return <AdmissionClient />
}
