import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://autodp.org'),
  title: 'Auto DP - Garage & Remorquage 24/7',
  description: 'Auto DP - Votre partenaire de confiance pour le garage, remorquage 24/7 et achat de véhicules en Belgique',
  keywords: 'garage, remorquage, auto, véhicules, belgique, 24/7, réparation, entretien, achat voiture',
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
    title: 'Auto DP - Garage & Remorquage 24/7',
    description: 'Votre partenaire de confiance pour le garage, remorquage 24/7 et achat de véhicules en Belgique',
    type: 'website',
    locale: 'fr_BE',
    siteName: 'Auto DP'
  },
  twitter: {
    card: 'summary',
    title: 'Auto DP - Garage & Remorquage 24/7',
    description: 'Votre partenaire de confiance pour le garage, remorquage 24/7 et achat de véhicules en Belgique'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
