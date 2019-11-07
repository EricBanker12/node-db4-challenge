
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {name: 'Peanut Butter'},
    {name: 'Strawberry Jelly'},
    {name: 'Whole Wheat Bread'},
  ]);
};
