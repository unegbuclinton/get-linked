import React from 'react'

const Rules = () => {
  return (
    <div className='flex justify-center items-center border border-white/20'>
      <div className='max-w-primary-width text-white'>
        <h3 className='font-bold text-4xl mb-4 mr-28'>
          Rules and <br /> <span className='text-tertiary'>Guidelines</span>
        </h3>
        <p className='text-sm'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <img src='/rules.svg' alt='' />
    </div>
  )
}

export default Rules
