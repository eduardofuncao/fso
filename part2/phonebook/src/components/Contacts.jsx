const Contact = ({ name, number }) => {
    return(
        <li>{name} | {number}</li>
    )
  }
  
  const Contacts = ({ contacts, filterName }) => {
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
            <Contact key={contact.id} name={contact.name} number={contact.number} />
          )}
      </ul>
    )
  }

  export default Contacts