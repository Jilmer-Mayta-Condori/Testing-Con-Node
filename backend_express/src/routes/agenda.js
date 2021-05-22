
const router = require('express').Router()
const { persons } = require('../utils/mockup')
const express = require('express')

const { createNewContact } = require('../components/contact/controller')
const { showAllContacts } = require('../components/contact/controller')
const { DeleteUniqueContact } = require('../components/contact/controller')
const { GetContactById } = require('../components/contact/controller')

const bodyParser = require('body-parser')

const fecha = new Date()

router.get('/', (request, response, next) => {
  response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>' +
  '<br/><a href="/form"><button>agregar nuevos registros</button></a> <br/>' +
  '<br/><a href="/api/personas"><button>ver registros JSON</button></a>')
})

router.get('/info', (request, response) => {
  response.send('<h3> Phonebook has info for ' + persons.length + ' people</h3>' +
  '<h3>' + fecha + '</h3>')
})

router.get('/api/personas', showAllContacts)

router.get('/api/personas/:id', GetContactById)

router.delete('/api/personas/:id', DeleteUniqueContact)

router.get('/form', (request, response) => {
  response.send('<h1>Bienvenidos a mi formulario con NODEJS</h1>' +
   '<form method="POST" action="/api/personas">' +
   '  <label>Nombre</label><br/>' +
   '    <input type="text" name="name"> <br/><br/>' +
   '  <label>Telefono</label><br/>' +
   '    <input type="text" name="number"> <br/><br/>' +
   '  <button type="submit">Enviar</button>' +
   '</form>')
})

router.use(express.json())
// extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)


router.post('/api/personas', createNewContact)

module.exports = router
