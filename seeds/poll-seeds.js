const { Poll } = require('../models');

const pollData = [
    {
        description: "Cucumbers are better than pickles",
        user_id: 1
    },
    {
        description: "Almond butter is better than peanut butter",
        user_id: 2
    },
    {
        description: "Kale is better than spinach",
        user_id: 3
    },
    {
        description: "Apples are better than oranges",
        user_id: 2
    },
    {
        description: "Bacon is better than ham",
        user_id: 1
    },
]

const seedPolls = () => Poll.bulkCreate(pollData);

module.exports = seedPolls;