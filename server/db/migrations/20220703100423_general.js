exports.up = (knex) => {
  return knex.schema.createTable('general', (table) => {
    table.increments('general_id').primary()
    table.string('general_item')
    table.string('general_item_image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('general')
}
