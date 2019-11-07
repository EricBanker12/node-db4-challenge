const knex = require('knex')

const config = require('../knexfile')

const db = knex(config.development)

module.exports = {
    getRecipesWithIngredient,
}

function getRecipesWithIngredient(ingredient_id) {
    return db('recipe_ingredients')
        .join('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
        .select('recipes.*')
        .where({ingredient_id})
}