import Image from 'next/image'
import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <Header />
    <Banner />
     

     
    </main>
  )
}
