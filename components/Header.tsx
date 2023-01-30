
export function Header() {
  return (
    <header className="bg-teal-300 text-white text-shadow font-bold drop-shadow-md">
      <div className="lg:flex">
        <a className="sm:text-5xl text-3xl lg:p-5 p-3 block" href="/">ふぃぼなっちserver</a>
        <a className="sm:text-2xl lg:pt-10 pl-10 block">雑談、マイクラ、原神などのdiscordサーバー</a>
      </div>
      <ul className="md:text-2xl text-xl flex pl-10 pt-3">
        <li className="px-5"><a href="/">ホーム</a></li>
        <li className="px-5"><a href="/test">テスト</a></li>
        <li className="px-5"><a href="">原神</a></li>
        <li className="px-5"><a href="">原神</a></li>
      </ul>
    </header>
    

  )
}
