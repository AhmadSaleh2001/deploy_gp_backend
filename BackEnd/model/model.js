const { Conn } = require("../DB/Connection");
const { DataTypes } = require("sequelize");
const { Url } = require("./url");
const { Rate } = require("./rate");
const Model = Conn.define(
  "model",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
Model.hasMany(Url, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Model.hasMany(Rate, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
module.exports = { Model };
