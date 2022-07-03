exports.seed = function (knex) {
  return knex('general').insert([
    {
      id: 1,
      general_item: 'Takeaway drink cups',
      general_item_image: '',
    },

    {
      id: 2,
      general_item: 'Takeaway containers',
      general_item_image: '',
    },

    {
      id: 3,
      general_item: 'Containers over 3 litres',
      general_item_image: '',
    },

    {
      id: 4,
      general_item: 'All lids',
      general_item_image: '',
    },

    {
      id: 5,
      general_item: 'Fabrics, textile and clothing',
      general_item_image: '',
    },

    {
      id: 6,
      general_item: 'Soft plastics',
      general_item_image: '',
    },

    {
      id: 7,
      general_item: 'Liquid cartons',
      general_item_image: '',
    },

    {
      id: 8,
      general_item: 'Compostable and bio-degradable packaging',
      general_item_image: '',
    },

    {
      id: 9,
      general_item: 'Ash, timber and sawdust',
      general_item_image: '',
    },
  ])
}
