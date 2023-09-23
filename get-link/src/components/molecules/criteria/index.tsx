import Button from '@/components/atoms/Button/Index'
import { criteriaInfo } from '@/utils/jsonData'
import React from 'react'

const Criteria = () => {
  return (
    <div
      data-aos='fade-down-right'
      className='flex flex-col lg:flex-row justify-center items-center mt-20 pb-20 px-11 lg:px-0 border-b border-white/20 text-white'
    >
      <img src='/judging.svg' alt='' />
      <div className='max-w-primary-width lg:ml-12 text-center lg:text-left'>
        <h3 className='text-xl lg:text-4xl font-bold mb-5'>
          Judging Criteria <br />
          <span className='text-tertiary'> Key attributes</span>
        </h3>
        {criteriaInfo?.map(({ preamble, text }, idx) => (
          <p className='mb-5 text-[13px] lg:text-sm' key={idx}>
            <span className='text-tertiary'> {preamble}</span>: {text}
          </p>
        ))}
        <div className='hidden lg:block'>
          <Button type='button'>Read More</Button>
        </div>
        <div className='block lg:hidden'>
          <Button small type='button'>
            Read More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Criteria
