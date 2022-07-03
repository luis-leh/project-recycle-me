const environment = process.env.NODE_ENV || 'developoment'

const config = require('./knexfile')[environment]

const db = require('knex')(config)

// DB FUNCTIONS GO HERE

// GET
function getAllRecyclables() {
  return db('recyclables').select()
}

function getAllOrganics() {
  return db('organics').select()
}

function getAllGeneral() {
  return db('general').select()
}

// -----STILL NOT WORKING-----
// -----SCRAPPED IDEA / NOT IDEAL-----
// function getAllWaste() {
//   return db('recyclables', 'organics', 'general')
//     .join(
//       'recyclables.recyclable_id',
//       'organics.organic_id',
//       'general.general_id'
//     )
//     .select()
// }

// POST
// UPDATE
// DELETE

module.exports = {
  db,
  getAllRecyclables,
  getAllOrganics,
  getAllGeneral,
  // getAllWaste,
}
