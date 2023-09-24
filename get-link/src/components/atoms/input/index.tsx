'use client'
import { useState } from 'react'
import { InputProps } from './type'

const InputField: React.FC<InputProps> = ({
  label,
  name,
  type,
  styles,
  id,
  error,
  addedIconFunc,
  register,
  min,
  max,
  addedIcon,
  disabled,
  containerStyles,
  placeholder,
}) => {
  const [visibility, setVisibility] = useState<boolean>(false)
  const toggleVisibility = () => {
    setVisibility((prev) => !prev)
  }
  const numberKeyPress = (e: any) => {
    if (
      type === 'number' &&
      (e.key === 'e' ||
        e.key === '-' ||
        e.key === (parseFloat(e.target.value) || 0) <= 0)
    ) {
      e.preventDefault()
    }
  }

  return (
    <div className={`${containerStyles} mt-5`}>
      <label className='font-semibold text-sm text-gray-600 pb-1 block'>
        {label}
      </label>
      <div className='relative'>
        <input
          type={type === 'password' ? (visibility ? 'text' : 'password') : type}
          {...register(name)}
          name={name}
          id={id}
          min={min ? min : 1}
          max={max}
          disabled={disabled}
          onKeyDown={numberKeyPress}
          placeholder={placeholder}
          className={`${styles} border border-white rounded-[4px] text-white bg-light-tertiary outline-none focus:border-primary duration-200 px-6 py-2 mt-1 text-base w-full`}
        />
        <p className='text-sm text-[red] mt-2'>{error}</p>
      </div>
    </div>
  )
}

export default InputField
