import React from "react";
import ReactDOM from "react-dom";
import Pledge from "./Pledge.jsx";
import samplePledges from "./mockData.js";

function App() {
  return (
    <div className="App">
      <Pledge currency={"US$"} pledge={samplePledges[0]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById("root"));