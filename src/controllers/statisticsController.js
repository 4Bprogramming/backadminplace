import { Employee, Department, Job } from "../models/index.js";
import { sequelize } from "../models/index.js";

// GET /statistics
export const getStatistics = async (req, res, next) => {
  try {
    const employeeCount = await Employee.count();
    const departmentCount = await Department.count();
    const jobCount = await Job.count();

    const [departmentWise] = await sequelize.query(`
      SELECT d.department_name, COUNT(e.id) AS employee_count
      FROM departments d
      LEFT JOIN employees e ON d.department_id = e.department_id
      GROUP BY d.department_name
    `);

    res.json({
      employee_count: employeeCount,
      department_count: departmentCount,
      job_count: jobCount,
      department_wise_employee_count: departmentWise,
    });
  } catch (err) {
    next(err);
  }
};