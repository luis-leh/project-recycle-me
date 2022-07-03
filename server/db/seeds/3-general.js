exports.seed = (knex) => {
  return knex('general')
    .del()
    .then(() => {
      return knex('general').insert([
        {
          general_id: 131,
          general_item: 'Takeaway drink cups',
          general_item_image: '',
        },

        {
          general_id: 132,
          general_item: 'Takeaway containers',
          general_item_image: '',
        },

        {
          general_id: 133,
          general_item: 'Containers over 3 litres',
          general_item_image: '',
        },

        {
          general_id: 134,
          general_item: 'All lgeneral_ids',
          general_item_image: '',
        },

        {
          general_id: 135,
          general_item: 'Fabrics, textile and clothing',
          general_item_image: '',
        },

        {
          general_id: 136,
          general_item: 'Soft plastics',
          general_item_image: '',
        },

        {
          general_id: 137,
          general_item: 'Liqugeneral_id cartons',
          general_item_image: '',
        },

        {
          general_id: 138,
          general_item: 'Compostable and bio-degradable packaging',
          general_item_image: '',
        },

        {
          general_id: 139,
          general_item: 'Ash, timber and sawdust',
          general_item_image: '',
        },
      ])
    })
}
