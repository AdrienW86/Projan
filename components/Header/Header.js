"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Image
        src="/logo3.png"
        alt="Vue du château-hôtel"
        width={200}
        height={100}
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <h1 className={styles.h1}> Château de Projan</h1>
      <div className={styles.buttonBox}> 
        <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle} aria-label="hamburger button">
            <span className={styles.line}> </span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
        </div>
        {isMenuOpen && 
      <section className={styles.menu}>
        <ul>
          <li> <Link className={styles.li} href="/" onClick={handleMenuToggle}> Accueil </Link></li>
          <li> <Link className={styles.li} href="/web" onClick={handleMenuToggle}> Sites web </Link></li>
          <li> <Link className={styles.li} href="/appli" onClick={handleMenuToggle}> Equipements </Link></li>
          <li> <Link className={styles.li} href="/pictures" onClick={handleMenuToggle}> Photos </Link></li>
          <li> <Link className={styles.li} href="/contact" onClick={handleMenuToggle}> Contact </Link></li>
        </ul>
      </section>}
    </header>
  )
}
