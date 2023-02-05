require('../bootstrap');

const storage = process.env.NODE_ENV === "test"
  ? './src/database/db-test.sqlite'
  : './src/database/database.sqlite';

module.exports = {
  dialect: "sqlite", 
  storage,
  operatorAliases: false,
  logging: process.env.NODE_ENV === "test",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
