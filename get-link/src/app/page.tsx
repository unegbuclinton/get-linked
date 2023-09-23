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
import Floating from '@/components/floating-items'

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
      <Floating />
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
