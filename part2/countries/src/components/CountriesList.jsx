import { useState } from "react"
import countriesService from "../services/countriesService"

const Country = ({ name, country, setCountry }) => {
    
    countriesService.getCountryByName(name)
    .then(country => 
        setCountry(country)
    )
    return(
        <div>{country?
            <>
                <h2>{country.name.common}</h2>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h3>languages</h3>
                <ul>
                    {Object.entries(country.languages).map(([key, value]) => 
                        <li key={key}>{value}</li>
                    )}
                </ul>
                <img src={country.flags.png} alt={`${country.name.common} flag`} />
            </>
            : `loading info about ${name}`}</div>
    )
}

const CountriesList = ({ countries, searchName, setSearchName, country, setCountry }) => {

    if (countries.length !== 0) {
        const filteredCountries = countries.filter(country => country.toUpperCase().includes(searchName.toUpperCase()))
        if (filteredCountries.length > 10){
            return(
                <div>too many countries</div>
            )
        } else if (filteredCountries.length !== 1) {
            return(
                <ul>
                    {filteredCountries.map(country => 
                    <li key={country}>{country} <button>show</button></li>
                    )}
                </ul>
            )
        } else {
            return(
                <Country name={filteredCountries[0]} country={country} setCountry={setCountry} /> 
            )
        } 
    }

    return(<div>Loading...</div>)
}

export default CountriesList