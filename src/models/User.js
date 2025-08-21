import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
 
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
   password:{
        type: DataTypes.STRING,
        allowNull:false
      },
 
}, {
  timestamps: false,
});
