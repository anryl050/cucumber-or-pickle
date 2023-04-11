const { User } = require('../models');

const userData = [
    {
        username: "Sal",
        email: "sal@hotmail.com",
        password: "password12345"
    },
    {
        username: "Lernantino",
        email: "lernantino@hotmail.com",
        password: "password12345"
    },
    {
        username: "Amiko",
        email: "amiko2k20@hotmail.com",
        password: "password12345"
    },


]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;