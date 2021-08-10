import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setweatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity)
    function handleResponse(response) {
    setweatherData({
        ready: true,
        date: new Date(response.data.dt * 1000),
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        city: response.data.name,
    });
  }
  function search() {
    const apiKey = "ad95ba85cf6afff9b76905b9243ff9af";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
     axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
      event.preventDefault();
      search()
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready){
    return (
        <div className="Weather">
        <div className="weather-app-wrapper">
            <div className="weather-app">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                    <input
                    type="search"
                    placeholder="Enter  a city.."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
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
            <WeatherInfo data={weatherData} />
            <WeatherForecast />
                <hr />
                <div className="weather-forecast"></div>
                <hr />
                </div>
            </div>
            </div>
  );
} else {
    search();
     return "Loading temperature for {city}...";
}
}