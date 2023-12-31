const { createPool } = require("mysql2");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "password_management",
  connectionLimit: 10,
});

module.exports = pool;
