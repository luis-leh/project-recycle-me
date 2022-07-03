exports.seed = (knex) => {
  return knex('')
    .del()
    .then(() => knex('').del())
    .then(() => knex('series').del())
}
