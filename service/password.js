const { errorHandler } = require("../common/errorHandler");
const pool = require("../config/database");

module.exports.getPasswords = (userId) => {
  return new Promise(function (resolve, reject) {
    pool.query(`CALL get_user_passwords(${userId})`, (err, res) => {
      if (err) {
        reject(errorHandler(err));
        return;
      }
      resolve(res[0]);
    });
  });
};
