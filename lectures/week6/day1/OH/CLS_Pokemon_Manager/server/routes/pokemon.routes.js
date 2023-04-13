const PokemonController = require('../controllers/pokemon.controller')

module.exports = (app) => {
    app.get('/api/pokemon', PokemonController.getAllPokemon)
    app.post('/api/pokemon', PokemonController.createPokemon)
    app.get('/api/pokemon/:id', PokemonController.getOnePokemon)
    app.put('/api/pokemon/:id', PokemonController.updatePokemon)
    app.delete('/api/pokemon/:id', PokemonController.deletePokemon)
}