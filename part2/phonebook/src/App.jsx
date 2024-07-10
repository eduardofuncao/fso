import { useState, useEffect } from 'react'

import './index.css'

import contactService from './services/contactService'

import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import Notification from './components/Notification'


const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')  
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    contactService.getAll()
    .then(initialContacts => {
      setContacts(initialContacts)
    })
  }, [])
  
  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/> 

      <Filter filterName={filterName} handleFilterChange={handleFilterChange}/>
      
      <h3>Add a new Contact</h3>
      <ContactForm contacts={contacts} setContacts={setContacts} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setErrorMessage={setErrorMessage} />
      
      <h2>Numbers</h2>
      <Contacts contacts={contacts} setContacts={setContacts} filterName={filterName}/>
    </div>     
  )
}

export default App

