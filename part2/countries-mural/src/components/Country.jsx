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
            </>
        )
    }
}

export default Country