const { Poll } = require('../models');

const pollData = [
    {
        poll_text: "Cucumbers are better than pickles",
        user_id: 1,
        agree_votes: 3,
        disagree_votes: 7
    },
    {
        poll_text: "Almond butter is better than peanut butter",
        user_id: 2,
        agree_votes: 2,
        disagree_votes: 10
    },
    {
        poll_text: "Kale is better than spinach",
        user_id: 3,
        agree_votes: 1,
        disagree_votes: 5
    },
    {
        poll_text: "Apples are better than oranges",
        user_id: 2,
        agree_votes: 6,
        disagree_votes: 5
    },
    {
        poll_text: "Bacon is better than ham",
        user_id: 1,
        agree_votes: 8,
        disagree_votes: 4
    },
]

const seedPolls = () => Poll.bulkCreate(pollData);

module.exports = seedPolls;