import React from 'react'

const Rules = () => {
  return (
    <div
      data-aos='fade-right'
      className='flex flex-col-reverse lg:flex-row justify-center items-center border-b border-white/10 px-11 lg:px-0 pb-12 lg:pb-0'
    >
      <div
        data-aos='fade-down'
        className='max-w-primary-width text-center lg:text-left text-white'
      >
        <h3 className='font-bold text-xl lg:text-4xl mb-4 lg:mr-28'>
          Rules and <br /> <span className='text-tertiary'>Guidelines</span>
        </h3>
        <p className='text-[13px] lg:text-sm'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
      <img src='/rules.svg' alt='' />
    </div>
  )
}

export default Rules
