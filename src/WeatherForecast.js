import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
       setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
         <div className="WeatherForecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
                if (index < 4) {
                    return (
                     <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
               </div>
             );
            } else {
              return null;
            }
          })}
     </div>
    </div>
    );
} else {
    let apiKey = "ad95ba85cf6afff9b76905b9243ff9af";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse); 

    return null;
    }
}