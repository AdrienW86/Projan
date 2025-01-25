'use client';

import { useEffect, useState } from 'react';
import styles from './banner.module.css';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg', // Ajoute autant d'images que tu veux
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change l'image toutes les 3 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle quand le composant est démonté
  }, []);

  return (
    <div className={styles.carousel} id="carouselExampleFade">
        <div className={styles.btnContainer}>
            <button className={styles.btn}> Réserver </button>
            <button className={styles.btn}> Voir toutes les photos </button>
           
        </div>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px', // Ajuste la hauteur du carrousel
            }}
          />
        ))}
      </div>
      <a className={styles.carouselControlPrev} href="#carouselExampleFade" role="button" data-bs-slide="prev">
        <span className={styles.carouselControlPrevIcon} aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a className={styles.carouselControlNext} href="#carouselExampleFade" role="button" data-bs-slide="next">
        <span className={styles.carouselControlNextIcon} aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}
