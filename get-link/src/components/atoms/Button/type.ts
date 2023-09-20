import { ReactNode } from 'react'

export interface buttonProp {
  children: ReactNode
  onClick?: () => void
  type: 'submit' | 'button'
  disabled?: boolean
}
