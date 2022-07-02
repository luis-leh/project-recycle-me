const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

module.exports = server

// const rubbishRoutes = require('./routes/rubbish')

// server.use('/api/v1/rubbish', rubbishRoutes)
