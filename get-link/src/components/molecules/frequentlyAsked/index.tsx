'use client'
import React from 'react'
import Accordion from '../accordion'
import { FAQ } from '@/utils/jsonData'

const FrequentlyAsked = () => {
  return (
    <div className='flex flex-col lg:flex-row px-12 lg:px-0 items-center justify-center py-10 gap-[66px] lg:gap-0'>
      <div className='max-w-primary-width text-white'>
        <h3 className='font-bold text-xl lg:text-4xl mb-4 lg:mr-28 text-center lg:text-left'>
          Frequently Ask <br /> <span className='text-tertiary'>Question</span>
        </h3>
        <p className='text-xs lg:text-sm mb-14'>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        {FAQ?.map(({ question, answer }, idx) => (
          <Accordion key={idx} question={question} answer={answer} />
        ))}
      </div>
      <img src='/question.svg' alt='' />
    </div>
  )
}

export default FrequentlyAsked
