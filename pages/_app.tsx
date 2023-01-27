import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const title="ふぃぼなっち鯖 discordコミュニティサーバー";
  const description="雑談、マイクラ、原神などのdiscordサーバー。メンバー100人突破。ブーストレベル2突破。";
  const url="https://fibosaba.com/";
  const imageUrl="https://fibosaba.com/imgs/top.png";
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fiboooo_" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
      </Head>
      <Component {...pageProps} />
    </>
    

  )
}
