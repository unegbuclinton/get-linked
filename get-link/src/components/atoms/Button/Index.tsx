import React from 'react'
import { buttonProp } from './type'

const Button: React.FC<buttonProp> = ({
  children,
  onClick,
  disabled,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className='bg-custom-gradient rounded-[4px] text-base py-4 px-12'
    >
      {children}
    </button>
  )
}

export default Button
