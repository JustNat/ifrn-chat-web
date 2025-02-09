import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Caminhão viado</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

        <h1 className={styles.title}>
          Bem-vindo ao <a href="https://nextjs.org">Caminhão Viado!</a>
        </h1>
        <img src='https://preview.redd.it/jrbyu3qzp1p41.jpg?auto=webp&s=a6d440dc3f71f15e1de549674502e1ff1583989f'></img>
        <Login />
        </>

        

  )
}
