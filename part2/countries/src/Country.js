/**
 * Created by Clement Caylux on 09/06/2021
 */

import React, {useState} from 'react'
import {CountryInfo} from "./CountryInfo";

export const Country = (props) => {

    let {country, showCountry} = props;

    const [show,setShow] = useState(false);

    const handleShowCountry = () =>{
        showCountry(country);
    };


    return (
        <div>
            {country.name} <button id={country.name} onClick={handleShowCountry}>show</button>
        </div>
    )
}