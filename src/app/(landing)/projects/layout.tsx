import { ReactNode } from '@/shared/interface/ReadNode'
function LayoutProjects({ children }: ReactNode) {
  return (
    <main className='projects-page'>
      { children }
    </main>
  )
}

export default LayoutProjects