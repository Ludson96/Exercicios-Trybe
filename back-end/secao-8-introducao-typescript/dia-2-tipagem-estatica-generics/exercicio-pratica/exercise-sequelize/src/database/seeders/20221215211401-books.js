'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('books', 
    [{
      id: 1,
      title: 'A volta dos que não foram',
      author_id: 1,
      genre_id: 1,
    }]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
