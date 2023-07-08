import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Contexto } from '@/shared/utils/context/Contexto';
import '@/style/index.css';
function Index() {
  const { dataLanguage } = useContext(Contexto);
  const {home} = dataLanguage
  return (
    <div>
      <h3>{home.greating}</h3>

      <div className="select">
        <Link to={'/about-me'}>{home.buttons[0]}</Link>
        <Link to={'/projects'}>{home.buttons[1]}</Link>
        <Link to={'/contact'}>{home.buttons[2]}</Link>
        <Link to={'/blog'}>{home.buttons[3]}</Link>
    
      </div>
    </div>
  );
}

export default Index;
