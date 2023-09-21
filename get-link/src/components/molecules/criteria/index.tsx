import Button from '@/components/atoms/Button/Index'
import { criteriaInfo } from '@/utils/jsonData'
import React from 'react'

const Criteria = () => {
  return (
    <div className='flex items-center mt-20 pb-20 border-b border-white/20 text-white'>
      <img src='/judging.svg' alt='' />
      <div className='max-w-primary-width ml-12'>
        <h3 className='text-4xl font-bold mb-5'>
          Judging Criteria <br />
          <span className='text-tertiary'> Key attributes</span>
        </h3>
        {criteriaInfo?.map(({ preamble, text }, idx) => (
          <p className='mb-5 text-sm' key={idx}>
            <span className='text-tertiary'> {preamble}</span>: {text}
          </p>
        ))}
        <Button type='button'>Read More</Button>
      </div>
    </div>
  )
}

export default Criteria
