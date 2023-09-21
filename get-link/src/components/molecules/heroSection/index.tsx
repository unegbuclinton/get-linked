import Button from '@/components/atoms/Button/Index'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='pl-[128px] flex text-white'>
      <div className='flex flex-col items-start justify-center'>
        <div className='flex flex-col justify-center'>
          <h2 className=' relative text-[80px] whitespace-nowrap font-bold'>
            getlinked Tech
            <span>
              <img
                src='/bulb.svg'
                alt='bulb'
                className='absolute -top-9 right-[97px]'
              />
            </span>
          </h2>
          <h2 className='relative text-[80px] whitespace-nowrap  font-bold'>
            Hackathon <span className='text-tertiary '>1.0 </span>
            <span className='absolute flex -right-[80px] top-3'>
              <img src={'/link.svg'} alt='link' />
              <img src={'/bomb.svg'} alt='bomb' />
            </span>
          </h2>
          <p className='text-xl mt-2 mb-10'>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
        </div>
        <Button type='button'>Register</Button>
        <div className='flex mt-[77px]'>
          <p>
            00 <sub>H</sub>
          </p>
          <p>
            00 <sub>M</sub>
          </p>
          <p>
            00 <sub>S</sub>
          </p>
        </div>
      </div>
      <div className='pt-8'>
        <p className='relative whitespace-nowrap text-[36px] w-fit font-bold mb-10'>
          Igniting a Revolution in HR Innovation
          <span className='absolute right-0 -bottom-2'>
            <img src='/dash.svg' alt='dash' />
          </span>
        </p>
        <img src='/hero-img1.svg' alt='hero image' />
      </div>
    </div>
  )
}

export default HeroSection
