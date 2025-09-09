import React from 'react'
import styles from './intro.module.css'

export default function Intro() {
  return (
    <section>
        <h2 className={styles.h2}> Bienvenue au Château de Projan</h2>
         <p className={styles.intro}>
        Offrez-vous une parenthèse d’élégance et de sérénité
        au Château de Projan. Entre pierre et verdure, chaque 
        détail de notre domaine a été pensé pour vous offrir confort, 
        charme et authenticité. Découvrez nos chambres élégantes, savourez 
        la cuisine locale et laissez-vous séduire par le charme intemporel 
        de notre château. Ici, chaque séjour devient un souvenir inoubliable.
    </p>
    </section>
  )
}
