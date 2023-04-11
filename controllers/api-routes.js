// const router = require('express').Router();
// const { User, Blog } = require('../models');




// module.exports = router;


const router = require('express').Router();

// GET specific poll data
router.get('/polls/:id', async (req, res) => {
  try {
    const data = {
      agree_votes: 10,
      disagree_votes: 20
    }
    res.json(data)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
