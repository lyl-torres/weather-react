import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
<div className="overview">
                <div className="row">
                <div className="col-6">
                    <h1>{props.data.city}</h1>
                    <ul>
                    <li>
                        <span className="date"><FormattedDate date={props.data.date} /></span>
                    </li>
                    <ul>
                        <li>
                        Humidity:{" "}
                        <strong>
                            <span className="humidity">{props.data.humidity}</span>%
                        </strong>
                        </li>
                        <li>
                        Wind:{" "}
                        <strong>
                            <span className="wind">{props.data.wind}</span> km/h{" "}
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
                    <div className="text-capitalize">{props.data.description}</div>
                    <strong iclassName="temperature">{props.data.temperature}</strong>
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
                </div>

  </div>
    );
}