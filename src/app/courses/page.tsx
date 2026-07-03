import type { Metadata } from 'next'
import CoursesClient from './CoursesClient'

export const metadata: Metadata = {
  title: 'Courses Offered',
  description: 'Explore tuition classes for Grades 5-10, SEE board prep packages, high school (+2 level), university exam coaching (BBA, BBS, B.Sc), and creative career skills.',
  openGraph: {
    title: 'Courses & Programs | Bright Life Educational Institute',
    description: 'Explore our tuition booster classes, entrance exam packages, languages, and technical courses designed for student success.',
  }
}

export default function Page() {
  return <CoursesClient />
}
