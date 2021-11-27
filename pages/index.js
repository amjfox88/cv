import Head from 'next/head'
import TypeIt from "typeit-react";
import styles from '../styles/Home.module.css'

export default function Home() {

  const strings = [
    'Wake up MJ...',
    'The Matrix has you...',
    'Follow the white rabbit.',
    'Knock, knock, MJ.'
  ]

  return (
    <>
      <Head>
        <title>MJ</title>
        <meta name="description" content="The Matrix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TypeIt
          options={{
            nextStringDelay: 750,
            speed: 200,
            startDelay: 900,
            cursor: false
          }}
          getBeforeInit={(instance) => {
            instance
            .type(strings[0])
            .pause(750)
            .delete(strings[0].length)
            .pause(500)
            .type(strings[1])
            .pause(1000)
            .delete(strings[1].length)
            .pause(500)
            .type(strings[2])
            .pause(750)
            .delete(strings[2].length)
            .pause(500)
            .type(strings[3])
            return instance;
          }}
        />
      </main>
    </>
  )
}
