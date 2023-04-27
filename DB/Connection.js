const { Sequelize } = require("sequelize");
const Conn = new Sequelize("phishing_detect", "ahmadsaleh", "AhmadSaleh2001", {
  dialect: "mysql",
  host: "db4free.net",
  port: "3306",
});

const Connect = async () => {
  return await Conn.sync();
};

module.exports = {
  Conn,
  Connect,
};
