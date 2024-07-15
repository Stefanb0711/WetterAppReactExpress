import React, {useState} from "react";
import axios from "axios";

function Header(){

    const [input, setInput] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    const apiKey = "e8abe8733cbb04043b9c0df08f1a617d";

    async function handleChange(event){

        const {value} = event.target;
        setInput(value);

        const geocoding_url =  `http://api.openweathermap.org/geo/1.0/direct?q=${input},&limit=${5}&appid=${apiKey}`;

        try {
            const response = await axios.get(geocoding_url);

            const responseData = response.data;
            setSearchSuggestions(responseData);

            searchSuggestions.map((searchSuggestion) =>{
                return console.log(searchSuggestion["name"]);
            })

        } catch(err){
            console.error(err);
        }



    }

    return (
        <header class="p-3 mb-3 border-bottom">
            <div class="container">
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                  <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li><a href="#" class="nav-link px-2 link-secondary">Start</a></li>

                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                  <input value={input} onChange={handleChange} type="search" class="form-control" placeholder="Stadt suchen..." aria-label="Search"/>
                </form>

                  {searchSuggestions.length > 0 && (
                      <ul className="list-group">
                          {searchSuggestions.map((searchSuggestion) => (
                              <li className="list-group-item"> {searchSuggestion["name"]} </li>
                          ))}
                      </ul>
                  )}


              </div>
            </div>
        </header>
    );
}

export default Header;