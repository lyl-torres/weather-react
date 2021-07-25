import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Weather />
      </header>
      <small>
      <div className="App-footer">
        <a href="https://github.com/lyl-torres/weather-react" target="_blank">
        Open-source code
        </a>
        , by Liliana Torres.
        </div>
   </small>
    </div>
  );
}

export default App;
