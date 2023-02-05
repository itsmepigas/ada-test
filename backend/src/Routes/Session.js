const { Router } = require('express');

const routes = new Router();

const Session = require("../app/controllers/Session")

const ValidationSignIn = require('../app/middlewares/validations/users/signin');
const ValidationSignUp = require('../app/middlewares/validations/users/signup');


routes.post('/signin', ValidationSignIn, Session.signIn);
routes.post('/signup', ValidationSignUp,Session.signUp);


module.exports = routes;
