import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
    <li className="description text-capitalize">
                       <em>{props.data.description}</em>
                       </li>
                    </ul>
                    </ul>
                </div>
                <div className="col-6">
                    <div className="clearfix">
                         <div className="float-left">
                             <WeatherIcon 
                                code={props.data.icon} 
                                size={50}
                            />
                         </div>
                    <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                </div>
                </div>
                </div>

    );
}
