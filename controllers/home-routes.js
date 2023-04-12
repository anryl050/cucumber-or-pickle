const router = require('express').Router();
const sequelize = require('../config/connection');
const { Poll, User, Comment } = require('../models');



router.get('/', (req, res) => {
    console.log(req.session);
    
    Poll.findAll({
      attributes: [
        'id',
        'poll_text'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'poll_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPollData => {
        const polls = dbPollData.map(poll => poll.get({ plain: true }));
        res.render('homepage', {
            polls,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/poll/:id', (req, res) => {
    Poll.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'poll_text',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'poll_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPollData => {
        if (!dbPollData) {
          res.status(404).json({ message: 'No poll found with this id' });
          return;
        }
  
        // serialize the data
        const poll = dbPollData.get({ plain: true });
  
        // pass data to template
        res.render('single-poll', {
          poll,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


module.exports = router;