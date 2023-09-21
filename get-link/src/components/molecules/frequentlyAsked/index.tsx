'use client'
import React from 'react'
import Accordion from '../accordion'
import { FAQ } from '@/utils/jsonData'

const FrequentlyAsked = () => {
  return (
    <div className='flex items-center justify-center py-10'>
      <div className='max-w-primary-width text-white'>
        <h3 className='font-bold text-4xl mb-4 mr-28'>
          Frequently Ask <br /> <span className='text-tertiary'>Question</span>
        </h3>
        <p className='text-sm mb-14'>
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
