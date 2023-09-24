import Button from '@/components/atoms/Button/Index'
import { navMenuItems } from '@/utils/jsonData'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import React from 'react'

const MenuItems = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='bg-primary h-fit w-[100%] px-9 py-5'>
      <div className='flex flex-col text-white gap-5'>
        <div onClick={onClose} className='flex justify-end w-full'>
          <img src='/cancel.svg' alt='' />
        </div>
        {navMenuItems?.map(({ text, link, offset, to }, idx) =>
          link.length > 1 ? (
            <Link key={idx} href={link} className='text-base link-underline'>
              {text}
            </Link>
          ) : (
            <ScrollLink
              key={idx}
              to={to}
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              className='text-base link-underline'
            >
              {text}
            </ScrollLink>
          )
        )}
        <div className=''>
          <Button type='button'>
            <Link href={'/authPages/register'}>Register</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MenuItems
