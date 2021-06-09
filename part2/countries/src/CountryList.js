import React, {useState} from 'react'
import {CountryInfo} from "./CountryInfo";
import {Country} from "./Country";

export const CountryList = (props) => {

    let {countries, filter} = props;

    const [shownCountry, setShownCountry] = useState('');

    const handleShowCountry = (country) => {
        console.log('showing country', country)
        setShownCountry(country);
    };

    let filteredCountries = countries.filter(country => country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    if (shownCountry!== '') {
        return (
            <CountryInfo country={shownCountry}/>
        )
    } else if (filteredCountries.length <= 10) {
        return (
            <div>
                {filteredCountries.map(country => <Country key={country.alpha3code} country={country} showCountry={handleShowCountry}/>)}
            </div>
        )
    } else {
        return(
            <p>too many matches, please specify another filter</p>
        )
    }
}