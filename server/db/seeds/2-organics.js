exports.seed = function (knex) {
  return knex('organics').insert([
    {
      id: 1,
      organic_item: 'Fruit and vegetables',
      organic_item_image: '',
    },

    {
      id: 2,
      organic_item: 'Meat, bones and fish',
      organic_item_image: '',
    },

    {
      id: 3,
      organic_item: 'Bread and pastries',
      organic_item_image: '',
    },

    {
      id: 4,
      organic_item: 'Dairy products',
      organic_item_image: '',
    },

    {
      id: 5,
      organic_item: 'Coffe grinds and tea bags',
      organic_item_image: '',
    },

    {
      id: 6,
      organic_item: 'Shells and shellfish',
      organic_item_image: '',
    },

    {
      id: 7,
      organic_item: 'Cut flowers',
      organic_item_image: '',
    },

    {
      id: 8,
      organic_item: 'Pruned branches',
      organice_item_image: '',
    },

    {
      id: 9,
      organic_item: 'Leaves',
      organice_item_image: '',
    },

    {
      id: 10,
      organic_item: 'Grass clippings',
      organice_item_image: '',
    },

    {
      id: 11,
      organic_item: 'Newspaper (used for food wrapping)',
      organice_item_image: '',
    },

    {
      id: 12,
      organic_item: 'Used pizza boxes',
      organice_item_image: '',
    },

    {
      id: 13,
      organic_item: "Fish 'n' chip wrappers",
      organice_item_image: '',
    },

    {
      id: 14,
      organic_item: 'Used kitchen paper towels',
      organice_item_image: '',
    },

    {
      id: 15,
      organic_item: 'Small or shredded paper',
      organice_item_image: '',
    },
  ])
}
