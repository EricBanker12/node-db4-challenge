const knex = require('knex')

const config = require('../knexfile')

const db = knex(config.development)

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .select('recipe_ingredients.id', 'amount', 'amount_units', 'name')
        .where({recipe_id})
}

function getInstructions(recipe_id) {
    return db('instructions')
        .where({recipe_id})
}