'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Users', [{
      name: 'David JACQUA',
      email: 'test@test.com',
      password: 'azerty1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * */
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
