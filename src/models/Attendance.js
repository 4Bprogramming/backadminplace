import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Attendance = sequelize.define("attendance", {
  attendance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  motivo: {
    type: DataTypes.STRING,
   
  },
  presupuesto: {
    type: DataTypes.STRING,
  
  },
  abonado: {
    type: DataTypes.STRING,

  },
  usado: {
    type: DataTypes.STRING,

  },
  total: {
    type: DataTypes.STRING,
  
  },

  status: {
    type: DataTypes.ENUM(
      "Pendiente",
      "Recibida",
      "en Taller",
      "Terminada",
      "Entregada"
    ),
    allowNull: false,
    defaultValue: "Pendiente",
  },
});
