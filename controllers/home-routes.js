// const router = require('express').Router();
// const { User, Blog } = require('../models');




// module.exports = router;


const router = require('express').Router();

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
     res.render('homepage', {
      posts: [1, 2]
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
