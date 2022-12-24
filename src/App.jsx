import { Data } from "./context/Contexto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import "./App.css";
import Top from "./pages/components/Top";
import Bottom from "./pages/components/Bottom";
import Page from "./pages/components/Page";
// pages
import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Err404 from "./pages/Err404";

function App() {
  return (
    <Data>
      <BrowserRouter>
        <Top />
        <Page />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
      <Bottom />
    </Data>
  );
}

export default App;
