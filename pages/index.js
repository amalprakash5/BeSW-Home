import Head from 'next/head'
import Header from './components/Header'
import Status from './components/Status'

export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>BeSW - DoNation Home</title>
        <meta name="description" content="BeSW - DoNation Home" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Status />
    </div>
  )
}
