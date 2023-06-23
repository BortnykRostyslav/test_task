const pingRouter = require('express').Router();

const controller = require('./ping.countroller')

pingRouter.get('/', controller.pingFirstPage);

module.exports = pingRouter;