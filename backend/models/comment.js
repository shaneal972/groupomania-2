'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Post, {
        foreignKey: {
          name: 'postId',
          allowNull: false
        },
        as: 'posts'
      });
    }
  };
  Comment.init({
    author: DataTypes.STRING,
    message: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};