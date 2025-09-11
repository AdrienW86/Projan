import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Château de Projan',
  description: "Venez vivre une expérience inoubliable au Château de Projan, situé près de Pau...",
  icons: {
    icon: '/favicon2.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

