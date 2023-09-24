import React, { useState, useRef } from 'react'
import { accordionProp } from './type'

const Accordion: React.FC<accordionProp> = ({ answer, question }) => {
  const [isPlus, setIsPlus] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleIcon = () => {
    setIsPlus((prev) => !prev)
  }

  const getContentHeight = () => {
    if (contentRef.current) {
      return isPlus ? contentRef.current.scrollHeight + 'px' : '0'
    }
    return '0'
  }

  return (
    <div id='faq' className='border-b border-tertiary pb-3 w-fit mb-6'>
      <div
        onClick={toggleIcon}
        className='flex items-center justify-between mb-5 cursor-pointer'
      >
        <p>{question}</p>
        <div className='ml-3'>
          <div
            className={`w-3 h-[1.5px] ${
              isPlus ? 'plus' : ''
            } bg-white transform origin-center transition-transform rotate-0`}
          />
          <div
            className={`w-3 h-[1.5px] ${
              isPlus ? '' : 'minus'
            } bg-white transform origin-center transition-transform rotate-90`}
          />
        </div>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: getContentHeight(),
          overflow: 'hidden',
          transition: 'max-height 0.2s ease-in-out',
        }}
      >
        <p className='py-4 px-2 rounded-lg bg-white/20'>{answer}</p>
      </div>
    </div>
  )
}

export default Accordion
