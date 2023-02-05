const { Router } = require('express');

const routes = new Router();

const authMiddleware = require('../app/middlewares/auth');
const StoreValidation = require('../app/middlewares/validations/cards/store');
const UpdateValidation = require('../app/middlewares/validations/cards/update');
const DelValidation = require('../app/middlewares/validations/cards/del');

const Cards = require("../app/controllers/Cards")

routes.get('/cards', authMiddleware, Cards.get);
routes.post('/cards', authMiddleware, StoreValidation, Cards.store);
routes.put('/cards/:id', authMiddleware, UpdateValidation, Cards.update);
routes.delete('/cards/:id', authMiddleware, DelValidation, Cards.del);

module.exports = routes;
