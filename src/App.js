import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          This project was coded by H. Azad and is{" "}
          <a href="https://github.com/h4nie/react-weather-app">
            open-sourced on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
