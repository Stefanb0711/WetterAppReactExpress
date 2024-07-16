import React, {useState, useEffect} from "react";
import axios from "axios";

function Header(props){



    const [input, setInput] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [onClickedSearchSuggestionText, setOnClickedSearchSuggestionText] = useState("");

    const apiKey = "e8abe8733cbb04043b9c0df08f1a617d";


    useEffect(() => {
        async function fetchSuggestions(){

            const geocoding_url =  `http://api.openweathermap.org/geo/1.0/direct?q=${input},&limit=${5}&appid=${apiKey}`;

            try{
                if (input.length > 1){
                    const response = await axios.get(geocoding_url);

                const responseData = response.data;
                setSearchSuggestions(responseData);
                } else {
                    setSearchSuggestions([]);
                }


            }catch (err){
                console.log(err);
            }
        }

        fetchSuggestions();
    }, [input]);

    async function handleChange(event){

        const {value} = event.target;
        setInput(value);

        /*const geocoding_url =  `http://api.openweathermap.org/geo/1.0/direct?q=${input},&limit=${5}&appid=${apiKey}`;

        try {
            if (value.length > 2){
                const response = await axios.get(geocoding_url);

                const responseData = response.data;
                setSearchSuggestions(responseData);

            }




        } catch(err){
            console.error(err);
        }
    */


    }

    function selectCity(searchSuggName){

        //console.log("Ausgewählte Stadt: ", searchSuggName);
        props.selectCity(searchSuggName);
    }

    return (
        <header class="p-3 mb-3" style={{height: "150px"}}>
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 link-secondary"></a></li>

                    </ul>


                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <div style={{position: "relative", width: "100%"}}>
                            <form style={{position: "relative", width: "100%"}}
                                  class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                <input style={{width: "200px"}} value={input} onChange={handleChange} type="search"
                                       class="form-control" placeholder="Stadt suchen..." aria-label="Search"/>
                            </form>

                            {searchSuggestions.length > 0 && (
                                <ul className="list-group">
                                    {searchSuggestions.map((searchSuggestion) => (
                                        <li onClick={() => selectCity(searchSuggestion["name"])} className="list-group-item"> {searchSuggestion["name"]} </li>
                                    ))}
                                </ul>
                            )}

                        </div>


                    </div>


                </div>
            </div>
        </header>
    );
}

export default Header;