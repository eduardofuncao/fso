import { useEffect, useState } from 'react'

import countriesService from './services/countriesService'

import Filter from './components/Filter'
import CountryList from './components/CountryList'
import Country from './components/Country'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountryName, setSelectedCountryName] = useState(null)

  useEffect(() => {
    countriesService.getAll()
      .then(countries => setCountries(countries))
  }, [])

  return (
    <>
      <h1>Countries Mural</h1>
      <Filter search={search} setSearch={setSearch} />
      <CountryList countries={countries} search={search} setSelectedCountryName={setSelectedCountryName} />
      <Country countries={countries} selectedCountryName={selectedCountryName} />
    </>

  )
}

export default App
