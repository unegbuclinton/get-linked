import Button from '@/components/atoms/Button/Index'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  const items: Array<{ text: string; link: string }> = [
    { text: 'Timeline', link: '' },
    { text: 'Overview', link: '' },
    { text: 'FAQs', link: '' },
    { text: 'Contact', link: '' },
  ]
  return (
    <div>
      <div className='flex items-center text-white gap-14'>
        {items?.map(({ text, link }, idx) => (
          <Link className='text-base' key={idx} href={link}>
            {text}
          </Link>
        ))}
        <div className='ml-[121px]'>
          <Button type='button'>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default NavItems
