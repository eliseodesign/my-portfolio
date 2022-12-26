import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Contexto } from "../../context/Contexto";

import "../../style/page.css";

function Page() {
  // PAGE ES EL COMPONENTE QUE AL IGUAL QUE LOS SVGs ESTARA EN TODAS LAS VISTAS
  let location = useLocation().pathname;
  if (location === "/") location = "Eliseo";

  const { dataLanguage } = useContext(Contexto);

  // location = location.slice(1, -1);
  console.log(location);
  return (
    <div className="page">
      <div className="page__photo">
        <div className="circulo">
          <img src="../../public/foto.png" alt="" className="photo__img" />
        </div>
      </div>
      <div className="page__info">
        <h1>Eliseo Arévalo</h1>
        <h2>Frontend Developer</h2>
        <p>eliseo.arev@gmail.com</p>
        {/* <p>7462 9868</p> */}
      </div>
    </div>
  );
  // return <div>{location}</div>;
}

export default Page;
