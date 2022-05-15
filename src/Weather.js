import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnit from "./TemperatureUnit";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
export default function Weather() {
  const [city, setCity] = useState("New York");
  const [weatherInfo, setWeatherInfo] = useState({ loaded: false });
  function searchWeather(response) {
    setWeatherInfo({
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      loaded: true,
      coords: response.data.coord,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let unit = "metric";
    let apiKey = "68548d6af374817b9b8a629525c6ac52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(searchWeather);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (weatherInfo.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="input"
                placeholder="enter a city..."
                className="form-control"
                autoFocus={true}
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherInfo.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherInfo.date} />
          </li>
          <li className="text-capitalize"> {weatherInfo.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <WeatherIcon value={weatherInfo.icon} />
            <TemperatureUnit value={weatherInfo.temperature} />
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherInfo.humidity}%</li>
              <li>Wind: {weatherInfo.wind} km/h</li>
            </ul>
          </div>
        </div>
        <Forecast coords={weatherInfo.coords} />
      </div>
    );
  } else {
    let unit = "metric";
    let apiKey = "68548d6af374817b9b8a629525c6ac52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(searchWeather);
    return "Loading";
  }
}
