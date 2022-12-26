import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../context/Contexto";
import "../style/index.css";
function Index() {
  const { dataLanguage } = useContext(Contexto);
  return (
    <div>
      <h3>{dataLanguage[0].greating}</h3>

      <div className="select">
        <Link to={"/about-me"}>{dataLanguage[0].buttons[0]}</Link>
        <Link to={"/projects"}>{dataLanguage[0].buttons[1]}</Link>
        <Link to={"/contact"}>{dataLanguage[0].buttons[2]}</Link>
        <Link to={"/blog"}>{dataLanguage[0].buttons[3]}</Link>
        {/* {dataLanguage[0].buttons.map((btn, id) => (
          <Link key={id}>
            {btn} to={}
          </Link>
        ))} */}
      </div>
    </div>
  );
}

export default Index;
