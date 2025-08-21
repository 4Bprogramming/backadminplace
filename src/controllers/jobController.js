import { Job } from "../models/index.js";

// GET /job
export const getJob = async (req, res, next) => {
  try {
    const job = await Job.findAll();
    res.json(job);
  } catch (err) {
    next(err);
  }
};

// create new job

export const createJob = async (req, res, next) => {
  try {
    const jobcreated = await Job.create({ ...req.body });

    if (!jobcreated)
      return res.status(401).send({ message: "No se creo el job" });
    res.status(200).send({
      message: "Job creado con exito.",
      jobcreated,
    });
  } catch (e) {
    next(e);
  }
};
