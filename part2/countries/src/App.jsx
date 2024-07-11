import { useState, useEffect } from 'react'
import countriesService from './services/countriesService'

import CountriesList from './components/CountriesList'

function App() {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')
  const [country, setCountry] = useState(``)

  useEffect(() => {
    countriesService.getAll().
    then(countries => {
      setCountries(countries.map(country => country.name.common))
    })
  },[])

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value)
  }




  return (
    <>
      <div>
        find countries <input value={searchName} onChange={handleSearchNameChange} />
      </div>

      <CountriesList countries={countries} searchName={searchName} setSearchName={setSearchName} country={country} setCountry={setCountry}  /> 
    </>
  )
}

export default App
