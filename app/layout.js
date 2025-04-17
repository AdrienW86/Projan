import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Château de Projan',
  description: "Venez vivre une expérience inoubliable au Château de Projan, situé près de Pau. Niché au cœur de la nature, ce château moderne allie confort et élégance. Profitez d'un séjour dans un cadre unique avec des chambres spacieuses et une vue imprenable. Parfait pour une escapade romantique ou un moment de détente. Réservez dès maintenant pour une expérience exceptionnelle !"
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
