const { errorHandler } = require("../common/errorHandler");
const pool = require("../config/database");
const bcrypt = require('bcrypt');

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

  const { username, email, password } = data;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return new Promise(function (resolve, reject) {
    pool.query(
      `CALL create_user('${username}', '${email}', '${hashedPassword}');`,
      (err, res) => {
        if (err) {
          reject(errorHandler(err));
          return;
        }
        resolve(res[0][0]);
        return;
      }
    );
  });
};


module.exports.editUser = (userId, data) => {
  const { username, email, password } = data;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return new Promise(function (resolve, reject) {
    pool.query(
      `CALL edit_user(${userId}, '${username}', '${email}', '${hashedPassword}');`,
      (err, res) => {
        if (err) {
          reject(errorHandler(err));
          return;
        }
        resolve(res[0][0]);
      }
    );
  });
};