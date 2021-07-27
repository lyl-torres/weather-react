import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setunit] = useState("");
    function showFahr(event) {
        event.preventDefault();
        setunit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setunit("celsius");
    }

    function fahrenheit(){
        return (props.celsius *9) / 5 + 32;
    }
    if (unit === "celsius") {
    return(
        <div className="WeatherTemperature">
            <strong className="temperature">
                {props.celsius}
            </strong>
            <span className="unit">
                °C {" "}                   
                <a href="/" 
                onClick={showFahr}>
                |°F
                </a>
            </span>
        </div>
    );
    } else {
      return (
        <div className="WeatherTemperature">
            <strong className="temperature">
                {Math.round(fahrenheit())}
            </strong>
            <span className="unit">
                <a href="/" 
                onClick={showCelsius}>
                °C | 
                </a>{" "}                   
                °F
            </span>
        </div>
      );  
    }
}