const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '134679',
  database: 'carsdb'
});
module.exports = connection;