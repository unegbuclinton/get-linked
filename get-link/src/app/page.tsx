import BigIdea from '@/components/molecules/bigIdea'
import Criteria from '@/components/molecules/criteria'
import FrequentlyAsked from '@/components/molecules/frequentlyAsked'
import HeroSection from '@/components/molecules/heroSection'
import Navbar from '@/components/molecules/navbar'
import Rules from '@/components/molecules/rules/inde'

export default function Home() {
  return (
    <main className='bg-primary '>
      <Navbar />
      <HeroSection />
      <BigIdea />
      <Rules />
      <Criteria />
      <FrequentlyAsked />
    </main>
  )
}
