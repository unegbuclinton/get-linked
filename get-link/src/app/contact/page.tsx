'use client'
import Button from '@/components/atoms/Button/Index'
import InputField from '@/components/atoms/input'
import NavItems from '@/components/molecules/navItems'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { contactSchema } from '@/utils/schema'

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
    control,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(contactSchema),
  })
  const router = useRouter()

  const onSubmit = (data: Inputs) => {
    alert(`${data.name} thank you for reaching out`)
  }

  return (
    <div className=' bg-primary lg:p-12'>
      <nav className='hidden md:flex bg-transparent items-center justify-between px-14 pb-6 pt-9 lg:pt-[63px] lg:mb-20'>
        <img
          src={'/logo.svg'}
          width={171}
          height={44}
          alt='logo'
          className='hidden lg:block'
        />
        <img src={'/logo-mobile.svg'} alt='logo' className='block lg:hidden' />
        <NavItems outline={false} />
      </nav>
      <div className='flex justify-end py-10 pr-20 md:hidden'>
        <img src={'/back.svg'} alt='' onClick={() => router.push('/')} />
      </div>
      <div className='lg:flex justify-around items-center flex-row-reverse'>
        <div className='lg:bg-light-tertiary max-w-[617px] w-full rounded-lg px-20 pb-16'>
          <p className='max-w-[195px] lg:max-w-[301px]  font-semibold text-xl mb-6 pt-10 text-tertiary'>
            Questions or need assistance? Let us know about it
          </p>
          <p className='max-w-[240px] text-white text-xs'>
            Email us below to any question related to our event
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              register={register}
              id='name'
              name='name'
              type='name'
              placeholder='Name'
              error={errors.name?.message}
            />
            <InputField
              register={register}
              id='topic'
              name='topic'
              placeholder='Topic'
              type='topic'
              error={errors.topic?.message}
            />
            <InputField
              register={register}
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              error={errors.email?.message}
            />
            <Controller
              name='message'
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder='Message'
                  className={`bg-light-tertiary w-full resize-none rounded-[4px] mt-5 border ${
                    errors.message ? 'border-red-500' : 'border-white'
                  } h-20 px-6 py-2`}
                ></textarea>
              )}
            />

            <div className='flex justify-center mt-7'>
              <Button type='submit'>Submit</Button>
            </div>
          </form>
        </div>
        <div className='pb-6'>
          <div className='hidden max-w-[272px] lg:block mb-8 text-white'>
            <h4 className='text-tertiary mb-3 text-4xl'>Get in touch</h4>
            <p className='mb-5'>Contact information</p>
            <p className='mb-5 max-w-[180px]'>
              27,Alara Street Yaba 100012 Lagos State
            </p>
            <p className='mb-5'>Call Us : 07067981819</p>
            <p className='mb-5'>
              we are open from Monday-Friday 08:00am - 05:00pm
            </p>
          </div>
          <p className='text-sm text-tertiary text-center lg:text-left mt-10 mb-1.5'>
            Share on
          </p>
          <p className='flex items-center justify-center lg:justify-start w-full gap-4 '>
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
      </div>
    </div>
  )
}

export default ContactPage
