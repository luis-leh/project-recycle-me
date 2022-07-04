const express = require('express')
const path = require('path')

const wasteRoutes = require('./routes/waste')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1', wasteRoutes)

module.exports = server
