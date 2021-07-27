import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
                    <div className="clearfix">
                         <div className="float-left">
                             <WeatherIcon 
                                code={props.data.icon} 
                            />
                         </div>
                    <strong className="temperature">{props.data.temperature}</strong>
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
                    <li className="description text-capitalize">
                       <em>{props.data.description}</em>
                       </li>
                </div>
                </div>
                </div>

    );
}
