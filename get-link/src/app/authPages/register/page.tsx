'use client'
import Button from '@/components/atoms/Button/Index'
import InputField from '@/components/atoms/input'
import NavItems from '@/components/molecules/navItems'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { registerSchema } from '@/utils/schema'
import { categoty, size } from '@/utils/jsonData'

type Inputs = {
  name: string
  topic: string
  email: string
  category: string
  message: string
  size: string
  phone: number
}
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  })
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

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
      <div className='pl-8 py-10 md:hidden'>
        <p className='text-[15px] font-semibold text-tertiary'>Register</p>
      </div>
      <div className='lg:flex justify-around items-center flex-row'>
        <div className='pb-6'>
          <img src='/register-img.svg' alt='img' />
        </div>
        <div className='lg:bg-light-tertiary max-w-[617px] w-full rounded-lg px-8 lg:px-20 pb-16'>
          <p className='text-4xl text-tertiary font-semibold py-11'>Register</p>
          <img src='/move.svg' alt='' />

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              register={register}
              label='Name'
              id='name'
              name='name'
              type='name'
              placeholder='Enter the name of your group'
              error={errors.name?.message}
            />
            <InputField
              register={register}
              label='Phone'
              id='phone'
              name='phone'
              placeholder='Enter your phone number'
              type='phone'
              error={errors.phone?.message}
            />
            <InputField
              register={register}
              label='Email'
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email address'
              error={errors.email?.message}
            />
            <InputField
              register={register}
              label='Topic'
              id='topic'
              name='topic'
              type='topic'
              placeholder='What is your group project topic'
              error={errors.email?.message}
            />
            <div className='flex w-full text-white gap-4'>
              <div className=''>
                <label className='font-semibold text-sm text-gray-600 pb-1 block'>
                  Category
                </label>
                <Controller
                  name={'category'}
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <select
                      {...field}
                      placeholder='Select your category'
                      className='bg-light-tertiary rounded-[4px] border border-white px-3 py-2 text-sm'
                    >
                      <option value=''>Select One</option>
                      {categoty.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
              <div>
                <label className='font-semibold text-sm text-gray-600 pb-1 block'>
                  Group size
                </label>
                <Controller
                  name={'size'}
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <select
                      {...field}
                      className='bg-light-tertiary rounded-[4px] border border-white px-3 py-2'
                    >
                      <option value=''>Select One</option>
                      {size.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>
            <p className='text-center lg:text-left text-tertiary my-3 text-[9px] lg:text-xs'>
              Please review your registration details before submitting
            </p>

            <div className='text-center lg:text-left'>
              <label>
                <input
                  type='checkbox'
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />{' '}
                I agree to the terms and conditions
              </label>
            </div>

            <div className='flex justify-center mt-7'>
              <Button width='100%' type='submit'>
                Register Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
