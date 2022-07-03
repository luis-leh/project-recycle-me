exports.seed = (knex) => {
  return knex('addresses')
    .del()
    .then(() => {
      return knex('addresses').insert([
        {
          address_id: 201,
          address: '201 Dev St., Marshland, Christchurch',
          address_user_id: 101,
        },

        {
          address_id: 202,
          address: '202 Academy Ave., CBD, Christchurch',
          address_user_id: 102,
        },

        {
          address_id: 203,
          address: '203 DA lane, Broomfield, Christchurch',
          address_user_id: 103,
        },

        {
          address_id: 204,
          address: '204 Aotearoa circle, New Brighton, Christchurch',
          address_user_id: 104,
        },
      ])
    })
}
