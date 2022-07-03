/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex('users').insert([
    {
      user_id: 101,
      user_name: 'John Doe',
      user_address_id: 201,
      user_address: '201 Dev St., Marshland, Christchurch',
    },

    {
      user_id: 102,
      user_name: 'Jane Doe',
      user_address_id: 202,
      user_address: '202 Academy Ave., CBD, Christchurch',
    },

    {
      user_id: 103,
      user_name: 'Jack Doe',
      user_address_id: 203,
      user_address: '203 DA lane, Broomfield, Christchurch',
    },

    {
      user_id: 104,
      user_name: 'Jill Doe',
      user_address_id: 204,
      user_address: '204 Aotearoa circle, New Brighton, Christchurch',
    },
  ])
}
