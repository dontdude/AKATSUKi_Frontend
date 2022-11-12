import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AKATSUKi</title>
        <meta name="description" content="AKATSUKi is an anime and manga social networking and social cataloging webapp run by volunteers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Body */}
      <Header />
      <Feed /> 

    </div>
  )
}
