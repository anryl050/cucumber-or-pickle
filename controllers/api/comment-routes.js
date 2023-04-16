const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Comment.findAll({
          where: {
              id: req.params.id
          }
      })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});


// POST comment route
router.post('/', withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      poll_id: req.body.poll_id,
      user_id: req.session.user_id,
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
     res.status(404).json({
            message: 'Not logged in!'
        });
  }
});

// DELETE comment route
// router.delete('/:id', withAuth, (req, res) => {
//   Comment.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbCommentData => {
//       if (!dbCommentData) {
//         res.status(404).json({ message: 'No comment found with this id' });
//         return;
//       }
//       res.json(dbCommentData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;