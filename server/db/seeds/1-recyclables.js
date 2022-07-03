exports.seed = function (knex) {
  return knex('recyclables').insert([
    {
      recyclable_id: 101,
      recyclable_item: 'Soft drink bottles',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 102,
      recyclable_item: 'Milk bottles',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 103,
      recyclable_item: 'Ice cream containers',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 104,
      recyclable_item: 'Family-sized yoghurt containers',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 105,
      recyclable_item: 'Metal tins (not squashed)',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 106,
      recyclable_item: 'Aerosol cans (not squashed)',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 107,
      recyclable_item: 'Glass bottles',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 108,
      recyclable_item: 'Glass jars',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 109,
      recyclable_item: 'Paper',
      recyclable_item_image: '',
    },

    {
      recyclable_id: 110,
      recyclable_item: 'Flattened cardboard boxes',
      recyclable_item_image: '',
    },
  ])
}
