import React from "react";
import Weather from "./Weather";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <Weather />
      </header>
      <div className="App-footer">
        <a href="https://github.com/lyl-torres/weather-react" target="_blank">
        Open-source code
        </a>
        , by Liliana Torres.
        </div>
    </div>
    </div>
  );
}

export default App;
