import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props){
return (
        <div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(props.fahrenheit)}
            </span>
            <span className="unit">               
                °F
            </span>
        </div>
      );  
    }
