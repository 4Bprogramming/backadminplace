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
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  items: {
    type: DataTypes.JSON, // JSONB si usas PostgreSQL, JSON si usas MySQL
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "employees", // Asegúrate que coincide con el nombre de tabla real
      key: "id",
    },
  },
});