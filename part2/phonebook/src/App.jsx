import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'



const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')  
  
  useEffect(() => {
    axios.get("http://localhost:3001/contacts")
    .then(response => {
      const contacts = response.data
      setContacts(contacts)
    })
  }, [])
  
  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange}/>
      
      <h3>Add a new Contact</h3>
      <ContactForm contacts={contacts} setContacts={setContacts} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      
      <h2>Numbers</h2>
      <Contacts contacts={contacts} filterName={filterName}/>
    </div>     
  )
}

export default App