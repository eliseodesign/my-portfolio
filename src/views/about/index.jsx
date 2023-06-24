import { useContext, useEffect } from "react";
import { Contexto } from "@/shared/utils/context/Contexto";
import Slider from "./components/Slider"
import "@/style/aboutme.css"

import { SvgCsharp, SvgMongo, SvgTailwind } from './components'

import { FaJsSquare, FaNode, FaReact, FaSass } from "react-icons/fa";
import { DiMsqlServer, DiSqllite, DiDotnet} from "react-icons/di";

function AboutMe() {
  const { dataLanguage } = useContext(Contexto);

  const { aboutMe } = dataLanguage

  return (
    <div className="about-me">
      <div className="info-im">
        <img src="/im.jfif" alt="" />
        
        {aboutMe.description}
      </div>
      
      <p className="about-title">{dataLanguage.aboutMe.myTec} 🤔</p>
      <h3>Web</h3>

      <Slider of="backend">
           <FaNode />
           <p>Express</p>
           <SvgMongo />
           <FaJsSquare/> 
           <FaReact /> 
           <SvgTailwind />
           <FaNode />
      </Slider>

      <h3>Desktop</h3>
      <Slider of="desktop">
           <DiDotnet />
           <SvgCsharp />
           <DiMsqlServer />
           <DiSqllite />
      </Slider>
    
    </div>
  )
}

export default AboutMe;







