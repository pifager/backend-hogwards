import * as housesRepository from "../repositories/houses.repository.js";

export const getAllHouses = async (req, res) => {
  try {
    const houses = await housesRepository.getAllHouses();
    res.status(200).json(houses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const getHouseById = async (req, res) => {
  try {
    const house = await housesRepository.getHouseById(req.params.id);
    if (!house) return res.sendStatus(404);
    res.status(200).json(house);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};