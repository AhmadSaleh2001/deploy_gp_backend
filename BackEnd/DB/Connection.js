const { Sequelize } = require("sequelize");
const Conn = new Sequelize("phishing_database", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Connect = async () => {
  return await Conn.sync({ force: true });
};

module.exports = {
  Conn,
  Connect,
};
