exports.seed = (knex) => {
  return knex('organics')
    .del()
    .then(() => {
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
          organic_item_image: '',
        },

        {
          organic_id: 119,
          organic_item: 'Leaves',
          organic_item_image: '',
        },

        {
          organic_id: 120,
          organic_item: 'Grass clippings',
          organic_item_image: '',
        },

        {
          organic_id: 121,
          organic_item: 'Newspaper (used for food wrapping)',
          organic_item_image: '',
        },

        {
          organic_id: 122,
          organic_item: 'Used pizza boxes',
          organic_item_image: '',
        },

        {
          organic_id: 123,
          organic_item: "Fish 'n' chip wrappers",
          organic_item_image: '',
        },

        {
          organic_id: 124,
          organic_item: 'Used kitchen paper towels',
          organic_item_image: '',
        },

        {
          organic_id: 125,
          organic_item: 'Small or shredded paper',
          organic_item_image: '',
        },
      ])
    })
}
