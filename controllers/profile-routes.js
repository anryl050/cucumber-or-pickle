const router = require('express').Router();
const sequelize = require('../config/connection');
const { Poll, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Poll.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'poll_text',
      'created_at',
      'agree_votes',
      'disagree_votes'
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
      // serialize data before passing to template
      const polls = dbPollData.map(poll => poll.get({ plain: true }));
      res.render('user-profile', { polls, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Poll.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'poll_text',
      'created_at',
      'agree_votes',
      'disagree_votes'
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

      res.render('edit-poll', {
        poll,
        loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/create/', withAuth, (req, res) => {
  Poll.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'poll_text',
      'created_at',
      'agree_votes',
      'disagree_votes'
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
      // serialize data before passing to template
      const polls = dbPollData.map(poll => poll.get({ plain: true }));
      res.render('create-poll', { polls, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;