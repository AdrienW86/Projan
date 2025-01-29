'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'
import styles from './banner.module.css';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg', 
  '/image4.jpg', 
  '/image5.jpg',
  '/image6.jpg',
  '/image7.jpg',
  '/image8.jpg',
  '/image9.jpg',
  '/image10.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.carousel} id="carouselExampleFade">
        <div className={styles.btnContainer}>
            <Link className={styles.btn} href="/contact"> Réserver </Link>
            <Link className={styles.btn} href="/pictures"> Voir toutes les photos </Link>
           
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
              height: '85vh', 
            }}
          />
        ))}
      </div>   
    </div>
  );
}
