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
    <div className='flex items-center justify-center py-8 mt-16'>
      <div className='max-w-primary-width text-white pt-10'>
        <h3 className='font-bold text-4xl mb-4 mr-28'>
          Privacy Policy and <br /> <span className='text-tertiary'>Terms</span>
        </h3>
        <p className='text-sm text-white/75'>
          Last updated on September 12, 2023
        </p>
        <p className='text-sm mb-14'>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className='px-[72px] py-14 text-sm border border-tertiary bg-light-tertiary'>
          <p>
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
                <span>
                  <img src='/tick.svg' alt='tick' />
                </span>
                {text}
              </li>
            ))}
          </ul>
          <div className='flex justify-center'>
            <Button type='button'>Read more</Button>
          </div>
        </div>
      </div>
      <img src='/security.svg' alt='security' className='ml-[50px]' />
    </div>
  )
}

export default PrivacyPolicy
