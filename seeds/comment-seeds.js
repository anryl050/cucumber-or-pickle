const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        poll_id: 3,
        comment_text: "This is my favorite poll."
    },
    {
        user_id: 1,
        poll_id: 3,
        comment_text: "This is relevant to my interests."
    },
    {
        user_id: 1,
        poll_id: 3,
        comment_text: "2/10 would not answer."
    },
    {
        user_id: 1,
        poll_id: 3,
        comment_text: "Um, actually...."
    },
    {
        user_id: 1,
        poll_id: 3,
        comment_text: "This poll makes me nervous."
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;