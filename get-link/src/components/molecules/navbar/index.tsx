import React from 'react'
import NavItems from '../navItems'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='relative bg-transparent flex items-center border-b border-white/20 justify-between px-14 lg:px-[128px] pb-6 pt-9 lg:pt-[63px]'>
      <Link href={'/'}>
        <img
          src={'/logo.svg'}
          width={171}
          height={44}
          alt='logo'
          className='hidden lg:block'
        />
      </Link>
      <img src={'/logo-mobile.svg'} alt='logo' className='block lg:hidden' />
      <NavItems outline={false} />
    </nav>
  )
}

export default Navbar
