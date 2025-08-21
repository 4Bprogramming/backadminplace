import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Job = sequelize.define("job", {
  job_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});