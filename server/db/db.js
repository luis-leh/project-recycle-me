const environment = process.env.NODE_ENV || 'development'

const config = require('./knexfile')[environment]

const connection = require('knex')(config)

// DB FUNCTIONS GO HERE
// GET
function getAllRecyclables(db = connection) {
  return db('recyclables').select()
}

function getAllOrganics(db = connection) {
  return db('organics').select()
}

function getAllGeneral(db = connection) {
  return db('general').select()
}

// POST
// UPDATE
// DELETE

module.exports = {
  getAllRecyclables,
  getAllOrganics,
  getAllGeneral,
}
