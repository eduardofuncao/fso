const express = require('express')
const app = express()

app.use(express.json())

let contacts = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/contacts', (request, response) => {
  response.json(contacts)
})

app.get('/api/contacts/:id', (request, response) => {
    const id = request.params.id
    const contact = contacts.find(contact => contact.id === id)
    if (contact) {
        response.json(contact)
    } else {
        response.status(404).end()
    }
})

app.post('/api/contacts', (request, response) => {
    const maxId = contacts.length > 0
    ? Math.max(...contacts.map(c => Number(c.id)))
    : 0
    _ 
    const contact = request.body
    contact.id = String(maxId + 1)

    contacts = contacts.concat(contact)
    response.json(contact)

})

app.delete('/api/contacts/:id', (request, response) => {
    const id = request.params.id
    contacts = contacts.filter(contact => contact.id !== id)

    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})