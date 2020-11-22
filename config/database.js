require('dotenv').config()
const mysql = require('mysql');
const util = require('util');

const pool = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

pool.query = util.promisify(pool.query);
module.exports = pool;