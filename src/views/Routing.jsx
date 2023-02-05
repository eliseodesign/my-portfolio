import { Routes, Route } from 'react-router-dom'
import Index from "./index"
import AboutMe from "./about"
import Projects from "./projects"
import Contact from "./contact"
import Blog from "./blog"
import NotFount from './NotFount'

const Routing = () => {
  return ( 
    <div>
      <Routes>
        <Route path={"/"} element={<Index />}/>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
   )
}
 
export default Routing;