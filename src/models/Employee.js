import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Employee = sequelize.define("employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  hire_date: {
    type: DataTypes.DATEONLY,
  },
  place: {
    type: DataTypes.STRING,
  },
  salary: {
    type: DataTypes.FLOAT,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "departments", // nombre tabla en la base
      key: "department_id", // columna PK de Department
    },
  },
  job_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "jobs", // nombre tabla en la base
      key: "job_id",   // columna PK de Job, asumido aquí, confirmar
    },
  },
}, {
  timestamps: false,
});
