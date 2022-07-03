exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          user_id: 101,
          user_name: 'John Doe',
          user_address_id: [201, 205],
        },

        {
          user_id: 102,
          user_name: 'Jane Doe',
          user_address_id: [202, 205],
        },

        {
          user_id: 103,
          user_name: 'Jack Doe',
          user_address_id: [203, 206],
        },

        {
          user_id: 104,
          user_name: 'Jill Doe',
          user_address_id: [204, 206],
        },
      ])
    })
}
