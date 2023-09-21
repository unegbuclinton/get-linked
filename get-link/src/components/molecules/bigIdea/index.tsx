import React from 'react'

const BigIdea = () => {
  return (
    <div className='flex justify-center text-white items-center pt-16 pb-20 border border-white/20'>
      <img src='/bigIdea.svg' alt='img-idea' />
      <div className='max-w-primary-width ml-[109px]'>
        <h3 className='text-4xl font-bold'>
          Introduction to getlinked <br />
          <span className='text-tertiary'>tech Hackathon 1.0</span>
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
    </div>
  )
}

export default BigIdea
