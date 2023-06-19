const pool = require("../config/database");

module.exports.getPasswords = (user_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(`CALL get_user_passwords(${user_id})`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};
