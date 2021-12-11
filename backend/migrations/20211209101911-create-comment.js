'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
          as: 'postId'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};