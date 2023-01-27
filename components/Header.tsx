import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>ふぃぼなっち鯖 discordコミュニティサーバー</title>
        <meta name="description" content="雑談、マイクラ、原神などのdiscordサーバー。メンバー100人突破。ブーストレベル2突破。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" bg-teal-300 lg:flex text-white text-shadow font-bold drop-shadow-md">
        <h1 className="sm:text-5xl text-3xl p-5">ふぃぼなっちserver</h1>
        <h1 className="sm:text-2xl lg:pt-10 pl-10">雑談、マイクラ、原神などのdiscordサーバー</h1>
      </header>
    </>
  )
}
