import { Router } from "express";
import * as housesController from "../controllers/houses.controllers.js";

const router = Router();

router.get("/", housesController.getAllHouses);
router.get("/:id", housesController.getHouseById);

export default router;