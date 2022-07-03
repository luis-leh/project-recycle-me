/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = (knex) => {
  return knex.schema.createTable('organics', (table) => {
    table.increments('organic_id').primary()
    table.string('organic_item')
    table.string('organic_item_image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('organics')
}
