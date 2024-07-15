import React, {useEffect, useState} from "react";
import axios from "axios";

function Home(){


    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{

        const city = "Berlin";
        const apiKey = "e8abe8733cbb04043b9c0df08f1a617d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`;
        async function fetchWeather(){
            try{

            const response = await axios.get(url);
            setWeatherData(response.data);
            setLoading(false);

            console.log("Wetterdaten: ", response.data);


            } catch(err){
                console.error(err);
                setLoading(false);
                setError(err);
            }
        }

        fetchWeather();


    }, []);

    if (loading) return <div>Loading...</div>;

    return (
         <div>
            <p>Wetterdaten:   </p>

        </div>

    );
}

export default Home;