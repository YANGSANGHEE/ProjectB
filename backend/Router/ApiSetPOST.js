const express = require('express');
const connection = require('../dbconnect')
const router = express.Router();

router.post('/:id', (req, res) => {
  let id = req.params.id
  let Query

  if (typeof id === 'string') {
    switch (id) {
      case 'testpost':
        let data = req.body
        Query = `insert into hipasstest value ('${data.id}','${data.password}')`
        break;
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