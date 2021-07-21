import React from "react";

export default function Weather(){
    return (
        <div className="App">
        <div className="weather-app-wrapper">
            <div className="weather-app">
            <form id="search-form" className="search-form">
                <div className="row">
                <div className="col-9">
                    <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control"
                    id="city-input"
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
                    <h1 id="city">Mexico City</h1>
                    <ul>
                    <li>
                        <span id="date"></span>
                    </li>
                    <li id="description"></li>
                    <ul>
                        <li>
                        Humidity:{" "}
                        <strong>
                            <span id="humidity"></span>%
                        </strong>
                        </li>
                        <li>
                        Wind:{" "}
                        <strong>
                            <span id="wind"></span> km/h{" "}
                        </strong>
                        </li>
                    </ul>
                    </ul>
                </div>
                <div className="col-6">
                    <div className="weather-temperature justify-content-end">
                    <img src="" alt="Clear" id="icon" className="float-right" />
                    <strong id="temperature"></strong>
                    <span className="units">
                        <a href="www.google.com" id="celsius-link" className="active">
                        °C{" "}
                        </a>
                        |
                        <a href="www.google.com" id="fahrenheit-link">
                        °F
                        </a>
                    </span>
                    </div>
                </div>
                <hr />
                <div className="weather-forecast" id="forecast"></div>
                <hr />
                </div>
            </div>
            </div>
        </div>
        </div>
  )}
