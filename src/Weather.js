import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props){
    console.log(props) 
    const [weatherData, setweatherData] = useState({ready: false});
    function handleResponse(response) {
    setweatherData({
        ready: true,
        date: new Date(response.data.dt * 1000),
        temperature: (Math.round(response.data.main.temp)),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.main.wind,
        city: response.data.name,
    });
  }

  if (weatherData.ready){
    return (
        <div className="Weather">
        <div className="weather-app-wrapper">
            <div className="weather-app">
            <form className="search-form">
                <div className="row">
                <div className="col-9">
                    <input
                    type="search"
                    placeholder="Enter  a city.."
                    className="form-control"
                    autoFocus="on"
                    autoComplete="off"
                    />
                </div>
                <div className="col-3">
                    <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary w-100"
                    />
                </div>
                </div>
            </form>
            <hr />
            <div className="overview">
                <div className="row">
                <div className="col-6">
                    <h1>{weatherData.city}</h1>
                    <ul>
                    <li>
                        <span className="date"><FormattedDate date={weatherData.date} /></span>
                    </li>
                    <ul>
                        <li>
                        Humidity:{" "}
                        <strong>
                            <span className="humidity">{weatherData.humidity}</span>%
                        </strong>
                        </li>
                        <li>
                        Wind:{" "}
                        <strong>
                            <span className="wind">{weatherData.wind}</span> km/h{" "}
                        </strong>
                        </li>
                        <li>
                        Precipitation:{" "}
                        <strong>
                            <span className="precipitation"></span> %{" "}
                        </strong>
                        </li>
                    </ul>
                    </ul>
                </div>
                <div className="col-6">
                    <div className="weather-temperature justify-content-end">
                    <img src="" alt="Clear"className="float-right" />
                    <div className="text-capitalize">{weatherData.description}</div>
                    <strong iclassName="temperature">{weatherData.temperature}</strong>
                    <span className="units">
                        <a href="www.google.com" className="celsius-link">
                        °C{" "}
                        </a>
                        |
                        <a href="www.google.com" className="fahrenheit-link">
                        °F
                        </a>
                    </span>
                    </div>
                </div>
                <hr />
                <div className="weather-forecast"></div>
                <hr />
                </div>
            </div>
            </div>
        </div>
        </div>
  );
} else {
 const apiKey = "ad95ba85cf6afff9b76905b9243ff9af";
 let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
     axios.get(apiUrl).then(handleResponse);
     return <h4> Loading temperature for {props.defaultCity}...</h4>;
}
}