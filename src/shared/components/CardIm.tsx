import React, { useContext } from 'react';
import {  usePathname } from 'next/navigation';
import { Contexto } from '@/shared/utils/context/Contexto';

import '@/style/page.css';

function CardIm() {
  // PAGE ES EL COMPONENTE QUE AL IGUAL QUE LOS SVGs top y bottom ESTARA EN TODAS LAS VISTAS
  let pathname = usePathname();
  let active;
  if (pathname !== '/') active = true; // si esta en una pagina diferente a / sera true

  const { dataLanguage } = useContext(Contexto);
  const { home } = dataLanguage

  let iPage = 0; // le asignamos un indice para buscar en dataLanguage
  switch (pathname) {
    case '/about-me':
      iPage = 0;
      break;
    case '/projects':
      iPage = 1;
      break;
    case '/contact':
      iPage = 2;
      break;
    case '/blog':
      iPage = 3;
      break;
  }

  return (
    <>
      <div className={active ? 'page page-active' : 'page'}>
        <div className="page__photo">
          <div className="photo__circulo">
            <img src="/foto.png" alt="" className="photo__img" />
          </div>
        </div>
        <div className="page__info">
          {active ? (
            <h1>{home.buttons[iPage]}</h1>
          ) : (
            <>
              <h1>Eliseo Arévalo</h1>
              <h2>{home.profile}</h2>

           
              <a href="mailto:eliseo.arev@gmail.com">eliseo.arev@gmail.com</a>
              <p>7462 9868</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CardIm;
