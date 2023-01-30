import Link from "next/link";

export function Header() {
  return (
    <header className="bg-teal-300 text-white text-shadow font-bold drop-shadow-md">
      <div className="lg:flex">
        <Link className="sm:text-5xl text-3xl lg:p-5 p-3 block" href="/">ふぃぼなっちserver</Link>
        <h1 className="sm:text-2xl lg:pt-10 pl-10 ">雑談、マイクラ、原神などのdiscordサーバー</h1>
      </div>
      <ul className="md:text-2xl text-xl flex pl-10 pt-3">
        <li className="px-5"><Link href="/">ホーム</Link></li>
        <li className="px-5"><Link href="/test">テスト</Link></li>
        <li className="px-5"><Link href="/">原神</Link></li>
        <li className="px-5"><Link href="/">原神</Link></li>
      </ul>
    </header>
    

  )
}
