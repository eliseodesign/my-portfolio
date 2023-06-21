import { useEffect, Children} from 'react'
const Slider = ({children, of}) => {

  useEffect(() => {
    const count = Children.count(children);

    const keyframe = `@keyframes scrolling-${of} {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-1 * 25% * ${count})); }
    }`;
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = keyframe;
    document.head.appendChild(styleSheet);
    
    const slider = document.querySelector(`.slider-${of}`);
    slider.style.animation = `scrolling-${of} ${count*3}s linear infinite`;
    console.log(slider)
    for(let i=0; i<count; i++) {
      slider.appendChild(slider.children[i].cloneNode(true));
    }
  }, [])

  return ( 
    <div className="slider">
      <div className="marquee">
        <ul className={`marquee-content slider-${of}`}>
          {Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </div>
    </div>
   );
}
 
export default Slider;