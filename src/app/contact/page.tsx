import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Bright Life Educational Institute. Find our physical map directions, phone contacts, and email inquiry form.',
  openGraph: {
    title: 'Contact Us | Bright Life Educational Institute',
    description: 'Reach out to us via email or call our front desk for quick inquiries about classes and batch schedules.',
  }
}

export default function Page() {
  return <ContactClient />
}
