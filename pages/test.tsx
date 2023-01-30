import {Header} from '@/components/Header'
import {Card} from '@/components/Card'
import { Footer } from '@/components/Footer'



export default function Home() {
  return (
    <>
      <Header/>

      <main className="flex justify-around bg-teal-100 pt-4 pb-20">
        <div className='fibo'>
          <Card 
            title='てすと!'
            description='あぺええええええええええええ'
            photo1='/imgs/genshin1.png'
            photo2='/imgs/genshin2.png'
          />
        </div>
      </main>
      <Footer/>
    </>
  )
}
