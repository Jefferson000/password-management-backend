const pool = require("../config/database");

module.exports.getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * from password_management.user;", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res[0]);
    });
  });
};

module.exports.createUser = (data) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `CALL create_user('${data.username}', '${data.email}', '${data.password}');`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res[0]);
      }
    );
  });
};
