import React from 'react'
import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
      src="/logo2.png"
      alt="Vue du château-hôtel"
      width={300}
      height={200}
      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    </header>
  )
}
