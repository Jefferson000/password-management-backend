const { errorHandler } = require("../common/errorHandler");
const pool = require("../config/database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.auth = (params) => {
  const password = params.password;
  return new Promise(function (resolve, reject) {
    pool.query(
      `CALL auth('${params.username || params.email}')`,
      (err, res) => {
        if (err) {
          reject(errorHandler(err));
          return;
        }
        let user = res[0][0];
        const hashedPassword = user.password;
        const passwordMatch = bcrypt.compareSync(password, hashedPassword);

        if (!passwordMatch) {
          reject({ message: `Log In Failed`, status: 401 });
          return;
        }

        delete user.password;
        const token = jwt.sign({ user_id: user.user_id, username: user.username }, 'secretKey', { expiresIn: '1h' });
        user.token = token;
        resolve(user);
      }
    );
  });
};
