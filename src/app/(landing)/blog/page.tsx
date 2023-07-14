import { getBlogs } from './service'
import Link from 'next/link'

function Blog() {
  const blogs = getBlogs()
  console.log(blogs)
  return (
    <div>
      {
        blogs.map( (blog, i) => (
          <div key={i}>
            <h2><Link href={blog.link}/> {blog.meta.title} </h2>
            <p>{blog.meta.description} </p>
          </div>
        ))
      }
    </div>
  )
}

export default Blog

