const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');

// Models
const Users = require("../app/models/Users");
const Cards = require("../app/models/Cards");

const models = [Users, Cards];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

}

module.exports = new Database();
