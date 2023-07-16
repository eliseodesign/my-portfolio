import { ReactNode } from '@/shared/interface/ReadNode'
import './contact.css'

function LayoutContact({ children }: ReactNode) {
  return (
    <div className='contact-page'>
      { children }
    </div>
  )
}

export default LayoutContact