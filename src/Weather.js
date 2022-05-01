import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="input"
              placeholder="enter a city..."
              className="form-control"
              autoFocus={true}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Saturday 19:08</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
          />
          <span>16°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 29%</li>
            <li>Wind: 4.63 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
