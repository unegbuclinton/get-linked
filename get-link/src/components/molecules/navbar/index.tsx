import React from 'react'
import NavItems from '../navItems'

const Navbar = () => {
  return (
    <nav className='relative bg-transparent flex items-center border-b border-white/20 justify-between px-14 lg:px-[128px] pb-6 pt-9 lg:pt-[63px]'>
      <img
        src={'/logo.svg'}
        width={171}
        height={44}
        alt='logo'
        className='hidden lg:block'
      />
      <img src={'/logo-mobile.svg'} alt='logo' className='block lg:hidden' />
      <NavItems />
    </nav>
  )
}

export default Navbar
