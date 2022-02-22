import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sabaila Doministiku" />
        <img src="/dominante.jpeg" alt="Dominante" />
        <p className="description">
          La sabaila doministuku es super dominante. Ojalá entender euskera para hacer esta página mejor.
        </p>
        <p>
          sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku 
          sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku 
          sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku 
          sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku 
          sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku 
          sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku 
          sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku sabaila doministuku 
        </p>
      </main>

      <Footer />
    </div>
  )
}
