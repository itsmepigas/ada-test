module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cards', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: Sequelize.ENUM('new', 'pending', 'inProgress','completed'),
        allowNull: false,
        defaultValue: "new",
      },
      priority: {
        type: Sequelize.ENUM('low', 'medium', 'high'),
        allowNull: false,
        defaultValue: "low",
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cards');
  },
};
