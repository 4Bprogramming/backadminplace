import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Attendance = sequelize.define("attendance", {
  attendance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
   cuota: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("vigente", "vencida", "por vencer","pagada"),
    allowNull: false,
    defaultValue: "vigente",
  },
});