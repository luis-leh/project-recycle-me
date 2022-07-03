/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = (knex) => {
  return knex.schema.createTable('recyclables', (table) => {
    table.increments('recyclable_id').primary()
    table.string('recyclable_item')
    table.string('recyclable_item_image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('recyclables')
}
