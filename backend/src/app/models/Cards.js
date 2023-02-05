const Sequelize = require('sequelize');
const { Model } = require('sequelize');
const { uuid } = require('uuidv4');

class Cards extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        status: Sequelize.ENUM('new', 'pending', 'inProgress', 'completed'),
        priority: Sequelize.ENUM('low', 'medium', 'high'),
        deleted: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'cards',
      },
    );

    this.addHook('beforeSave', async (card) => {
      if (!card?.id) card.id = uuid();
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Cards;
