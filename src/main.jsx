import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { Data } from "@/shared/utils/context/Contexto";
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Data>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Data>
  </React.StrictMode>
);
