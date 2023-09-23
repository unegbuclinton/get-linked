'use client'
import Button from '@/components/atoms/Button/Index'
import InputField from '@/components/atoms/input'
import NavItems from '@/components/molecules/navItems'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  name: string
  topic: string
  email: string
  message: string
}
const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    // resolver: yupResolver(contactSchema),
  })
  return (
    <div className=' bg-primary p-12'>
      <div className='md:hidden'>
        <img src={'/back.svg'} alt='' />
      </div>
      <nav className='hidden md:flex bg-transparent items-center border-b border-white/20 justify-between px-14 pb-6 pt-9 lg:pt-[63px]'>
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
      <p className='max-w-[195px] font-semibold text-xl mb-6 pt-10 text-tertiary'>
        Questions or need assistance? Let us know about it
      </p>
      <p className='max-w-[240px] text-white text-xs'>
        Email us below to any question related to our event
      </p>
      <form action=''>
        <InputField
          register={register}
          label='name'
          id='name'
          name='name'
          type='name'
          placeholder='Name'
          error={errors.name?.message}
        />
        <InputField
          register={register}
          label='topic'
          id='topic'
          name='topic'
          placeholder='Topic'
          type='topic'
          error={errors.topic?.message}
        />
        <InputField
          register={register}
          label='email'
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          error={errors.email?.message}
        />
        <textarea
          placeholder='Message'
          className='bg-light-tertiary w-full resize-none rounded-[4px] mt-5 border border-white h-20 px-6 py-2'
        ></textarea>
        <div className='flex justify-center mt-7'>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
      <p className='text-sm text-tertiary text-center mt-10 mb-1.5'>Share on</p>
      <p className='flex items-center justify-center w-full gap-4 '>
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
  )
}

export default ContactPage
