import contactService from "../services/contactService"

const Contact = ({ name, number, id, contacts, setContacts }) => {
  const handleContactRemoval = () => {
    if(window.confirm(`are you sure you want to delete ${name} from the list?`)) {
      contactService.remove(id)
      .then(returnedNote => {
        const filteredContacts = contacts.filter(contact => contact.id !== id)
        setContacts(filteredContacts)
    })
    }
  }

  return(
    <li>{name} | {number} <button onClick={handleContactRemoval}>remove</button></li>
  )
}
  
const Contacts = ({ contacts, setContacts, filterName }) => {
  const contactsToShow = () => {
    if (filterName === '') {
      return contacts
    }
    else {
      return contacts.filter(contact => contact.name.toUpperCase().includes(filterName.toUpperCase()))
    }
  }

  return(
    <ul>
        {contactsToShow().map((contact) => 
          <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} contacts={contacts} setContacts={setContacts}/>
        )}
    </ul>
  )
}

export default Contacts