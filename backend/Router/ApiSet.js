const express = require('express');
const { default: test } = require('node:test');
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
      case 'testpost':
        let Data = req.body
        console.log(Data);
        break;
      default:
        return null
    }
  }
});

module.exports = router