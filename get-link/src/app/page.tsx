'use client'
import { useEffect } from 'react'
import BigIdea from '@/components/molecules/bigIdea'
import Criteria from '@/components/molecules/criteria'
import Footer from '@/components/molecules/footer'
import FrequentlyAsked from '@/components/molecules/frequentlyAsked'
import HeroSection from '@/components/molecules/heroSection'
import Navbar from '@/components/molecules/navbar'
import PrivacyPolicy from '@/components/molecules/privacyPolicy'
import Prize from '@/components/molecules/prize'
import Rules from '@/components/molecules/rules'
import Sponsor from '@/components/molecules/sponsors'
import Timeline from '@/components/molecules/timeline'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useState } from 'react'
import Preloader from '@/components/preloader'

export default function Home() {
  const [delay, setDelay] = useState(true)
  useEffect(() => {
    Aos.init({ duration: 1000 })
    const timer = setTimeout(() => {
      setDelay(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  if (delay) return <Preloader />
  return (
    <main className='bg-primary '>
      <div>
        <img
          src='/lens1.svg'
          className='absolute hidden lg:block left-0 top-0'
        />
        <img
          src='/lens2.svg'
          className='absolute hidden lg:block left-0 top-[1339px]'
        />
        <img
          src='/lens3.svg'
          className='absolute hidden lg:block right-[21px] top-[1610px]'
        />
        <img
          src='/lens4.svg'
          className='absolute hidden lg:block -left-[145px] top-[2406px]'
        />
        <img
          src='/lens5.svg'
          className='absolute hidden lg:block -right-[417px] top-[2642px]'
        />
        <img
          src='/lens4.svg'
          className='absolute hidden lg:block -left-[145px] top-[2406px]'
        />
        <img
          src='/lens5.svg'
          className='absolute hidden lg:block -right-[417px] top-[2642px]'
        />
        <img
          src='/lens5.svg'
          className='absolute hidden lg:block -right-[417px] top-[2642px]'
        />
        {/* <img src='/lens6.svg' className='absolute -left-[145px] top-[2406px]' />
        <img
          src='/lens7.svg'
          className='absolute -right-[417px] top-[2642px]'
        /> */}
        {/* <img src='/lens8.svg' className='absolute -left-[231px] top-[6333px]' />
        <img
          src='/lens9.svg'
          className='absolute -right-[471px] top-[6802px]'
        /> */}
        <img
          src='/lens10.svg'
          className='absolute hidden lg:block -left-[196px] top-[7376px]'
        />
      </div>
      <Navbar />
      <HeroSection />
      <BigIdea />
      <Rules />
      <Criteria />
      <FrequentlyAsked />
      <Timeline />
      <Prize />
      <Sponsor />
      <PrivacyPolicy />
      <Footer />
    </main>
  )
}
