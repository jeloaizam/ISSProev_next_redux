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
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700&display=swap');
        </style>
      </Head>
        <div className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 '>
          <div className="h-28 bg-gradient-to-r from-[#ffffff] to-[#6a6bac] grid content-end text-center">
              <h1 className={"popins text-5xl"}>MODE SELECT</h1>
          </div>
          <div className='h-1 bg-[#667a00]'></div>
          <div className='bg-[url(".././assets/background.jpg")] bg-cover bg-center '>
            <section id="Menu" className='snap-start'>
              <Menu/>
            </section>
            <section id="Footer" className='snap-start'>
              <Footer/>
            </section>
          </div>
        </div>
    </>
  )
}
