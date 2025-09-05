import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://autodp.org'),
  title: 'Auto DP - Garage & Takeldienst 24/7',
  description: 'Auto DP - Uw betrouwbare partner voor garage, takeldienst 24/7 en aankoop van voertuigen in België',
  keywords: 'garage, takeldienst, auto, voertuigen, belgië, 24/7, reparatie, onderhoud, auto kopen',
  authors: [{ name: 'Auto DP' }],
  creator: 'Auto DP',
  publisher: 'Auto DP',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg'
  },
  openGraph: {
    title: 'Auto DP - Garage & Takeldienst 24/7',
    description: 'Uw betrouwbare partner voor garage, takeldienst 24/7 en aankoop van voertuigen in België',
    type: 'website',
    locale: 'nl_BE',
    siteName: 'Auto DP'
  },
  twitter: {
    card: 'summary',
    title: 'Auto DP - Garage & Takeldienst 24/7',
    description: 'Uw betrouwbare partner voor garage, takeldienst 24/7 en aankoop van voertuigen in België'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
