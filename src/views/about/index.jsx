import { useContext, useEffect } from "react";
import { Contexto } from "@/shared/utils/context/Contexto";
import Slider from "./components/Slider"
import foto from "@/shared/assets/img/im.jfif"
import "@/style/aboutme.css"

function AboutMe() {
  const { dataLanguage } = useContext(Contexto);

  return (
    <div>
      <div className="info-im">
        <img src={foto} alt="" />
        {dataLanguage[1].description}
      </div>
      <Slider />
    
    </div>
  )
}

export default AboutMe;







