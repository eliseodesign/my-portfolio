'use client'
interface ReactNode {
  children: React.ReactNode
}

import { createContext, useState } from 'react';
import en from './en';
import es from './es';
import { empty } from './dataLanguage'

export const Contexto = createContext({
  language: '',
  setLanguage: (value: string) => { },
  dataLanguage: empty,
  dark: true,
  setDark: (value: boolean) => { }
});

export const Data = ({ children }: ReactNode) => {
  const [language, setlanguage] = useState(() => {
    const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    return storedLanguage === 'es' ? 'es' : 'en';
  });

  const [dark, setdark] = useState(() => {
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return storedTheme === 'dark' ? true : false;
  });


  const dataLanguage = language === 'en' ? en : es;

  const setLanguage = (value: string) => {
    setlanguage(value)
  }
  const setDark = (value: boolean) => {
    setdark(value)
  }

  return (
    <Contexto.Provider
      value={{ language, setLanguage, dataLanguage, dark, setDark }}
    >
      {children}
    </Contexto.Provider>
  );
};
