exports.seed = function (knex) {
  return knex('recyclables').insert([
    {
      id: 1,
      recyclable_item: 'Soft drink bottles',
      recyclable_item_image: '',
    },

    {
      id: 2,
      recyclable_item: 'Milk bottles',
      recyclable_item_image: '',
    },

    {
      id: 3,
      recyclable_item: 'Ice cream containers',
      recyclable_item_image: '',
    },

    {
      id: 4,
      recyclable_item: 'Family-sized yoghurt containers',
      recyclable_item_image: '',
    },

    {
      id: 5,
      recyclable_item: 'Metal tins (not squashed)',
      recyclable_item_image: '',
    },

    {
      id: 6,
      recyclable_item: 'Aerosol cans (not squashed)',
      recyclable_item_image: '',
    },

    {
      id: 7,
      recyclable_item: 'Glass bottles',
      recyclable_item_image: '',
    },

    {
      id: 8,
      recyclable_item: 'Glass jars',
      recyclable_item_image: '',
    },

    {
      id: 9,
      recyclable_item: 'Paper',
      recyclable_item_image: '',
    },

    {
      id: 10,
      recyclable_item: 'Flattened cardboard boxes',
      recyclable_item_image: '',
    },
  ])
}
