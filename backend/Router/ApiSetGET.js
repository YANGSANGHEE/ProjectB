const express = require('express');
const connection = require('../dbconnect');
const request = require('request');
const converter = require('xml-js');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config()

router.get('/:id', (req, res) => {
  let id = req.params.id
  let Query

  if (typeof id === 'string') {
    switch (id) {
      case 'cctv':
        Query = 'SELECT * FROM daejeon_cctv'
        connection.query(
          Query, (err, row, field) => {
            if (err) throw err
            res.send(row)
          }
        );
        break;
      case 'outbreak':
        request({
          url: `http://www.utic.go.kr/guide/imsOpenData.do?key=${process.env.ITS_KEY_SANGHEE}`,
          method: 'GET',
        }, (error, response, body) => {
          const Tojson = converter.xml2json(body);
          res.send(Tojson);
        })
        break;
      default:
        return null
    }
  }
});

module.exports = router