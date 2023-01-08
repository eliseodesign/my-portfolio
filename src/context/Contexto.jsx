import { createContext, useState } from "react";
import en from "./en";
import es from "./es";

export const Contexto = createContext();

export const Data = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") === "es" ? "es" : "en"
  );
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const dataLanguage = language === "en" ? en : es;

  return (
    <Contexto.Provider
      value={{ language, setLanguage, dataLanguage, dark, setDark }}
    >
      {children}
    </Contexto.Provider>
  );
};
