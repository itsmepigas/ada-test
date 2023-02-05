const { Router } = require('express');

const routes = new Router();

const Session = require('./Session');
const Cards = require('./Cards');

routes.use(Session);
routes.use(Cards);

module.exports = routes;
