import React, {useEffect, useState} from "react";
import axios from "axios";

function WeatherForecastCards(props) {

    //const apiKey = "e8abe8733cbb04043b9c0df08f1a617d";

    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric&lang=de`;

    //const [forecastData, setForecastData] = useState([]);
    //const [coordinates, setCoordinates] = useState({lat: "", long: ""});

    /*useEffect(() => {
        async function fetchLatLong() {
        //Lant und long finden
        try {
            const response = await axios.get(url);
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setCoordinates({lat : lat, long : lon});
                //return { lat, lon };
            } else {
                throw new Error('City not found');
            }
        } catch (error) {
            console.error(error);
            return null;
        }


    }

    fetchLatLong();

    }, [props.city]);*/

    /*useEffect(() => {

        async function getForecastData(){

            const weatherForecastURL = `api.openweathermap.org/data/2.5/forecast/daily?lat=${props.coordinates["lat"]}&lon=${props.coordinates["long"]}&cnt=5&appid=${apiKey}`;


            try {
                const response = await axios.get(weatherForecastURL);
                if(response.data.length > 0) {
                    setForecastData(response.data);
                    console.log("Datum eines Elements in der Liste: ", forecastData["list"][0]["dt"]);

                }

            } catch(err){
                throw new Error("Fetching Weatherforecast not succeded");
                return null;
            }
        }

        getForecastData();


    }, [forecastData]);*/


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

export default WeatherForecastCards;