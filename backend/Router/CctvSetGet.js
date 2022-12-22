const conn = require("../dbconnect");
const cctvrouter = (req, res, err) => {
  conn.query("SELECT * FROM daejeon_cctv", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
module.exports = cctvrouter;
