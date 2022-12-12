const express = require('express')
const connection = require('../dbconnect')
const router = express.Router();

router.get('/:id', (req, res) => {
  let id = req.params.id
  let Query

  if (typeof id === 'string') {
    switch (id) {
      case 'test':
        Query = 'SELECT * FROM hipasstest'
        break;
      case 'test2':
        Query = 'SELECT * FROM testing'
        break;
      default:
        return null
    }
    connection.query(
      Query, (err, row, field) => {
        if (err) throw err
        res.send(row)
      }
    );
  }
});

module.exports = router