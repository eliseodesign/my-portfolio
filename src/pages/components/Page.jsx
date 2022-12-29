import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Contexto } from "../../context/Contexto";

import "../../style/page.css";

function Page() {
  // PAGE ES EL COMPONENTE QUE AL IGUAL QUE LOS SVGs top y bottom ESTARA EN TODAS LAS VISTAS
  let location = useLocation().pathname;
  let active;
  if (location.length > 1) active = true; // si esta en una pagina diferente a / sera true

  const { dataLanguage } = useContext(Contexto);

  let iPage; // le asignamos un indice para buscar en dataLanguage
  switch (location) {
    case "/about-me":
      iPage = 0;
      break;
    case "/projects":
      iPage = 1;
      break;
    case "/contact":
      iPage = 2;
      break;
    case "/blog":
      iPage = 3;
      break;
  }

  return (
    <>
      {active ? (
        <Link to={"/"} className="toHome">
          {" "}
          <BackIcon /> Home{location}
        </Link>
      ) : (
        ""
      )}
      <div className={active ? "page page-active" : "page"}>
        <div className="page__photo">
          <div className="photo__circulo">
            <img src="../../public/foto.png" alt="" className="photo__img" />
          </div>
        </div>
        <div className="page__info">
          {active ? (
            <h1>{dataLanguage[0].buttons[iPage]}</h1>
          ) : (
            <>
              <h1>Eliseo Arévalo</h1>
              <h2>Frontend Developer</h2>

              <p>eliseo.arev@gmail.com</p>
              <p>7462 9868</p>
            </>
          )}
        </div>
      </div>
    </>
  );
  // return <div>{location}</div>;
}

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

export default Page;
