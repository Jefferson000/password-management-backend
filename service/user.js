const { errorHandler } = require("../common/errorHandler");
const pool = require("../config/database");

module.exports.getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query("CALL get_users()", (err, res) => {
      if (err) {
        reject(errorHandler(err));
        return;
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
          reject(errorHandler(err));
          return;
        }
        resolve(res[0]);
        return;
      }
    );
  });
};
