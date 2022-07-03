const environment = process.env.NODE_ENV || 'developoment'

const config = require('./knexfile')[environment]

const db = require('knex')(config)

// DB FUNCTIONS GO HERE

// GET
function getAllRecyclables() {
  return db('recyclables').select()
}

// POST
// UPDATE
// DELETE

module.exports = { db, getAllRecyclables }
