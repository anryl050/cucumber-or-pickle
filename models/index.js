const User = require('./User');
const Poll = require('./Poll');
const Comment = require('./Comment');

User.hasMany(Poll, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Poll.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
