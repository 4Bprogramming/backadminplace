import { Attendance, Employee, Job } from "../models/index.js";

// GET /attendance
export const getAttendance = async (req, res, next) => {
  try {
    const attendance = await Attendance.findAll({ include: [Employee] });
    res.json(attendance);
  } catch (err) {
    next(err);
  }
};

// GET /attendance/employees/:date
export const getAttendanceByDate = async (req, res, next) => {
  try {
    const { date } = req.params;

    const employees = await Employee.findAll({
      include: [
        {
          model: Attendance,
          where: { date },
          required: false,
        },
        Job,
      ],
    });

    const result = employees.map((e) => ({
      employee_id: e.id,
      name: `${e.first_name} ${e.last_name}`,
      job_title: e.job?.job_title || null,
      status: e.attendances?.[0]?.status || "not set",
    }));

    res.json(result);
  } catch (err) {
    next(err);
  }
};

// PUT /attendance/:id

export const updateAttendance = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Attendance.update(req.body, {
      where: { attendance_id: parseInt(id) },
    });

    res.json({ message: "Attendance updated", updated });
  } catch (err) {
    next(err);
  }
};

export const updateAttendanceByDate = async (req, res, next) => {
  try {
    const { date } = req.params;
    const { attendance } = req.body;

    for (const record of attendance) {
      await Attendance.upsert({
        employee_id: record.employee_id,
        date,
        status: record.status,
      });
    }

    res.json({ message: "Attendance updated successfully." });
  } catch (err) {
    next(err);
  }
};

// POST /attendance/employees/

export const create = async (req, res, next) => {
  try {
    const atendanceCreate = await Attendance.create({ ...req.body });

    if (!atendanceCreate)
      return res.status(401).send({ message: "No se creo el Cobro" });
    res.status(200).send({
      message: "Cobro creado con exito.",
      atendanceCreate,
    });
  } catch (e) {
    next(e);
  }
};