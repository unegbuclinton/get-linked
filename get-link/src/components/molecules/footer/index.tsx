import React, { ReactNode } from 'react'

const Footer = () => {
  const contact: Array<{ text: string; icon: ReactNode }> = [
    { text: '+234 6707653444', icon: <img src='/phone.svg' alt='' /> },
    {
      text: '27,Alara Street Yaba 100012 Lagos State',
      icon: <img src='/location.svg' alt='' />,
    },
  ]
  return (
    <footer className='text-xs text-white bg-[#110B27]'>
      <div className='flex justify-center pt-20 pb-14'>
        <div className='max-w-[410px] mr-[190px]'>
          <img src='/footer-logo.svg' alt='' className='mb-2' />
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <p className='flex mt-14'>
            <span>Term of use</span>
            <span className='text-tertiary'>|</span>
            <span>Privacy policy</span>
          </p>
        </div>

        <div className='mr-[160px]'>
          <p className='text-tertiary mb-1.5'>Useful links</p>
          <ul>
            {['Overview', 'Timeline', 'FAQs', 'Register'].map((x, idx) => (
              <li key={idx} className='mb-3'>
                {x}
              </li>
            ))}
          </ul>
          <p className='flex items-center gap-4 text-tertiary'>
            Follow us:
            <span>
              <img src='instagram.svg' alt='ig' />
            </span>
            <span>
              <img src='/twitter.svg' alt='' />
            </span>
            <span>
              <img src='/fb.svg' alt='' />
            </span>
            <span>
              <img src='/linkedln.svg' alt='linkedin' />
            </span>
          </p>
        </div>
        <div>
          <p className='text-tertiary mb-5'>Contact Us</p>
          <ul>
            {contact?.map(({ text, icon }, idx) => (
              <li
                key={idx}
                className='flex gap-4 max-w-[200px] mb-5 items-start'
              >
                <p>{icon}</p>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='text-center py-14 '>
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  )
}

export default Footer
