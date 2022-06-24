import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";
export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastInfo, setForecastInfo] = useState();
  let lon = props.coords.lon;
  let lat = props.coords.lat;
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function searchForecast(response) {
    setLoaded(true);
    setForecastInfo(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast row">
        <div className="row">
          {forecastInfo.map(function (daily, index) {
            if (index > 5) {
              return null;
            } else {
              return (
                <div className="col" key={index}>
                  <ForecastDay date={daily.dt} />
                  <div>
                    <WeatherIcon value={daily.weather[0].icon} />
                  </div>
                  <div>
                    <strong className="forecast_max">
                      {Math.round(daily.temp.max)}°
                    </strong>
                    <span className="forecast_min">
                      {Math.round(daily.temp.min)}°
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let unit = "metric";
    let apiKey = "68548d6af374817b9b8a629525c6ac52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(searchForecast);
    return null;
  }
}
