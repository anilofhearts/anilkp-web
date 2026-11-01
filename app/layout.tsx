import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anil Kumar Pillai - Senior Infrastructure & Cloud Engineer | SRE | Kubernetes | AIOps',
  description: 'Senior infrastructure and SRE engineer with 7+ years cloud/Kubernetes/observability and 14 years mission-critical infrastructure. DevOps & SRE lead for PCI-DSS payments at NEXT UK. CKA. Relocating to Abu Dhabi, UAE.',
  keywords: ['SRE', 'Infrastructure Engineer', 'Kubernetes', 'CKA', 'Azure', 'Observability', 'AIOps', 'MCP', 'PCI-DSS', 'DevOps', 'Abu Dhabi'],
  authors: [{ name: 'Anil Kumar Pillai' }],
  creator: 'Anil Kumar Pillai',
  publisher: 'Anil Kumar Pillai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anilkp.com',
    title: 'Anil Kumar Pillai - Senior Infrastructure & Cloud Engineer',
    description: 'Observability · SRE · Kubernetes · AIOps. Payments-platform SRE lead, CKA, relocating to Abu Dhabi.',
    siteName: 'Anil Kumar Pillai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Kumar Pillai - Senior Infrastructure & Cloud Engineer',
    description: 'Observability · SRE · Kubernetes · AIOps. Payments-platform SRE lead, CKA, relocating to Abu Dhabi.',
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
