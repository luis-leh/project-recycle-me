exports.seed = function (knex) {
  return knex('organics').insert([
    {
      organic_id: 111,
      organic_item: 'Fruit and vegetables',
      organic_item_image: '',
    },

    {
      organic_id: 112,
      organic_item: 'Meat, bones and fish',
      organic_item_image: '',
    },

    {
      organic_id: 113,
      organic_item: 'Bread and pastries',
      organic_item_image: '',
    },

    {
      organic_id: 114,
      organic_item: 'Dairy products',
      organic_item_image: '',
    },

    {
      organic_id: 115,
      organic_item: 'Coffe grinds and tea bags',
      organic_item_image: '',
    },

    {
      organic_id: 116,
      organic_item: 'Shells and shellfish',
      organic_item_image: '',
    },

    {
      organic_id: 117,
      organic_item: 'Cut flowers',
      organic_item_image: '',
    },

    {
      organic_id: 118,
      organic_item: 'Pruned branches',
      organice_item_image: '',
    },

    {
      organic_id: 119,
      organic_item: 'Leaves',
      organice_item_image: '',
    },

    {
      organic_id: 120,
      organic_item: 'Grass clippings',
      organice_item_image: '',
    },

    {
      organic_id: 121,
      organic_item: 'Newspaper (used for food wrapping)',
      organice_item_image: '',
    },

    {
      organic_id: 122,
      organic_item: 'Used pizza boxes',
      organice_item_image: '',
    },

    {
      organic_id: 123,
      organic_item: "Fish 'n' chip wrappers",
      organice_item_image: '',
    },

    {
      organic_id: 124,
      organic_item: 'Used kitchen paper towels',
      organice_item_image: '',
    },

    {
      organic_id: 125,
      organic_item: 'Small or shredded paper',
      organice_item_image: '',
    },
  ])
}
