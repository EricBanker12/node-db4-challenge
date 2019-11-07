const router = require('express').Router()

const recipesDB = require('./recipes-model')

router.get('/', (req, res) => {
    recipesDB.getRecipes()
    .then(resp => {
        res.json(resp)
    })
    .catch(err => {
        console.error(err)
        res.sendStatus(500)
    })
})

router.get('/:id/shoppingList', (req, res) => {
    recipesDB.getShoppingList(req.params.id)
    .then(resp => {
        res.json(resp)
    })
    .catch(err => {
        console.error(err)
        res.sendStatus(500)
    })
})

router.get('/:id/instructions', (req, res) => {
    recipesDB.getInstructions(req.params.id)
    .then(resp => {
        res.json(resp)
    })
    .catch(err => {
        console.error(err)
        res.sendStatus(500)
    })
})

module.exports = router