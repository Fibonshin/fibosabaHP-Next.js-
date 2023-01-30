import {Header} from '@/components/Header'
import {Card} from '@/components/Card'
import { Footer } from '@/components/Footer'



export default function Home() {
  return (
    <>
      <Header/>

      <div className="text-center cina pb-16">
        <h1 className="pt-8 sm:pt-20 text-white text-3xl font-bold text-shadow">ブーストレベル２突破🎉</h1>
        <h1 className="pt-4 text-white text-3xl font-bold text-shadow mb-20">メンバー100人突破🎉</h1>

        <a href='https://discord.gg/3NaJcDHctB' className="rounded-full bg-teal-400 text-2xl font-bold text-white hover:bg-white hover:text-teal-500 p-6">サーバーに入る！</a>

      </div>
      <main className="lg:flex justify-around bg-teal-100 pt-4 pb-20">
        <div className='fibo'>
          <Card 
            title='原神でマルチプレイ!'
            description='十数人のアクティブな鯖民が原神をしており、雑談やマルチも盛んです。
            ほとんどの方がランク50~の上級者であるため、素材集めなども手伝ってくれます。'
            photo1='/imgs/genshin1.png'
            photo2='/imgs/genshin2.png'
          />

          <Card 
            title='マイクラサーバーで遊ぶ！!'
            description='常設のマインクラフトサーバーが用意されてるため、いつでもマルチプレイを楽しむことができます。マインクラフトJava版が必要となります。'
            photo1='/imgs/minecraft1.png'
            photo2='/imgs/minecraft2.png'
          />

          <Card 
            title='サーバーにはいったら...!'
            description='まずは自己紹介をしてみましょう！鯖民がスタンプで応えてくれます！'
            photo1='/imgs/discord1.png'
            photo2='/imgs/discord2.png'
          />
        </div>
        
        
        <div className="m-4  pb-11">
          <iframe src="https://discord.com/widget?id=879288794560471050&theme=dark" width="350" height="600" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" className="pb-4 "></iframe>
          <a className="twitter-timeline" data-width="350" data-height="600" data-theme="light" href="https://twitter.com/fibo_server?ref_src=twsrc%5Etfw">Tweets by fibo_server</a> <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </main>
      <Footer/>
    </>
  )
}
