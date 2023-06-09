const router = require('express').Router();
const { Poll, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// GET all polls posted by user
router.get('/', (req, res) => {

  Poll.findAll({
    attributes: [
      'id',
      'poll_text',
      'created_at',
      'user_id',
      'agree_votes',
      'disagree_votes'
    ],
    order: [['created_at']],
    include: [
      // include the comment model
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
      },
    ]
  })
    .then(dbPollData => res.json(dbPollData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET all polls route
router.get('/:id', (req, res) => {
  Poll.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'poll_text',
      'created_at',
      'user_id',
      'agree_votes',
      'disagree_votes'
    ],
    include: [
      // include the comment model
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'poll_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
    .then(dbPollData => {
      if (!dbPollData) {
        res.status(404).json({ message: 'No poll found with this id' });
        return;
      }
      res.json(dbPollData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST poll route
router.post('/', withAuth, (req, res) => {

  Poll.create({
    poll_text: req.body.poll_text,
    user_id: req.session.user_id
  })
    .then(dbPollData =>
      res.json(dbPollData)
    )
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/:id', withAuth, (req, res) => {
  Poll.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbPollData => {
      if (!dbPollData) {
        res.status(404).json({ message: 'No poll found with this id' });
        return;
      }

      const voteType = req.body.vote;

      if (voteType === 'agree') {
        dbPollData.increment('agree_votes', { by: 1 });
      } else if (voteType === 'disagree') {
        dbPollData.increment('disagree_votes', { by: 1 });
      }

      res.json(dbPollData);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE poll route
router.put('/:id', withAuth, (req, res) => {
  Poll.update({
    poll_text: req.body.poll_text
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbPollData => {
      if (!dbPollData) {
        res.status(404).json({ message: 'No poll found with this id' });
        return;
      }
      res.json(dbPollData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE poll route
router.delete('/:id', withAuth, (req, res) => {
  Poll.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPollData => {
      if (!dbPollData) {
        res.status(404).json({ message: 'No poll found with this id' });
        return;
      }
      res.json(dbPollData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;