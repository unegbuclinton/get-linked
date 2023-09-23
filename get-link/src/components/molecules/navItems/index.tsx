'use client'
import Button from '@/components/atoms/Button/Index'
import { navMenuItems } from '@/utils/jsonData'
import Link from 'next/link'
import React from 'react'
import MenuItems from '../menuItems'

const NavItems = ({ outline }: { outline: boolean }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const toggleMenu = () => {
    setIsVisible(true)
  }

  return (
    <div>
      <div className='hidden lg:flex items-center text-white gap-14'>
        {navMenuItems?.map(({ text, link }, idx) => (
          <Link className='text-base link-underline' key={idx} href={link}>
            {text}
          </Link>
        ))}
        <Link href={'/authPages/register'} className='ml-[121px]'>
          <Button outline={outline} type='button'>
            Register
          </Button>
        </Link>
      </div>
      <img
        src={'/hamburger.svg'}
        alt='logo'
        className='block lg:hidden'
        onClick={toggleMenu}
      />
      <div
        className={`w-full md:w-[50%] fixed z-10 top-0 right-0 bottom-0 transition-transform duration-500 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <MenuItems onClose={() => setIsVisible(false)} />
      </div>
    </div>
  )
}

export default NavItems
