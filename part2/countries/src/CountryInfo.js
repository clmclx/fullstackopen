/**
 * Created by Clement Caylux on 08/06/2021
 */

import React, {useEffect, useState} from 'react'
import axios from "axios";

export const CountryInfo = (props) => {

    let {country} = props;
    const [weatherData,setWeatherData] = useState({
        main: {
            temp: '0'
        },
        weather: [{
            icon: ''
        }],
        wind: {speed: 0}
    });

    const convertTempFromKelvinToCelsius = (temp) => {
        return temp - 273.15;
    };

    useEffect(()=>{
        console.log('api key ', process.env.REACT_APP_OPEN_WEATHER_STACK_API_KEY);
        // axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_API_KEY}&query=${capital}`, {})
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_OPEN_WEATHER_STACK_API_KEY}`)
            .then(response=>{
                console.log(response.data)
                setWeatherData(response.data);
            })
    },[]);

    console.log(weatherData)

    return (
        <div>
            <h3>{country.name}</h3>
            <p>{`capital: ${country.capital}`}</p>
            <p>{`population: ${country.population}`}</p>
            <h4>languages</h4>
            <ul>
                {country.languages.map(language=><li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} width="300" height="200"/>
            <h4>{`weather in ${country.capital}`}</h4>
            <p>{`temperature: ${convertTempFromKelvinToCelsius(weatherData.main.temp)} celsius`}</p>
            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} width={100} height={100}/>
            <p>{`wind: ${weatherData.wind.speed}`}</p>
        </div>
    )
}