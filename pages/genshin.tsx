import {Header} from '@/components/Header'
import {Card} from '@/components/Card'
import { Footer } from '@/components/Footer'
import Link from 'next/link'



export default function Home() {
  return (
    <>
      <Header/>

      <div className="text-center bg-genshin pb-16 lg:pb-32 xl:pb-64">
        <h1 className="pt-8 sm:pt-20 text-4xl text-white sm:text-6xl font-bold text-shadow">ふぃぼ鯖で原神!!!</h1>
        <h1 className="pt-12 text-white text-2xl sm:text-3xl font-bold text-shadow">マルチプレイ、聖遺物厳選、便利なBOTなど!!</h1>

      </div>
      <main className="flex justify-around bg-teal-100 pt-4 pb-20">
        <div className='fibo'>
          <Card 
            title='みんなでマルチプレイ！'
            description='素材集めのときなどにマルチの募集をかけると結構すぐに集まります！'
            photo1='/imgs/genshin3.png'
            photo2='/imgs/genshin4.png'
            link=''
            linktext=''
          />

          <Card 
            title='聖遺物厳選専用のチャンネルも!!'
            description='ほとんどの鯖民は世界ランク8であるため、聖遺物厳選もかなり行っています！そのため、知識も豊富で、わからないこともきけます！'
            photo1='/imgs/gensen2.png'
            photo2='/imgs/gensen1.png'
            link=''
            linktext=''
          />

          

          <Card 
            title='原神はいいぞ！'
            description='原神やったことない方でもこの鯖に入って原神をはじめよう！今日こんなにサーバーが活性化してるのも原神のおかげにほかなりません！最高のゲームです！'
            photo1='/imgs/genshin5.png'
            photo2='/imgs/genshin6.png'
            link=''
            linktext=''
          />
        </div>
      </main>
      <Footer/>
    </>
  )
}
