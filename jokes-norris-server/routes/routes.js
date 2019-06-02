const jokesController = require('../controllers/jokes.controller');

module.exports = app => {
  app.get('/jokes', jokesController.newJoke);
};
