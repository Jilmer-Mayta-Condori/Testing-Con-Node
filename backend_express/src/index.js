const express = require('express')
const app = express()
const apiAgenda = require('./routes/agenda')

const errorHandler = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

var cors = require("cors");

app.use(cors())

app.use(express.json())

app.use('/', apiAgenda)

// Middleware Final para rutas inexistentes
app.use(notFoundHandler)

// Middlewares
app.use(errorHandler)

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end(JSON.stringify(persons))
// })

const PORT = process.env.PORT || 9000

app.listen(PORT)
console.log(`Server running on port ${PORT}`)
