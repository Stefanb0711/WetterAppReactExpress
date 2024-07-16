import React from "react";

function WeatherCard(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.city}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
                <img src={props.icon} alt="Weather Icon"/>
                <p className="card-text">{props.description}</p>
                <p className="card-text">Temperature: {props.temperature} °C</p>
                <p className="card-text">Humidity: {props.humidity} %</p>

            </div>
        </div>
    );
}

export default WeatherCard;