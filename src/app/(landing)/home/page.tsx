'use client'
import { useContext } from 'react';
import Link from 'next/link'
import { Contexto } from '@/shared/utils/context/Contexto';
import '@/style/index.css';
function Index() {
  const { dataLanguage } = useContext(Contexto);
  const {home} = dataLanguage
  return (
    <div>
      <h3>{home.greating}</h3>

      <div className="select">
        <Link href='/about-me'>{home.buttons[0]}</Link>
        <Link href='/projects'>{home.buttons[1]}</Link>
        <Link href='/contact'>{home.buttons[2]}</Link>
        <Link href='/blog'>{home.buttons[3]}</Link>
    
      </div>
    </div>
  );
}

export default Index;
