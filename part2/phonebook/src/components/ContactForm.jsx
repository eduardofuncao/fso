import axios from "axios"
import contactService from "../services/contactService"

const ContactForm = ({contacts, setContacts, newName, newNumber, setNewName, setNewNumber }) => {
    const hasTargetName = (array, name) => {
      return array.some(person => person.name === name)
    }
    
    const addContact = (event) => {
      event.preventDefault()
      if (!hasTargetName(contacts, newName)){
        const contactObject = {
          name: newName,
          number: newNumber,
        }
        contactService.create(contactObject)
        .then(returnedNote => {
          setContacts(contacts.concat(returnedNote))
          setNewName('')
          setNewNumber('')
        })
      } else {
        alert(`${newName} is already added to phonebook`)
      }
      
    }
  
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
  
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
    
    return(
      <form onSubmit={addContact}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
      </form>
    )
  }

  export default ContactForm