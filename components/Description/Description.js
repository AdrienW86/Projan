'use client'; // pour un projet Next.js avec hooks React

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './description.module.css';

export default function Description() {
  // Utilisation de refs distincts pour chaque élément
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref11, inView: inView11 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref12, inView: inView12 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref13, inView: inView13 } = useInView({ triggerOnce: false, threshold: 0.0 });

  return (
    <AnimatePresence>
      <section className={styles.description}>
        <div className={styles.box}>
          <motion.h2
            ref={ref2}
            initial={{ opacity: 0, x: 100 }} // Animation de départ (vers la droite)
            animate={{
              opacity: inView2 ? 1 : 0,
              x: inView2 ? 0 : 100,
            }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className={styles.h2}
          >
            Localisation
          </motion.h2>
        </div>

        <motion.section className={styles.localisation}>
          <Image          
            src="/image1.jpg"
            alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
            width={400}
            height={300}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.intro}>
            <motion.p
              ref={ref4}
              initial={{ opacity: 0, y: 50 }} // Paragraphe venant de bas
              animate={{
                opacity: inView4 ? 1 : 0,
                y: inView4 ? 0 : 50,
              }}
              exit={{ opacity: 0, y: 50 }}  // Animation de sortie vers le bas
              transition={{ duration: 0.7 }}
            > 
              Nichée au cœur de la Gascogne, entre collines verdoyantes et paysages vallonnés, le Château de Projan vous ouvre ses portes pour une escapade hors du temps...
            </motion.p>
          </div>
        </motion.section>

        <div className={styles.box}>
          <motion.h2
            ref={ref3}
            initial={{ opacity: 0, x: -100 }} // Animation de départ (vers la gauche)
            animate={{
              opacity: inView3 ? 1 : 0,
              x: inView3 ? 0 : -100,
            }}
            exit={{ opacity: 0, x: 100 }}  // Animation de sortie vers la droite
            transition={{ duration: 1 }}
            className={styles.h2}
          >
            Pourquoi séjourner au Château de Projan ?
          </motion.h2>
        </div>

        <div className={styles.article} >
          <ul>
            <li className={styles.li}>
              <motion.img
                ref={ref6}  // Référence unique pour cette image
                initial={{ opacity: 0, x: -100 }} // Image venant de la droite
                animate={{
                  opacity: inView6 ? 1 : 0,
                  x: inView6 ? 0 : -100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src="/image5.jpg"
                alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
                width={200}
                height={200}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.picture}
              />
              <motion.p
                ref={ref7}  // Référence unique pour ce paragraphe
                initial={{ opacity: 0, x: 100 }} // Paragraphe venant de la gauche
                animate={{
                  opacity: inView7 ? 1 : 0,
                  x: inView7 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className={styles.p}
              >
                Un cadre enchanteur : Profitez d’un parc majestueux où il fait bon se promener, lire ou simplement se ressourcer.
              </motion.p>
            </li>
            <li className={styles.li}>
              <motion.p
                ref={ref8}  // Référence unique pour ce paragraphe
                initial={{ opacity: 0, x: -100 }} // Paragraphe venant de la droite
                animate={{
                  opacity: inView8 ? 1 : 0,
                  x: inView8 ? 0 : -100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={styles.p}
              > 
                Une gastronomie régionale : Découvrez les saveurs authentiques de la Gascogne 
                avec des produits locaux et une cuisine généreuse.
              </motion.p>
              <motion.img
                ref={ref9}  // Référence unique pour cette image
                initial={{ opacity: 0, x: 100 }} // Image venant de la gauche
                animate={{
                  opacity: inView9 ? 1 : 0,
                  x: inView9 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                src="/image9.jpg"
                alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
                width={200}
                height={200}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.picture}
              />
            </li>
            <li className={styles.li}>
              <motion.img
                ref={ref10}  // Référence unique pour cette image
                initial={{ opacity: 0, x: -100 }} // Image venant de la droite
                animate={{
                  opacity: inView10 ? 1 : 0,
                  x: inView10 ? 0 : -100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src="/image9.jpg"
                alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
                width={200}
                height={200}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.picture}
              />
              <motion.p
                ref={ref11}  // Référence unique pour ce paragraphe
                initial={{ opacity: 0, x: 100 }} // Paragraphe venant de la gauche
                animate={{
                  opacity: inView11 ? 1 : 0,
                  x: inView11 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className={styles.p}
              >
                Des activités variées : Balades à vélo, visites de vignobles, découverte des villages pittoresques et des marchés traditionnels de la région.
              </motion.p>
            </li>
            <li className={styles.li}>
              <motion.p
                ref={ref12}  // Référence unique pour ce paragraphe
                initial={{ opacity: 0, x: -100 }} // Paragraphe venant de la droite
                animate={{
                  opacity: inView12 ? 1 : 0,
                  x: inView12 ? 0 : -100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={styles.p}
              >
                Bien-être et détente : Laissez-vous tenter par un moment de relaxation sur la terrasse ensoleillée ou près de la piscine, dans une atmosphère paisible.
              </motion.p>
              <motion.img
                ref={ref13}  // Référence unique pour cette image
                initial={{ opacity: 0, x: 100 }} // Image venant de la gauche
                animate={{
                  opacity: inView13 ? 1 : 0,
                  x: inView13 ? 0 : 100,
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                src="/image1.jpg"
                alt="Vue pittoresque et charmante du Château de Projan entouré de collines"
                width={300}
                height={300}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.picture2}
              />
            </li>
          </ul>

          <p>
            Venez découvrir le charme et l’authenticité du Château de Projan, un lieu où passé et présent s’entrelacent pour vous offrir une expérience unique.
            <a href="/reservation" className={styles.ctaButton}>Réservez dès aujourd’hui</a> pour vivre un moment d'exception dans un cadre enchanteur.
          </p>
        </div>
      </section>
    </AnimatePresence>
  );
}
