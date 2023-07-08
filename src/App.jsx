import Top from '@/shared/components/Top';
import CardIm from '@/shared/components/CardIm'
import Routing from './views/Routing';

function App() {

  return (
    <>
        <Top />
        <section className="container-main">
          <CardIm />
          <Routing />
        </section>
    </>
  );
}

export default App;
