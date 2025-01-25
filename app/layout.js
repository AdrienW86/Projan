import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Château de Projan',
  description: 'Séjournez dans un château',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
       <head>
        {/* Ajout du favicon */}
        <link rel="icon" href="favicon2.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
