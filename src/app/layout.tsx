import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
// import Navbar from '@/components/Navbar'
import LenisProvider from '@/wrappers/LenisProvider'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })

const poppins = Poppins({ weight: ["200", '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin-ext"] })

export const metadata: Metadata = {
  title: 'PRO HR CONSULTANT',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
