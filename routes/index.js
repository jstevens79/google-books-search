const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/api', (req, res) => {
  db.Book.find({})
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.json(err))
})

router.post('/api', (req, res) => {
  db.Book.create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => {
      console.log(err)
    })
})

module.exports = router;