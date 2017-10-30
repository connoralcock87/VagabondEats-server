var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  queries.getAll()
    .then(truck => {
      res.json(truck)
    });
});

module.exports = router;
