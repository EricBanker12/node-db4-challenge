
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('recipes').insert([
    {name: 'Peanut Butter & Jelly Sandwich'},
  ]);
};
