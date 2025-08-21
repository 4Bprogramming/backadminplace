import { Department, Employee, Job } from "../models/index.js";

export const getDepartmentsWithEmployees = async (req, res, next) => {
  try {
    const departments = await Department.findAll({
      include: {
        model: Employee,
        include: [Job],
      },
      order: [["department_name", "ASC"]],
    });

    const result = departments.map((dept) => ({
      department_name: dept.department_name,
      employees: dept.employees.map((e) => ({
        employee_id: e.id,
        first_name: e.first_name,
        last_name: e.last_name,
        email: e.email,
        phone_number: e.phone_number,
        hire_date: e.hire_date,
        job_title: e.job?.job_title,
        salary: e.salary,
      })),
    }));

    res.json(result);
  } catch (err) {
    next(err);
  }
};

//create new department

export const createDepartment = async (req, res, next) => {

  try {
    const departamentcreated = await Department.create({ ...req.body });
    if (!departamentcreated)
      return res
        .status(401)
        .send({ message: "No se creo el departamento" });
    res.status(200).send({
      message: "Departamento creado con exito.",
      departamentcreated,
    });
  } catch (e) {
    next(e);
  }
};