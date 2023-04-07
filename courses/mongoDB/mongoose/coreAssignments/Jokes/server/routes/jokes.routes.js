const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/allJokes', JokeController.findAllJokes);
    app.get('/api/oneJoke/:id', JokeController.findOneJoke);
    app.post('/api/newJoke', JokeController.createJoke);
    app.put('/api/updateJoke/:id', JokeController.updateJoke);
    app.delete('/api/deleteJoke/:id', JokeController.deleteJoke);
}