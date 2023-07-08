import { useContext } from 'react';
import {Contexto} from '@/shared/utils/context/Contexto'

function Blog() {
  const {dataLanguage} = useContext(Contexto)
  return <div>
    <div>
      <h3>
      {dataLanguage[3].description}
      <br />
      🤠 <a href="https://github.com/eliseodesign/blog">github.com/eliseodesign/blog</a>
      </h3>
    </div>
  </div>;
}

export default Blog;
