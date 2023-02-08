import Head from 'next/head'
import React from 'react'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/AtkinsonHyperlegible-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
