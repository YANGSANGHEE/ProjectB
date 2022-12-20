const express = require('express');
<<<<<<< HEAD:backend/Router/ApiSetGET.js
=======
const { default: test } = require('node:test');
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331:backend/Router/ApiSet.js
const connection = require('../dbconnect')
const router = express.Router();

router.get('/:id', (req, res) => {
  let id = req.params.id
  let Query

  if (typeof id === 'string') {
    switch (id) {
      case 'test':
        Query = 'SELECT * FROM hipasstest'
        connection.query(
          Query, (err, row, field) => {
            if (err) throw err
            res.send(row)
          }
        );
        break;
<<<<<<< HEAD:backend/Router/ApiSetGET.js
=======
      case 'testpost':
        let Data = req.body
        console.log(Data);
        break;
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331:backend/Router/ApiSet.js
      default:
        return null
    }
  }
  connection.query(
    Query, (err, row, field) => {
      if (err) throw err
      res.send(row)
    }
  );
});

module.exports = router