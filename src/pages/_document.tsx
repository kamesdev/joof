import { NextPage } from 'next'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { DocumentProps } from 'postcss'
import Nav from '../components/Nav'

class MyDocument extends Document {

  render() {
      return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}

export default MyDocument 