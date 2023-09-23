import Button from '@/components/atoms/Button/Index'
import React from 'react'

const PrivacyPolicy = () => {
  const policy = [
    {
      text: ' The Standard License grants you a non-exclusive right to navigate and register for our event',
    },
    {
      text: 'You are licensed to use the item available at any free source sites, for your project developement',
    },
  ]
  return (
    <div className='flex flex-col gap-12 lg:gap-0 lg:flex-row px-8 lg:px-12 items-center justify-center py-8 mt-16'>
      <div className='lg:max-w-primary-width text-white pt-10 text-center lg:text-left'>
        <h3 className='font-bold text-xl lg:text-4xl lg:mb-4 lg:mr-28'>
          Privacy Policy and <br /> <span className='text-tertiary'>Terms</span>
        </h3>
        <p className='text-xs lg:text-sm mb-8 lg:mb-0 text-white/75'>
          Last updated on September 12, 2023
        </p>
        <p className='text-sm mb-14'>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className='px-3 lg:px-[72px] py-14 text-sm border border-tertiary bg-light-tertiary'>
          <p className='text-center lg:text-left mb-4'>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p className='text-base text-tertiary font-bold mb-1.5'>
            Licensing Policy
          </p>
          <p className='text-sm text-white'>
            Here are terms of our Standard License:
          </p>
          <ul>
            {policy?.map(({ text }, idx) => (
              <li key={idx} className='flex gap-4 items-start my-5'>
                <p>
                  <img src='/tick.svg' alt='tick' />
                </p>
                {text}
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center'>
            <Button type='button'>Read more</Button>
          </div>
          <div className='flex lg:hidden justify-center'>
            <Button small type='button'>
              Read more
            </Button>
          </div>
        </div>
      </div>
      <img src='/security.svg' alt='security' className='lg:ml-[50px]' />
    </div>
  )
}

export default PrivacyPolicy
