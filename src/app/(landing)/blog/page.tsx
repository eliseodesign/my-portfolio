import { getBlogs } from './service'
import Link from 'next/link'

function Blog() {
  const blogs = getBlogs()
  console.log(blogs)
  return (
    <>
      <h3>Blogs rapidos sobre algunos temas interesantes</h3> <br />
      {
        blogs.map((blog, i) => (
          <div key={i} className='blog-link'>
            <Link href={`blog/${blog.link}`}>
              <h2> {blog.meta.title} </h2>
              <p>{blog.meta.description} </p>
            </Link>
          </div>
        ))
      }
    </>
  )
}

export default Blog

