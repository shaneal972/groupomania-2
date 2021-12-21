'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Comments', [{
      message: 'Ce poset est pas mal',
      userId: 1,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Comments', null, {});
     
  }
};
