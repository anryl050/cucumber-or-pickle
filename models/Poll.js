const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Poll extends Model {}

Poll.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:"user",
            key:"id"
        }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'poll',
  }
);

module.exports = Poll;