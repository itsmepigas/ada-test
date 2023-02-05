require('./bootstrap');

const express = require('express');
require('express-async-errors');
const Youch = require('youch');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./Routes');

require('./database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json({ limit: '25mb' }));
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV !== 'production') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal Server Error' });
    });
  }
}

module.exports = new App().server;
