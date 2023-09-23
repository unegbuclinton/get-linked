import { ReactNode } from 'react'

interface modalProp {
  isShown: boolean
  header?: string
  hide: () => void
  children: ReactNode
}
const Modal: React.FC<modalProp> = ({ isShown, header, hide, children }) => {
  if (!isShown) return null
  return (
    <div
      onClick={hide}
      className='fixed top-0 left-0 right-0 bottom-0 min-h-[50%] bg-primary/90 px-10 rounded-[5px] flex items-center justify-center z-10'
    >
      <div className='flex justify-between items center border-b  border-gray-200 py-3 '></div>
      <div className='p-12 border border-tertiary lg:border-none'>
        {children}
      </div>
    </div>
  )
}

export default Modal
