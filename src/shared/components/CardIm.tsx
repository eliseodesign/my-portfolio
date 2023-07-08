import React, { useContext } from 'react';
import {  usePathname } from 'next/navigation';
import { Contexto } from '@/shared/utils/context/Contexto';
import { routesContstants } from '@/shared/constants'

import '@/style/page.css';

function CardIm() {
  // PAGE ES EL COMPONENTE QUE AL IGUAL QUE LOS SVGs top y bottom ESTARA EN TODAS LAS VISTAS
  let pathname = usePathname();
  console.log(pathname)
  let active;
  if (pathname !== '/home') active = true; // si esta en una pagina diferente a / sera true

  const { dataLanguage, language } = useContext(Contexto);
  const index = language === 'en' ? 1 : 2
  const { home } = dataLanguage

  let viewNanme: string = ''
  {
    // buttons 
    Object.entries(routesContstants).map(([_, value], i) => {
      const route = value[0];
      if(route[0] === pathname) {
        viewNanme = route[index]
      }

    })
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
            <h1>{ viewNanme }</h1>
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
