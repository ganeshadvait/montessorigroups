import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Montessori Groups of Schools — Nurturing Excellence Across Telangana',
  description: 'CBSE-affiliated Montessori education with 33+ years of excellence across 15 campuses in Telangana. Admissions open for 2026–2027. Holistic development, experienced faculty, modern facilities.',
  generator: 'montessorigroups.edu',
  keywords: ['montessori school', 'CBSE school Telangana', 'best school Warangal', 'admissions 2026', 'montessori prime', 'holistic education', 'boarding school Telangana'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FCBA28',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
