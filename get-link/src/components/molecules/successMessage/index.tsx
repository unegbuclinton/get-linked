import Button from '@/components/atoms/Button/Index'
import Link from 'next/link'
import React from 'react'

const SucessMessage = () => {
  return (
    <div className='max-w-[600px] flex flex-col text-white text-center items-center justify-center'>
      <img src='/congratulation.svg' alt='' />
      <h3 className='text-4xl font-semibold mb-4'>
        Congratulations <br /> you have successfully Registered!
      </h3>
      <p className='max-w-[240px] text-sm font-semibold mb-9'>
        Yes, it was easy and you did it! check your mail box for next step
      </p>
      <Button width='100%' type='button'>
        <Link href={'/'}>Back</Link>
      </Button>
    </div>
  )
}

export default SucessMessage
