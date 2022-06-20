import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>annaptaszynski.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
You can email <a href="mailto:podcast@qi.com">podcast@qi.com</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
