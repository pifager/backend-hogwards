import * as studentsRepository from "../repositories/students.repository.js";

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentsRepository.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await studentsRepository.getStudentById(req.params.id);
    if (!student) return res.sendStatus(404);
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, house, year } = req.body;
    const student = await studentsRepository.createStudent(name, house, year);
    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { name, house, year } = req.body;
    const student = await studentsRepository.updateStudent(req.params.id, name, house, year);
    if (!student) return res.sendStatus(404);
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const deleted = await studentsRepository.deleteStudent(req.params.id);
    if (deleted === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};