
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('recipe_ingredients').insert([
    {recipe_id: 1, ingredient_id: 1, amount: 2, amount_units: 'tbsp'},
    {recipe_id: 1, ingredient_id: 2, amount: 2, amount_units: 'tbsp'},
    {recipe_id: 1, ingredient_id: 3, amount: 2, amount_units: 'slices'},
  ]);
};
