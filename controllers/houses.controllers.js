import * as housesRepository from "../repositories/houses.repository.js"

export const getAllHouses = async (req, res) => {
     try {
      const allHouses = await housesRepository.getAllHouses();
       res.json(allHouses);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error", code: error.code });
      }
}

const getSingleHouse = async (req, res) => {

}