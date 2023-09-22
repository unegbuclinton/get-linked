import React from 'react'

const Prize = () => {
  return (
    <div className='bg-[#110B27] py-16 mt-10 mb-12 text-white'>
      <div className='flex items-center justify-center'>
        <div className='w-[40%]'></div>
        <div>
          <div>
            <h3 className='text-4xl font-bold mb-5'>
              Prizes and
              <br />
              <span className='text-tertiary'> Rewards</span>
            </h3>
            <p className='text-sm mb-14'>
              Highlight of the prize sand rewards for the winners and for
              participants
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <img src='/medals.svg' alt='medal' />
        <img className='' src='/Rewards.svg' alt='reward' />
      </div>
    </div>
  )
}

export default Prize
