import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./Header.jsx";

function Home(){


    const [weatherData, setWeatherData] = useState({
        oneWordDescription : "",
        description : "",
        temp : "",
        humidity : "",
        icon : ""
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentCity, setCurrentCity] = useState("");

    useEffect(() =>{


        const apiKey = "e8abe8733cbb04043b9c0df08f1a617d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric&lang=de`;
        async function fetchWeather(){
            try{

            const response = await axios.get(url);
            //setWeatherData(response.data);
            setLoading(false);

            const oneWordDescription = response.data["weather"][0]["main"];
            const description = response.data["weather"][0]["description"];
            const temp = response.data["main"]["temp"];
            const humidity = response.data["main"]["humidity"];
            const icon = "https://openweathermap.org/img/wn/" + response.data["weather"][0]["icon"] + ".png";

            setWeatherData({
                oneWordDescription: oneWordDescription,
                description: description,
                temp: temp,
                humidity : humidity,
                icon: icon
            });





            } catch(err){
                console.error(err);
                setLoading(false);
                setError(err);
            }
        }

        fetchWeather();


    }, [currentCity]);

    useEffect(() => {
        console.log("OneWordDescription: ", weatherData["oneWordDescription"]);
         console.log("Description: ", weatherData["description"]);
         console.log("Temperature: ", weatherData["temp"]);
         console.log("Icon: ", weatherData["icon"]);

    }, [weatherData]);


    function selectCity(searchSuggName){
        console.log("Ausgewählte Stadt: ", searchSuggName);
        setCurrentCity(searchSuggName);

        //axios.get("");

    }


    if (loading) return <div>Loading...</div>;

    return (
         <div>
             <Header selectCity={selectCity} />

            <p>Wetterdaten:   </p>

        </div>

    );
}

export default Home;