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
        <link rel="icon" href="favicon2.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
