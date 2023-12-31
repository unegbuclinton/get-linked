import React from 'react'

const Sponsor = () => {
  return (
    <div
      data-aos='flip-in-right'
      className='border-b border-white/5 px-8 lg:px-0'
    >
      <div className='text-center text-white mx-auto max-w-[1255px] py-10 '>
        <h2 className='text-xl lg:text-4xl font-bold'>Partners and Sponsors</h2>
        <p className='text-sm lg:text-xs max-w-[450px] mx-auto mt-5'>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <div className=' flex justify-center items-center border border-tertiary rounded-[5px] px-12 py-9 lg:p-36 mt-16'>
          <img src='/sponsors.svg' alt='sponsors' />
        </div>
      </div>
    </div>
  )
}

export default Sponsor
