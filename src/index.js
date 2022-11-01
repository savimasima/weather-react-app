import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
