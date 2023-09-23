import React from 'react'

const Prize = () => {
  return (
    <div
      data-aos='zoom-in'
      className='bg-[#110B27] py-16 mt-10 mb-12 text-white px-8'
    >
      <div className='flex items-center justify-center'>
        <div className='hidden lg:block w-[40%]'></div>
        <div>
          <div className='text-center lg:text-left'>
            <h3 className='text-xl lg:text-4xl font-bold mb-5'>
              Prizes and
              <br />
              <span className='text-tertiary'> Rewards</span>
            </h3>
            <p className='text-xs lg:text-sm mb-14'>
              Highlight of the prize sand rewards for the winners and for
              participants
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-[51px] lg:gap-0'>
        <img src='/medals.svg' alt='medal' />
        <img className='' src='/Rewards.svg' alt='reward' />
      </div>
    </div>
  )
}

export default Prize
