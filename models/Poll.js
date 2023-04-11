const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create poll model
class Post extends Model { }

// create fields/columns for poll model
Poll.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    poll_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'poll'
  }
);

module.exports = Poll;