/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = (knex) => {
  return knex.schema.createTable('addresses', (table) => {
    table.increments('address_id').primary()
    table.string('address')
    table.integer('address_user_id').references('user_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('addresses')
}
