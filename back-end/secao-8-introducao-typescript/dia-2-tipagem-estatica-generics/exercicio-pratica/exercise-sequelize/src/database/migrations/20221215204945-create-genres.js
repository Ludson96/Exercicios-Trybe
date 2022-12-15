'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('genres');
  }
};
