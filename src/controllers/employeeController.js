import { Employee, Job, Department } from "../models/index.js";

// GET all employees
export const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.findAll({
      // include: [Job , Department ],
    });
    res.json(employees);
  } catch (err) {
    next(err);
  }
};






// POST new employee


export const createEmployee = async (req, res, next) => {
  try {
    const { salary, ...rest } = req.body;

    // Validaciones previas...
    // Conversión a números...
    console.log('Data para crear empleado:', {
      ...rest,
   
      salary: salary ? parseFloat(salary) : null,
    });

    const newEmployee = await Employee.create({
      ...rest,
     
      salary: salary ? parseFloat(salary) : null,
    });

    return res.status(201).json(newEmployee);
  }
  catch (err) {
    console.error('Error en createEmployee', err);

    // Armar respuesta con info del error
    const errorPayload = {
      name: err.name || 'Error',
      message: err.message || 'Unknown error',
      errors: err.errors ? err.errors.map(e => e.message) : undefined,
    };

    return res.status(err.name === 'SequelizeValidationError' ? 400 : 500).json(errorPayload);
  }
};










export const getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id, {
     
    });
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

// PATCH /employees/:id
export const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Employee.update(req.body, { where: { id } });
    res.json({ message: "Employee updated", updated });
  } catch (err) {
    next(err);
  }
};

// DELETE /employees/:id
export const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Employee.destroy({ where: { id } });
    res.json({ message: "Employee deleted" });
  } catch (err) {
    next(err);
  }
};