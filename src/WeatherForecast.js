import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response) {
console.log(response.data);
    }

    let apiKey = "ad95ba85cf6afff9b76905b9243ff9af";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
               <div className="WeatherForecast-day">
                   Thu
               </div>
               <WeatherIcon code="01d" size={30} />
               <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    19°
                </span>
                <span className="WeatherForecast-temperature-min">
                     3°
                </span>
               </div>
            </div>
        </div>
    </div>
    );
}