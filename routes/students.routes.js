import { Router } from "express";
import * as studentsController from "../controllers/students.controllers.js";

const router = Router();

router.get("/", studentsController.getAllStudents);
router.get("/:id", studentsController.getStudentById);
router.post("/", studentsController.createStudent);
router.put("/:id", studentsController.updateStudent);
router.delete("/:id", studentsController.deleteStudent);

export default router;