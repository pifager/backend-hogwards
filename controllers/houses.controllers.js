import * as housesRepository from "../repositories/houses.repository.js";
import { HTTPError } from "../errors/HTTPError.js";

export const getAllHouses = async (req, res) => {
  const houses = await housesRepository.getAllHouses();
  res.status(200).json(houses);
};

export const getHouseById = async (req, res) => {
  const house = await housesRepository.getHouseById(req.params.id);
  if (!house) throw new HTTPError(404, "No house with given id");
  res.status(200).json(house);
};

export const deleteHouse = async (req, res) => {
  throw new HTTPError(405, "Houses cannot be deleted");
};