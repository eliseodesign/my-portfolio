import { useContext } from "react";
import { Contexto } from "../context/Contexto";

function Projects() {
  const { dataLanguage } = useContext(Contexto);

  return <div>projects</div>;
}

export default Projects;
