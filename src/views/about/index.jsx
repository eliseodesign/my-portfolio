import { useContext, useEffect } from "react";
import { Contexto } from "@/shared/utils/context/Contexto";
import Slider from "./components/Slider"
import foto from "@/shared/assets/img/im.jfif"
import "@/style/aboutme.css"

function AboutMe() {
  const { dataLanguage } = useContext(Contexto);

  const { aboutMe } = dataLanguage

  return (
    <div>
      <div className="info-im">
        <img src={foto} alt="" />
        {aboutMe.description}
      </div>
      <Slider />
    
    </div>
  )
}

export default AboutMe;







