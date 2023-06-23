const dogsRouter = require('express').Router();

const controller = require('./dogs.countroller')

dogsRouter.get('/', controller.getAllDogs);
dogsRouter.post('/', controller.createDog);

module.exports = dogsRouter;