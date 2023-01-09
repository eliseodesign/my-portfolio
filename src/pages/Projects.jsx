import { useContext } from "react";
import { Contexto } from "../context/Contexto";
import { projects } from "../context/projects";
import { FaGithub } from "react-icons/fa";
import { BiWindowOpen } from "react-icons/bi";

import "../style/projects.css";

function Projects() {
  const { dataLanguage } = useContext(Contexto);

  return (
    <div>
      {projects.map((p, i) => {
        return (
          // <div key={i} className="project">
          //   <div className="project-desc">
          //     <h2>{p.name}</h2>
          //     <a href={p.github} target="_blank">
          //       Github <FaGithub color="#fff" />{" "}
          //     </a>
          //     <p>{p.description}</p>
          //     <a href={p.demo} className="ver" target="_blank">
          //       {dataLanguage[2].button2} <BiWindowOpen />
          //     </a>
          //   </div>

          //   <div className="project-img">
          //     <img
          //       src={p.img}
          //       alt={p.img.slice(0,-3)}
          //     />
          //   </div>
          // </div>
            <article data-aos="zoom-in" class="card">
              <div className="card-img">
                <img
                  src={"https://eliseodesign.github.io/assets/images/"+p.reference+".png"}
                  alt={p.reference}
                />
              </div>
              <div className="project">
                <h2 className="title">{p.name}</h2>
                <p className="text">{p.description}</p>

                <div className="project-tags">
                  <span className="tag">{p.tecnologies[0]}</span>
                  <span className="tag">{p.tecnologies[1]}</span>
                  <span className="tag">{p.tecnologies[2]}</span>
                </div>

                <div className="btns">
                  <a
                    target="_blank"
                    href={p.demo}
                    className="button button--primary"
                  >
                    Demo
                  </a>
                  <a
                    target="_blank"
                    href={p.github}
                    className="button button--ghost"
                  >
                    Github
                  </a>
                </div>
              </div>
            </article>
        );
      })}
    </div>
  );
}

export default Projects;
