exports.seed = (knex) => {
  return knex('addresses')
    .del()
    .then(() => {
      return knex('addresses').insert([
        {
          address_id: 201,
          address_street: 'Dev St.',
          address_suburb: 'Marshland',
          address_city: 'Christchurch',
        },

        {
          address_id: 202,
          address_street: 'Academy Ave.',
          address_suburb: 'CBD',
          address_city: 'Christchurch',
        },

        {
          address_id: 203,
          address_street: 'DA lane',
          address_suburb: 'Broomfield',
          address_city: 'Christchurch',
        },

        {
          address_id: 204,
          address_street: 'Aotearoa circle',
          address_suburb: 'New Brighton',
          address_city: 'Christchurch',
        },

        {
          address_id: 205,
          address_street: 'JV Avenue',
          address_suburb: 'Redwood',
          address_city: 'Christchurch',
        },

        {
          address_id: 206,
          address_street: 'Rohan Street',
          address_suburb: 'Belfast',
          address_city: 'Christchurch',
        },
      ])
    })
}
