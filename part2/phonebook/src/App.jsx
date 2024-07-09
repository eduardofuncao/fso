import { useState } from 'react'

import Filter from './components/Filter'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'

const App = () => {
  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas', number: '5182-2906', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Eduardo Função', number: '994409320', id: 5}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')  

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