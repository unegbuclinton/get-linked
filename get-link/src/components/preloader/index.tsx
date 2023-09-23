import React from 'react'

const Preloader = () => {
  return (
    <div className='h-screen bg-primary flex justify-center items-center'>
      <img src='/logo.svg' alt='' className='animate-pulse' />
    </div>
  )
}

export default Preloader
