import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Factura = sequelize.define("factura", {
  factura_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
     autoIncrement: true,  

  },
  customerName: {
    type: DataTypes.STRING,

  },
  email: {
    type: DataTypes.STRING,

  },
  phone: {
    type: DataTypes.STRING,

  },
  url: {
    type: DataTypes.TEXT,
 },
  date: {
    type: DataTypes.DATE,

  },
  items: {
    type: DataTypes.JSON, // JSONB si usas PostgreSQL, JSON si usas MySQL
  
  },
  total: {
    type: DataTypes.FLOAT,

  },
  employee_id: {
    type: DataTypes.INTEGER,

    references: {
      model: "employees", // Asegúrate que coincide con el nombre de tabla real
      key: "id",
    },
  },
});