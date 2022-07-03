const config = require('./knexfile')
const knex = require('knex')
const testDb = knex(config.test)

const {
  db,
  getAllRecyclables,
  getAllOrganics,
  getAllGeneral,
  // getAllWaste,
} = require('./db')

beforeAll(() => {
  return db.migrate.latest()
})

beforeEach(() => {
  return db.seed.run()
})

describe('getAllRecyclables', () => {
  test('This function should get all recyclables from the database', () => {
    return getAllRecyclables().then((result) => {
      console.log(result)
      expect(result).toHaveLength(10)
    })
  })
})

describe('getAllOrganics', () => {
  test('This function should get all organics from the database', () => {
    return getAllOrganics().then((result) => {
      console.log(result)
      expect(result).toHaveLength(15)
    })
  })
})

describe('getAllGeneral', () => {
  test('This function should get all general waste from the database', () => {
    return getAllGeneral().then((result) => {
      console.log(result)
      expect(result).toHaveLength(9)
    })
  })
})

// describe('getAllWaste', () => {
//   test('This function should get all kinds of waste from the database', () => {
//     return getAllWaste().then((result) => {
//       console.log(result)
//       expect(result).toHaveLength(34)
//     })
//   })
// })
