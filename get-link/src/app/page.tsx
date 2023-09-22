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

export default function Home() {
  return (
    <main className='bg-primary '>
      <Navbar />
      <HeroSection />
      <BigIdea />
      <Rules />
      <Criteria />
      <FrequentlyAsked />
      <Prize />
      <Sponsor />
      <PrivacyPolicy />
      <Footer />
    </main>
  )
}
