/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = (knex) => {
  return knex.schema.createTable('addresses', (table) => {
    table.increments('address_id').primary()
    table.string('address_street')
    table.string('address_suburb')
    table.string('address_city')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('addresses')
}
