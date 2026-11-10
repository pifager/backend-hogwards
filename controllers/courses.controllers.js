import * as coursesRepository from "../repositories/courses.repository.js";
import * as teachersRepository from "../repositories/teachers.repository.js";
import { HTTPError } from "../errors/HTTPError.js";

async function checkTeacherExists(teacherId) {
  if (teacherId == null) return;
  const teacher = await teachersRepository.getTeacherById(teacherId);
  if (!teacher) throw new HTTPError(404, "No teacher with given teacher_id");
}

export const getAllCourses = async (req, res) => {
  const courses = await coursesRepository.getAllCourses();
  res.status(200).json(courses);
};

export const getCourseById = async (req, res) => {
  const course = await coursesRepository.getCourseById(req.params.id);
  if (!course) throw new HTTPError(404, "No course with given id");
  res.status(200).json(course);
};

export const createCourse = async (req, res) => {
  const { name, teacher_id } = req.body;
  await checkTeacherExists(teacher_id);
  const course = await coursesRepository.createCourse(name, teacher_id);
  res.status(201).json(course);
};

export const updateCourse = async (req, res) => {
  const { name, teacher_id } = req.body;
  await checkTeacherExists(teacher_id);
  const course = await coursesRepository.updateCourse(req.params.id, name, teacher_id);
  if (!course) throw new HTTPError(404, "No course with given id");
  res.status(200).json(course);
};

export const deleteCourse = async (req, res) => {
  const deleted = await coursesRepository.deleteCourse(req.params.id);
  if (deleted === 0) throw new HTTPError(404, "No course with given id");
  res.sendStatus(204);
};