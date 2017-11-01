const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const bodyParser = require('body-parser');

require('dotenv').config();

/* GET home page. */
// router.get('/', (req, res) => {
//   queries.getAll()
//     .then(truck => {
//       res.json(truck)
//     });
// });

router.get('/', (req, res) => {
  queries.getSchedule()
    .then(schedule => {
      res.json(schedule)
    });
});

module.exports = router;
