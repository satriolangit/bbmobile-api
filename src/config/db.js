const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

// create the pool
const pool = mysql.createPool({
  connectionLimit: 20,
  host: host,
  user: user,
  password: password,
  database: database,
  port: port,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }
  if (connection) connection.release();
});

// now get a Promise wrapped instance of that pool
const promisePool = pool.promise();

//sample
// const [rows,fields] = await promisePool.query("SELECT 1");

module.exports = promisePool;
