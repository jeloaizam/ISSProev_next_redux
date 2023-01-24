import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS y Tailwind CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
        </style>
      </Head>
        <div className="h-28 bg-gradient-to-r from-[#ffffff] to-[#6a6bac] grid content-end text-center">
            <h1 className={styles.marker + " " + "text-5xl"}>MODE SELECT</h1>
        </div>
        <div className='h-1 bg-[#667a00]'></div>
        <section id="Menu" className='snap-start'>
          <Menu/>
        </section>
        <section id="Footer" className='snap-start'>
          <Footer/>
        </section>
    </>
  )
}
