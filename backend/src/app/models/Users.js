const Sequelize = require('sequelize');
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
const { uuid } = require('uuidv4');

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        user: Sequelize.STRING,
        pass: Sequelize.VIRTUAL,
        password: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'users',
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.pass) user.password = await bcrypt.hash(user.pass, 8);

      if (!user?.id) user.id = uuid();
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Cards, { foreignKey: 'user_id', as: 'cards' });
  }

  checkPassword(pass) {
    return bcrypt.compare(pass, this.password);
  }
}

module.exports = Users;
