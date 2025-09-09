'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './banner.module.css';

const videos = [
  
  '/projan1.mp4',
  '/projan2.mp4',
  '/projan.mp4',
];

export default function VideoCarousel({ fadeDuration = 1.5, clipDuration = 7 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, (clipDuration - fadeDuration) * 1000); // déclenchement avant la fin du clip

    return () => clearInterval(interval);
  }, [clipDuration, fadeDuration]);

  // Forcer la lecture de la vidéo active
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }
  }, [currentIndex]);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0 });

  return (
    <div className={styles.carousel}>
      <div className={styles.btnContainer}>
        <motion.a
          className={styles.btn}
          href="/contact"
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -50 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          Réserver
        </motion.a>
        <motion.a
          className={styles.btn}
          href="/pictures"
          ref={ref2}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 50 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          Voir toutes les photos
        </motion.a>
      </div>

      <div className={styles.carouselInner}>
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video}
            muted
            loop={false}
            playsInline
            preload="auto"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: `opacity ${fadeDuration}s ease-in-out`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '85vh',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
    </div>
  );
}
