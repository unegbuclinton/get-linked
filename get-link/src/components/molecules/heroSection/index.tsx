import Button from '@/components/atoms/Button/Index'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='text-center lg:text-left lg:pl-[128px] flex flex-col items-center lg:flex-row text-white'>
      <p className='block lg:hidden pt-8 relative whitespace-nowrap text-base w-fit font-bold mb-10'>
        Igniting a Revolution in HR Innovation
        <span className='absolute right-0 -bottom-3'>
          <img src='/dash-mobile.svg' alt='dash' />
        </span>
      </p>

      <div
        data-aos='fade-up'
        className='flex flex-col items-start justify-center px-9 lg:px-0'
      >
        <div className='flex flex-col justify-center'>
          <h2 className=' relative text-4xl lg:text-[80px] whitespace-nowrap font-bold'>
            getlinked Tech
            <span>
              <img
                src='/bulb.svg'
                alt='bulb'
                className='hidden lg:block absolute -top-9 right-[97px]'
              />
              <img
                src='/bulb-mobile.svg'
                alt='bulb'
                className='block lg:hidden absolute -top-4 right-[27px]'
              />
            </span>
          </h2>
          <h2 className='flex items-center justify-items-center relative text-4xl lg:text-[80px] whitespace-nowrap font-bold'>
            Hackathon <span className='text-tertiary '>1.0 </span>
            <span className='lg:hidden'>
              <img src={'/link-mobile.svg'} alt='link' />
            </span>
            <span className='lg:hidden'>
              <img src={'/bomb-mobile.svg'} alt='link' />
            </span>
            <span className='hidden absolute lg:flex -right-[80px] top-3'>
              <img src={'/link.svg'} alt='link' />
              <img src={'/bomb.svg'} alt='bomb' />
            </span>
          </h2>
          <p className='text-[13px] lg:text-xl mt-2 mb-10'>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
        </div>
        <div className='w-full flex justify-center lg:justify-start mb-16'>
          <Button type='button'>
            <Link href={'/authPages/register'}>Register</Link>
          </Button>
        </div>
        <img src='/countdown.svg' alt='' />
      </div>
      <div data-aos='zoom-in'>
        <p className='relative hidden lg:block pt-8 whitespace-nowrap text-[36px] w-fit font-bold mb-10'>
          Igniting a Revolution in HR Innovation
          <span className='absolute right-0 -bottom-2'>
            <img src='/dash.svg' alt='dash' />
          </span>
        </p>
        <img src='/hero.png' alt='hero image' />
      </div>
    </div>
  )
}

export default HeroSection
