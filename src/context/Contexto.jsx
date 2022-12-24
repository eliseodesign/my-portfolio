import { createContext, useState } from "react";
import en from "./en";
import es from "./es";

export const Contexto = createContext();

export const Data = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const dataLanguage = language === "es" ? en : es;

  return (
    <Contexto.Provider value={{ language, setLanguage, dataLanguage }}>
      {children}
    </Contexto.Provider>
  );
};
