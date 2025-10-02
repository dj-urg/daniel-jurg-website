import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Jurg - Digital Researcher',
  description: 'Digital researcher working on conservative media and digital audience engagement.',
  keywords: 'conservative media, digital audience engagement, alternative influence networks, reactionary fandoms, YouTube analysis, digital methods, research, VUB, academia',
  authors: [{ name: 'Daniel Jurg' }],
  openGraph: {
    title: 'Daniel Jurg - Digital Researcher',
    description: 'Digital researcher working on conservative media and digital audience engagement.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
