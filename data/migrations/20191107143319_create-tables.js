
exports.up = function(knex) {
  return knex.schema
    //recipes
    .createTable('recipes', tbl => {
        // id primary key
        tbl.increments()
        // name string required
        tbl.string('name').notNullable()
    })
    
    // ingredients
    .createTable('ingredients', tbl => {
        // id primary key
        tbl.increments()
        // name string required
        tbl.string('name').notNullable()
    })
    
    // recipe_ingredients
    .createTable('recipe_ingredients', tbl => {
        // id primary key
        tbl.increments()
        // recipe_id foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        // ingredient_id foreign key
        tbl.integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        // amount float required
        tbl.float('amount').notNullable()
        // amount_units string optional
        tbl.string('amount_units')
    })

    // instructions
    .createTable('instructions', tbl => {
        // id primary key
        tbl.increments()
        // step_number integer required
        tbl.integer('step_number').notNullable()
        // instruction string required
        tbl.string('instruction').notNullable()
        // recipe_id foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('instructions')
    .dropTable('recipe_ingredients')
    .dropTable('ingredients')
    .dropTable('recipes')
};
