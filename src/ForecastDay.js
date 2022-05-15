import React from "react";

export default function ForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.date * 1000);
  let day = days[date.getDay()];

  if (props.date) {
    return <div>{day}</div>;
  } else {
    return null;
  }
}
