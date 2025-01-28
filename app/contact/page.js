import Header from '@/components/Header/Header'
import Map from '@/components/Map/Map'
import Footer from '@/components/Footer/Footer'
import styles from '../page.module.css'


export default function Contact() {
  return (
    <main className={styles.main}>
      <Header />
     <h2 className={styles.h2}>  Nous contacter </h2>
      <Map />
      <Footer />

     
    </main>
  )
}
