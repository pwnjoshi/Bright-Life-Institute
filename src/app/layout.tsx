import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/Layout/Header"
import Footer from "@/app/components/Layout/Footer"
import ScrollToTop from "@/app/components/ScrollToTop"
import Aoscompo from "@/utils/aos"

const bodyFont = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"]
})

const titleFont = Outfit({ 
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: {
    default: "Bright Life Educational Institute | Premier Coaching Hub in Mahendranagar",
    template: "%s | Bright Life Educational Institute"
  },
  description: "Bright Life Educational Institute is Mahendranagar's leading tuition & coaching center. Offering school boards (SEE, +2), bachelor's coaching, languages, and technical skills.",
  keywords: ["Bright Life Educational Institute", "Tuition Center Mahendranagar", "SEE Prep Class Kanchanpur", "Bridge Course", "Language Classes", "BBS Coaching", "Tech Sangi", "BBA prep", "Bhimdatta tuition"],
  authors: [{ name: "Bright Life" }],
  metadataBase: new URL('https://brightlife.edu.np'),
  openGraph: {
    title: "Bright Life Educational Institute | Premier Coaching Hub",
    description: "Mahendranagar's leading coaching center since 2005. School tuitions, board exam preparation, language lessons, and creative skills classes.",
    url: "https://brightlife.edu.np",
    siteName: "Bright Life",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Life Educational Institute",
    description: "Mahendranagar's leading coaching center since 2005.",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${titleFont.variable} font-sans`} suppressHydrationWarning>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
      </body>
    </html>
  )
}
