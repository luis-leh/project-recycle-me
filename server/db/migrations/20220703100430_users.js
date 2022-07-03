/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary()
    table.string('user_name')
    table.integer('user_address_id').references('address_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
