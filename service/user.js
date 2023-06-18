const pool = require("../config/database");

module.exports.getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query("select * from password_management.user;", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};
