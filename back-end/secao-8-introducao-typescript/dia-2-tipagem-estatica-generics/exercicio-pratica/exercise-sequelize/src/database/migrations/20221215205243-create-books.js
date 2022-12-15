'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull:true,
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull:true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'author_id',
        references: {
          model: 'authors',
          key: 'id'
        },
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'genre_id',
        references: {
          model: 'genres',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return  queryInterface.dropTable('books');
  }
};
