import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

import { Footer, Navbar } from '../components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fix Moty',
  description: 'Find the quality service for your car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} absolute min-h-screen w-full h-full mx-auto`}>
        <Navbar/>
        <main className=" h-full px-4 md:px-9 lg:px-12 relative mx-auto mt-[56px]" >
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
