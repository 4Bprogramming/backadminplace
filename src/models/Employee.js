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
  
  },
 
  email: {
    type: DataTypes.STRING,
    unique: true,
   
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
  // department_id: {
  //   type: DataTypes.INTEGER,
  
  //   // references: {
  //   //   model: "departments", // nombre tabla en la base
  //   //   key: "department_id", // columna PK de Department
  //   // },
  // },
  // job_id: {
  //   type: DataTypes.INTEGER,

  //   // references: {
  //   //   model: "jobs", // nombre tabla en la base
  //   //   key: "job_id",   // columna PK de Job, asumido aquí, confirmar
  //   // },
  // },
}, {
  timestamps: false,
});
