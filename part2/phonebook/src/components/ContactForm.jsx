import axios from "axios"
import contactService from "../services/contactService"

const ContactForm = ({contacts, setContacts, newName, newNumber, setNewName, setNewNumber, setErrorMessage }) => {
    const contactFound = contacts.find(person => person.name === newName)

    const addContact = (event) => {
      event.preventDefault()
      if (!contactFound){
        const contactObject = {
          name: newName,
          number: newNumber,
        }
        contactService.create(contactObject)
        .then(returnedContact => {
          setContacts(contacts.concat(returnedContact))
          setNewName('')
          setNewNumber('')

          setErrorMessage(`Contact for ${returnedContact.name} created`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      } else {
        if (window.confirm(`${newName} is already added to phonebook. Do you wish to change the phone number to ${newNumber}?`)) {
          const updatedContact = { ...contactFound, number:newNumber}
          contactService.update(contactFound.id, updatedContact)
          .then(returnedContact => {
            setContacts(contacts.map(contact => contact.id !== returnedContact.id ? contact : returnedContact))
          }).catch(error => {
            console.log("caught error")
            setErrorMessage(`Contact for ${newName} has been deleted from the server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
        }
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


  const beta = "continuar indo ao cinema"
