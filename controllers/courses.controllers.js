import * as coursesRepository from "../repositories/courses.repository.js";

export const getAllCourses = async (req, res) => {
  try {
    const courses = await coursesRepository.getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await coursesRepository.getCourseById(req.params.id);
    if (!course) return res.sendStatus(404);
    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const createCourse = async (req, res) => {
  try {
    const { name, teacher_id } = req.body;
    if (!name) return res.status(400).json({ error: "name is required" });
    const course = await coursesRepository.createCourse(name, teacher_id);
    res.status(201).json(course);
  } catch (error) {
    if (error.code === "23503") {
      return res.status(400).json({ error: "Teacher does not exist" });
    }
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { name, teacher_id } = req.body;
    if (!name) return res.status(400).json({ error: "name is required" });
    const course = await coursesRepository.updateCourse(req.params.id, name, teacher_id);
    if (!course) return res.sendStatus(404);
    res.status(200).json(course);
  } catch (error) {
    if (error.code === "23503") {
      return res.status(400).json({ error: "Teacher does not exist" });
    }
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const deleted = await coursesRepository.deleteCourse(req.params.id);
    if (deleted === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};