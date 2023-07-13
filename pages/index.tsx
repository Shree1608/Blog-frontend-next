import Image from 'next/image'
import { Inter } from 'next/font/google'
import Format from './layout/format'
import Header from './components/header'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section4 from './components/section4'
import Section3 from './components/section3'
import Section5 from './components/section5'
import Section6 from './components/section6'
import { Footer } from 'flowbite-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className=' sticky'>
    <Header  ></Header>
  <div>
      <Section1/>
    </div>
   <div>
   <Section2/>
    </div>
   <Section3/>
   <Section4 />
   <Section5/>
   <Section6 />
   <Footer />
   </div>
  )
}
