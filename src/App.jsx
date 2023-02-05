import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Top from "./pages/components/Top";
import CardIm from "@/shared/components/CardIm"
import Routing from "./views/Routing";

function App() {

  return (
    <>
        <Top />
        <section className="container-main">
          <CardIm />
          <Routing />
        </section>
        <div className="vacio"></div>
    
      {/* <Bottom /> */}
      {/* </section> */}
    </>
  );
}

export default App;
