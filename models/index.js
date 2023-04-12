const User = require('./User');
const Poll = require('./Poll');
const Comment = require('./Comment');

//create associations
User.hasMany(Poll, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Poll.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Poll, {
    foreignKey: 'poll_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Poll.hasMany(Comment, {
    foreignKey: 'poll_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Poll, Comment };