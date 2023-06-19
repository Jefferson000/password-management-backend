const { errorHandler } = require("../common/errorHandler");
const pool = require("../config/database");

module.exports.auth = (params) => {
  return new Promise(function (resolve, reject) {
    pool.query(`CALL auth('${params.username||params.email}',${params.password})`, (err, res) => {
      if (err) {
        reject(errorHandler(err));
        return;
      }
      resolve(res[0]);
    });
  });
};