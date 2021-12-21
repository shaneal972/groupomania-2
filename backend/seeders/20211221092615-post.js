'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
    await queryInterface.bulkInsert('Posts', [{
      title: 'Titre post 1',
      content: 'Contenu du post 1',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Posts', null, {});
    
  }
};
