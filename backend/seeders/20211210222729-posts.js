'use strict';

const faker = require('faker');
const db = require('../models/index');
const sequelize = require('sequelize');

const { QueryTypes } = require('sequelize');
const users = db.sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT })
  .then(() => {
    console.log(users);
  })




const posts = [...Array(100)].map((post) => ({
  content: faker.lorem.text(),
  created_at: faker.date.recent()
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    return await queryInterface.bulkInsert('Posts', posts, {});
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
