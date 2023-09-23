import React from 'react'

const BigIdea = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center text-white items-center pt-8 lg:pt-16 pb-20 border border-white/20 px-11 lg:px-0'>
      <img src='/bigIdea.svg' alt='img-idea' data-aos='fade-left' />
      <div
        data-aos='fade-right'
        className='lg:max-w-primary-width lg:ml-[109px] mt-14 lg:mt-0 text-center lg:text-left'
      >
        <h3 className='text-xl lg:text-4xl font-bold mb-2.5 lg:mb-0'>
          Introduction to getlinked <br />
          <span className='text-tertiary'>tech Hackathon 1.0</span>
        </h3>
        <p className='text-[13px] lg:text-sm '>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </div>
  )
}

export default BigIdea
