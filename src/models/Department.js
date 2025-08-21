import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Department = sequelize.define("department", {
  department_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  department_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});