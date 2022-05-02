import React from "react";

export default function WeatherIcon(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.value}@2x.png`;
  return (
    <span>
      <img src={iconUrl} alt="" />
    </span>
  );
}
