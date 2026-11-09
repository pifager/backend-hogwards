import * as teachersRepository from "../repositories/teachers.repository.js";

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await teachersRepository.getAllTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const teacher = await teachersRepository.getTeacherById(req.params.id);
    if (!teacher) return res.sendStatus(404);
    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const { name, house } = req.body;
    const teacher = await teachersRepository.createTeacher(name, house);
    res.status(201).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const { name, house } = req.body;
    const teacher = await teachersRepository.updateTeacher(req.params.id, name, house);
    if (!teacher) return res.sendStatus(404);
    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const deleted = await teachersRepository.deleteTeacher(req.params.id);
    if (deleted === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};