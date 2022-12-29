const express = require('express');
const connection = require('../dbconnect');
const request = require('request');
const converter = require('xml-js');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let Query;

  if (typeof id === 'string') {
    switch (id) {
      case 'cctv':
        Query = 'SELECT * FROM daejeon_cctv';
        connection.query(Query, (err, row, field) => {
          if (err) throw err;
          res.send(row);
          console.log('CCTV 연동 완료');
        });
        break;
      case 'out':
        request(
          {
            url: `http://www.utic.go.kr/guide/imsOpenData.do?key=${process.env.AWS_APP_KEY}`,
            method: 'GET',
          },
          (error, response, body) => {
            const Tojson = converter.xml2json(body);
            res.send(Tojson);
            console.log('돌발상황 완료');
          }
        );
        break;
      default:
        return null;
    }
  }
});

module.exports = router;