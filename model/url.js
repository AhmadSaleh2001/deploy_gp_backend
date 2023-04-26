const { Conn } = require("../DB/Connection");
const { DataTypes } = require("sequelize");
const { Admin } = require("./admin");
const Url = Conn.define(
  "url",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    good: {
      type: DataTypes.ENUM("1", "0"),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
// Url.belongsTo(Admin);
module.exports = { Url };
