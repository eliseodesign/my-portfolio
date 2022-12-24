import { useContext } from "react";
import { Contexto } from "../context/Contexto";

function AboutMe() {
  const { dataLanguage } = useContext(Contexto);

  return <div>{dataLanguage[1].title}</div>;
}

export default AboutMe;
