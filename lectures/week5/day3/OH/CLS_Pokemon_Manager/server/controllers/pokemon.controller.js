const Pokemon = require('../models/pokemon.model');

module.exports = {

    getAllPokemon: (req, res) => {
        Pokemon.find()
            .then((allPokemon) => {
                res.status(200).json(allPokemon)
                console.log(allPokemon)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    createPokemon: (req, res) => {
        Pokemon.create(req.body)
            .then((newPokemon) => {
                res.status(200).json(newPokemon)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    getOnePokemon: (req, res) => {
        Pokemon.findOne({_id: req.params.id})
            .then((onePokemon) => {
                res.status(200).json(onePokemon)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}