import { useContext, useEffect } from "react";
import { Contexto } from "@/shared/utils/context/Contexto";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { defaultProperties } from './configToggle'
import { Link, useLocation } from "react-router-dom";
import "@/style/top.css";

const Top = () => {
  let location = useLocation().pathname;
  let active;
  if (location.length > 1) active = true; // si esta en una pagina diferente a / sera true

  //////////////////////////////////////////////
  const { dark, setDark, language, setLanguage } = useContext(Contexto);

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [dark]);

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("lang", localStorage.getItem("language"));
  }, [language]);

  function changeTheme() {
    if (dark) {
      localStorage.setItem("theme", "light");
      setDark(false);
    }
    if(!dark){
      localStorage.setItem("theme", "dark");
      setDark(true);
    } 
  }

  function changeLanguage() {
    if (language === "es") {
      setLanguage("en");
      localStorage.setItem("language", "en");
    } else if (language === "en") {
      setLanguage("es");
      localStorage.setItem("language", "es");
    }
  }

  return (
    <div className="top">
      <div className="svg-container" onClick={()=> changeTheme()}>
      <DarkModeSwitch
        checked={!dark}
        onChange={setDark}
        size={35}
        animationProperties	={defaultProperties}
        moonColor="#282c34"
        sunColor="#81C2FF"
      />
      
      </div>

      {active ? (
        <Link to={"/"} className="toHome">
          {" "}
          <BackIcon /> <b>Home</b>{location}
        </Link>
      ) : (
        null
      )}

      <div className="svg-container tooltip left" onClick={changeLanguage}>
        <p className="tiptext">{language==="es"?"English":"Español"}</p>
        <svg width={31} height={31} xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#a)">
            <path d="M28.935 6.223H16.112L14.114 0H2.065A2.07 2.07 0 0 0 .003 2.065v21.022a2.07 2.07 0 0 0 2.062 2.063h12.917L16.885 31h12.048c1.134 0 2.063-.913 2.063-2.03V8.253c0-1.118-.93-2.03-2.063-2.03h.002ZM8.707 17.435a4.846 4.846 0 0 1-4.844-4.844 4.846 4.846 0 0 1 4.844-4.844 4.69 4.69 0 0 1 3.245 1.261l-1.279 1.23a2.834 2.834 0 0 0-1.966-.755c-1.686 0-3.052 1.395-3.052 3.112s1.366 3.112 3.05 3.112c1.947 0 2.752-1.395 2.83-2.336l-2.827-.002V11.71h4.534c.065.297.116.59.116.987 0 2.773-1.852 4.74-4.652 4.74l.001-.002ZM30.352 28.97c0 .762-.636 1.384-1.417 1.384H17.47l4.713-5.205h.007l-.956-2.974.008-.006s.733-.63 1.65-1.602c.919.996 2.105 2.195 3.64 3.623l.995-.997c-1.643-1.49-2.847-2.674-3.733-3.623 1.187-1.404 2.392-3.171 2.647-4.788h2.627v.002h.003V13.57h-5.854v-1.963h-1.9v1.963H18.47l-2.16-6.73.008.03h12.616c.781 0 1.417.62 1.417 1.384v20.715Zm-8.376-9.444c-.692.708-1.218 1.128-1.218 1.128l-.01.005-1.886-5.875h6.154c-.397 1.4-1.276 2.723-2.133 3.751-1.519-1.798-1.524-2.381-1.524-2.381h-1.578s.064.875 2.195 3.37v.002Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#000" d="M0 0h31v31H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Top;

const BackIcon = () => {
  return (
    <svg
    className="back"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
 

  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
  </svg>
  );
};