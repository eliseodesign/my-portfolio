'use client'
import { useContext } from 'react';
import Link from 'next/link'
import { Contexto } from '@/shared/utils/context/Contexto';
import { routesContstants } from '@/shared/constants'

function Home() {
  const { dataLanguage, language } = useContext(Contexto);
  const index = language === 'en' ? 1 : 2 // index for array buttons
  const {home} = dataLanguage
  return (
    <>
      <h3 className='home-greating'>{home.greating}</h3>

      <div className="home-links">
        {
          // buttons 
          Object.entries(routesContstants).map(([_, value], i) => {
            const route = value[0];
            if(route[0] === '/home') return
            return (
  
              <Link key={i} href={route[0]} aria-label={`Go to ${route[index]} page`}>
                  {route[index]}
              </Link>
  
            );
          })
        }
      </div>
    </>
  );
}

export default Home;
