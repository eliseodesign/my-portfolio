import { ReactNode } from '@/shared/interface/ReadNode'
import './about.css'

function LayoutAbout({children}: ReactNode) {
  return (
    <main className='about-page'>
      { children }
    </main>
  )
}

export default LayoutAbout