import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Header from "./Header.jsx";

function App() {

    function selectCity(searchSuggName){
        console.log("Ausgewählte Stadt: ", searchSuggName);

    }

  return (
    <Router>
        <Header selectCity={selectCity} />
      <div>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
