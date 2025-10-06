import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anil Kumar Pillai - DevOps Engineer | SRE | AI Enthusiast',
  description: 'Senior DevOps/SRE Engineer with 11+ years of experience in cloud infrastructure, Kubernetes, CI/CD, and AI innovation. Building resilient infrastructure and exploring AI frontiers.',
  keywords: ['DevOps', 'SRE', 'Cloud Engineer', 'Kubernetes', 'Azure', 'AWS', 'AI', 'Machine Learning', 'CI/CD', 'Infrastructure as Code'],
  authors: [{ name: 'Anil Kumar Pillai' }],
  creator: 'Anil Kumar Pillai',
  publisher: 'Anil Kumar Pillai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anilkp.com',
    title: 'Anil Kumar Pillai - DevOps Engineer | SRE | AI Enthusiast',
    description: 'Senior DevOps/SRE Engineer with 11+ years of experience in cloud infrastructure, Kubernetes, CI/CD, and AI innovation.',
    siteName: 'Anil Kumar Pillai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Kumar Pillai - DevOps Engineer | SRE | AI Enthusiast',
    description: 'Senior DevOps/SRE Engineer with 11+ years of experience in cloud infrastructure, Kubernetes, CI/CD, and AI innovation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1890ff" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
