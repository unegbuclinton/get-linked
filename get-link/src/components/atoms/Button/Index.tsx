import React from 'react'
import { buttonProp } from './type'

const Button: React.FC<buttonProp> = ({
  children,
  onClick,
  disabled,
  type,
  small,
  outline,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={` ${outline ? '' : 'bg-custom-gradient '}${
        small ? 'text-xs py-2.5 px-4' : 'text-base py-4 px-12'
      } rounded-[4px] text-white hover:bg-hover-gradient transition-all duration-700`}
    >
      {children}
    </button>
  )
}

export default Button
