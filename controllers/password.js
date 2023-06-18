
const userController = require('../service/user');

/*
CreatePassword =  (body) => {
    console.log(body)
    return new Promise( async (resolve, reject) => {
        var source    = "test";
        var password  = "a111";
        resolve(false)
    });
};
*/

/*
createUser = (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  };
*/

module.exports.createPassword = (req, res) => {
    if (!req.body) {
        console.log(err);
        return res.status(500).json({
            success: 0,
            message: "Database connection errror"
        });
    }
    return res.status(200).json({
        success: 1,
        data: {"results":"results"}
    });
};

module.exports.createUser = (reque, res) =>{
  create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror"
      });
    }
    return res.status(200).json({
      success: 1,
      data: results
    });
  });
}
/*
module.exports = {
    createPassword
}
*/