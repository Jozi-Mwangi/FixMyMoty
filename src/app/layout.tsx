import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

import { Navbar } from '../components'

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
        <main className=" h-full px-4 mx-auto mt-[56px]" >
          {children}
        </main>
      </body>
    </html>
  )
}
