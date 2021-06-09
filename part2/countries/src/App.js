import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {useEffect, useState} from "react";
import {CountryList} from "./CountryList";

function App() {

  const [countries, setCountries] = useState([]);
  const [countryFilter,setCountryFilter] = useState('');


  const countryHook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
                setCountries(response.data)
            }
        )
  };

  const handleChangeFilter =(event) => {
    setCountryFilter(event.target.value);
  };



  useEffect(countryHook,[]);

  return (
    <div className="App">
      <input onChange={handleChangeFilter}/>
      <CountryList
        countries = {countries}
        filter = {countryFilter}
      />
    </div>
  );
}

export default App;
