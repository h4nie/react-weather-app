import React, { useState } from "react";
import "./TemperatureUnit.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("metric");
  let fahrenheit = (props.value * 9) / 5 + 32;
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <span>
        {Math.round(props.value)}°C |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>{" "}
      </span>
    );
  } else {
    return (
      <span>
        {Math.round(fahrenheit)}
        <a href="/" onClick={showCelsius}>
          °C
        </a>{" "}
        | °F
      </span>
    );
  }
}
