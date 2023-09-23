import Button from '@/components/atoms/Button/Index'
import { navMenuItems } from '@/utils/jsonData'
import Link from 'next/link'
import React from 'react'

const MenuItems = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='bg-primary h-fit w-[100%] px-9 py-5'>
      <div className='flex flex-col text-white gap-5'>
        <div onClick={onClose} className='flex justify-end w-full'>
          <img src='/cancel.svg' alt='' />
        </div>
        {navMenuItems?.map(({ text, link }, idx) => (
          <Link className='text-lg' key={idx} href={link}>
            {text}
          </Link>
        ))}
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
