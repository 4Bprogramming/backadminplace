import { sequelize } from "../database/database.js";
import { Employee } from "./Employee.js";
import { Department } from "./Department.js";
import { Job } from "./Job.js";
import { Attendance } from "./Attendance.js";
import { Factura } from "./Factura.js";

// Relaciones
Department.hasMany(Employee, { foreignKey: "department_id" });
Employee.belongsTo(Department, { foreignKey: "department_id" });

Job.hasMany(Employee, { foreignKey: "job_id" });
Employee.belongsTo(Job, { foreignKey: "job_id" });

Employee.hasMany(Attendance, { foreignKey: "employee_id" });
Attendance.belongsTo(Employee, { foreignKey: "employee_id" });

Factura.belongsTo(Employee, { foreignKey: "employee_id" });
Employee.hasMany(Factura, { foreignKey: "employee_id" });

export {
  sequelize,
  Employee,
  Department,
  Job,
  Attendance,
  Factura,
};