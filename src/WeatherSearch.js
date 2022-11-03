import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handSubmit(event) {
    event.preventDefault();
    let apiKey = "48435e74e411805d55ae4636686d6b40";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <div>
      <form onSubmit={handSubmit}>
        <input
          type="Search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <button type="Submit">Search</button>
      </form>
    </div>
  );

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
        <a href="https://github.com/savimasima/weather-react-app">GitHub</a>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <a href="https://github.com/savimasima/weather-react-app">GitHub</a>
      </div>
    );
  }
}
