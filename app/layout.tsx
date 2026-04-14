import React from "react"
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import FloatingCTA from '@/components/boty/floating-cta'
import './globals.css'

export const metadata: Metadata = {
  title: 'Montessori Prime Schools - Nurturing Excellence Across Telangana',
  description: 'CBSE-affiliated Montessori education with 33+ years of excellence across 15 campuses in Telangana. Admissions open for 2026–2027. Holistic development, experienced faculty, modern facilities.',
  generator: 'montessorigroups.edu',
  keywords: ['montessori school', 'CBSE school Telangana', 'best school Warangal', 'admissions 2026', 'montessori prime', 'holistic education', 'boarding school Telangana'],
  icons: {
    icon: '/FEVICON.svg',
    apple: '/FEVICON.svg',
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGJMVSZ');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGJMVSZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  )
}
