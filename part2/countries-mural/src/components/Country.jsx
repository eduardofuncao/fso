import { useEffect, useState } from "react"
import weatherService from "../services/weatherService"

const Weather = ({ selectedCountry }) => {
    const [weatherInfo, setWeatherInfo] = useState('')
    useEffect(() => {
        weatherService.getWeatherInfo(selectedCountry.latlng[0], selectedCountry.latlng[1]).then(weatherInfo => setWeatherInfo(weatherInfo))
    }, [selectedCountry])
    return(
        <>
            {weatherInfo?
            <div>
                <h3>Wheater in {selectedCountry.capital}</h3>
                <p>temperature {Math.round((weatherInfo.main.temp-272.15)*100)/100}</p>
                <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="" />
                <p>wind {weatherInfo.wind.speed} </p>
            </div>
            : <div>fetching weather info</div>}
        </>
    )
}

const Country = ({ countries, selectedCountryName }) => {
    const selectedCountry = countries.find(country => country.name.common === selectedCountryName)
    if (selectedCountryName){
        return(
            <>
                <h2>{selectedCountry.name.common}</h2>
                <p>capital {selectedCountry.capital}</p>
                <p>area {selectedCountry.area}</p>
                <h3>languages</h3>
                <ul>
                    {Object.entries(selectedCountry.languages).map(([key, value]) => 
                        <li key={key}>{value}</li>
                    )}
                </ul>
                <img src={selectedCountry.flags.png} alt={`${selectedCountry.name.common} flag`} />
                <Weather selectedCountry={selectedCountry}/> 
            </>
        )
    }
}

export default Country