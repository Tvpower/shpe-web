import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHPE - Society of Hispanic Professional Engineers',
  description: 'Empowering Hispanic engineers and scientists to achieve their full potential while contributing to a diverse and inclusive STEM workforce.',
  keywords: ['SHPE', 'Hispanic Engineers', 'STEM', 'Professional Development', 'Engineering', 'Community'],
  authors: [{ name: 'SHPE' }],
  openGraph: {
    title: 'SHPE - Society of Hispanic Professional Engineers',
    description: 'Empowering Hispanic engineers and scientists to achieve their full potential while contributing to a diverse and inclusive STEM workforce.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
