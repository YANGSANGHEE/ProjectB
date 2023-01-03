const maria = require('mysql');
const conn = maria.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'hipass305',
  database: 'hipass',
});
module.exports = conn;
