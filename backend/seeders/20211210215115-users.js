'use strict';

const faker = require('faker');

const users = [...Array(10)].map((user) => ({
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(8),
  connected: faker.datatype.boolean(false),

}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkInsert('Users', null, {});
  }
};
