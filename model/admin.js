const { Conn } = require("../DB/Connection");
const { DataTypes } = require("sequelize");
const { Url } = require("./url");
const Admin = Conn.define(
  "admin",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    f_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    m_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    l_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
  {
    hooks: {
      beforeCreate: (admin, option) => {
        console.log("Admin Inserted\n");
        admin.email = admin.email.toLowerCase();
        console.log(admin);
        return admin;
      },
    },
  }
);
Admin.hasMany(Url, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
module.exports = { Admin };
