import { getBlogs } from './service'
import Link from 'next/link'

function Blog() {
  const blogs = getBlogs()
  console.log(blogs)
  return (
    <div className='blog-page'>
      <h3>Blogs rapidos sobre algunos temas interesantes</h3> <br />
      {
        blogs.map( (blog, i) => (
          <div key={i}>
            <h2> <Link href={`blog/${blog.link}`}>{blog.meta.title}</Link></h2>
            <p>{blog.meta.description} </p>
          </div>
        ))
      }
    </div>
  )
}

export default Blog

