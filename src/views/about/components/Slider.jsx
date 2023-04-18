import { useContext, useEffect } from "react";
import { Contexto } from "@/shared/utils/context/Contexto";
import Mongo from "./SvgMongo"
import Tailwind from "./SvgTailwind"
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNode, FaReact, FaSass } from "react-icons/fa";

const Slider = () => {

  const { dataLanguage } = useContext(Contexto);

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");
  
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);
  
    for(let i=0; i<marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, [])

  return ( 
    <div className="slider">
      <h3>{dataLanguage.aboutMe.myTec}</h3>
      <div className="marquee">
        <ul className="marquee-content">
          <li> <FaHtml5 /> </li>
          <li> <FaCss3Alt /> </li>
          <li> <FaSass /></li>
          <li> <FaJsSquare/> </li>
          <li> <FaReact /> </li>
          <li> <Tailwind /></li>
          <li> <FaNode /></li>
          <li style={{fontSize:"1.1em"}}> Express</li>
          <li> <Mongo /> </li>
        </ul>
      </div>
    </div>
   );
}
 
export default Slider;