const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllRecyclables()
    .then((recyclables) => {
      res.json(recyclables)
      console.log(recyclables)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server Error')
    })
})

router.get('/organics', (req, res) => {
  db.getAllOrganics()
    .then((organics) => {
      res.json(organics)
      console.log(organics)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server Error')
    })
})

router.get('/general', (req, res) => {
  db.getAllGeneral()
    .then((general) => {
      res.json(general)
      console.log(general)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server Error')
    })
})

module.exports = router
