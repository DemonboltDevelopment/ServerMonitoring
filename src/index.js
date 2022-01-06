import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/preloader/preloader";
import Timer from "./components/countdown/timer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Server Monitoring
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
