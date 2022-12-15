'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('authors', 
    [{
      id: 1,
      name: 'Ludson Pereira',
    },
  ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('authors', null, {});
  }
};
