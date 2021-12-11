'use strict';

const faker = require('faker');
const db = require('../models/index');
const Users = require('../models/user');
const sequelize = require('sequelize');

const { QueryTypes } = require('sequelize');



async function getUsersId() {
    try {
      const result = await db.sequelize.query(`SELECT id FROM users`);
      [result, metadata] = data;
      console.log(metadata);
      return result;
    } catch (error) {
        console.log(error);
    }
}

const ids = await getUsersId();

console.log('result', result);




const posts = [...Array(20)].map((post) => ({
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
