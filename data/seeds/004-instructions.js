
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('instructions').insert([
    {recipe_id: 1, step_number: 1, instruction: 'Take the first slice of bread and coat one side with 2 tbsp of strawberry jelly.'},
    {recipe_id: 1, step_number: 2, instruction: 'Take the second slice of bread and coat one side with 2 tbsp of peanut butter.'},
    {recipe_id: 1, step_number: 3, instruction: 'Sandwich the two, coated slices of bread squishing the peanut butter and jelly together.'},
  ]);
};
