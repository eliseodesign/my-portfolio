import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Contexto } from "../../context/Contexto";
function Page() {
  // PAGE ES EL COMPONENTE QUE AL IGUAL QUE LOS SVGs ESTARA EN TODAS LAS VISTAS
  let location = useLocation().pathname;
  if (location === "/") location = "Eliseo";

  const { dataLanguage } = useContext(Contexto);

  // location = location.slice(1, -1);
  console.log(location);
  return (
    <div>
      <h1>{dataLanguage[0].greating}</h1>
    </div>
  );
  // return <div>{location}</div>;
}

export default Page;
