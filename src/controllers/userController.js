import { User } from "../models/User.js";



// GET /user
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findAll();
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// GET /user/:id
export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// POST /user
export const createUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const usercreated = await User.create({ email, password });

        if (!usercreated)
            return res
                .status(401)
                .send({ message: "No se creo el usuario" });
        res.status(200).send({
            message: "Usuario creado con exito.",
            usercreated,
        });
    } catch (e) {
        next(e);
    }
};

    export const loginUser = async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email, password } });

            if (!user) return res.status(401).send({ message: "Invalid credentials" });

            res.status(200).send({
                message: "Login successful",
                user,
            });
        } catch (e) {
            next(e);
        }
    }