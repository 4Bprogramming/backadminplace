import { Photo } from "../models/Photo.js";


export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.findAll();
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las fotos" });
  }
};

export const getPhoto = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la foto" });
  }
};

export const createPhoto = async (req, res) => {
  try {
    const { name, description, image } = req.body;

    if (!name || !image) {
      return res
        .status(400)
        .json({ message: "El nombre y la imagen son obligatorios" });
    }

    const photo = await Photo.create({
      name,
      description,
      images: image, // 👈 guardar en la columna "images"
    });

    res.status(201).json(photo);
  } catch (error) {
    console.error("Error al crear la foto:", error);
    res.status(500).json({ message: "Error al crear la foto" });
  }
};