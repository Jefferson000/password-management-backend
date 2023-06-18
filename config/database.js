const { createPool } = require("mysql");

const databaseConfig = createPool({
  host: "aws.connect.psdb.cloud",
  port: "3306",
  user: "a1w2ftb7trfyss50wlce",
  password: "pscale_pw_MTt4QgB728c6jVcszP0Zn3U9LSpCeT3IxYFB6CWVaRU",
  database: "password_management",
  connectionLimit: 10,
  ssl: { rejectUnauthorized: true },
});

module.exports = databaseConfig;
