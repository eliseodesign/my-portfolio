import { ReactNode } from '@/shared/interface/ReadNode'
import './blog.css'

function LayoutBlog({ children }: ReactNode) {
  return (
    <main className='blog-page'>
      { children }
    </main>
  )
}

export default LayoutBlog