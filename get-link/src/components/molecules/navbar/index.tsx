import Image from 'next/image'
import React from 'react'
import NavItems from '../navItems'

const Navbar = () => {
  return (
    <nav className='bg-transparent flex items-center border-b border-white/20 justify-between px-[128px] pb-6 pt-[63px]'>
      <Image src={'/logo.svg'} width={171} height={44} alt='logo' />
      <NavItems />
    </nav>
  )
}

export default Navbar
