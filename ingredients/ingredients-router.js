const router = require('express').Router()

const ingredientsDB = require('./ingredients-model')

router.get('/:id/recipes', (req, res) => {
    ingredientsDB.getRecipesWithIngredient(req.params.id)
    .then(resp => {
        res.json(resp)
    })
    .catch(err => {
        console.error(err)
        res.sendStatus(500)
    })
})

module.exports = router