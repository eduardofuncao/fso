import { useEffect } from "react";

const CountryList = ({ countries, search, setSelectedCountryName }) => {
    const filteredCountries = countries.filter(country => country.name.common.toUpperCase().includes(search.toUpperCase())) 
    
    useEffect(() => {
        if (filteredCountries.length === 1) {
            setSelectedCountryName(filteredCountries[0].name.common);
        }
    }, [filteredCountries, setSelectedCountryName])
    
    if(filteredCountries.length > 10) return <div>too many countries to show</div>
    else {
        return(
            <>
                <ul>
                    {filteredCountries.map(country => 
                        <li key={country.name.common}>{country.name.common} <button onClick={() => setSelectedCountryName(country.name.common) }>show</button></li>
                    )}
                </ul>
            </>
        )
    }
    
}

export default CountryList