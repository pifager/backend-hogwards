import * as teachersRepository from "../repositories/teachers.repository.js";
import * as coursesRepository from "../repositories/courses.repository.js";
import { HTTPError } from "../errors/HTTPError.js";

export const getAllTeachers = async (req, res) => {
  const teachers = await teachersRepository.getAllTeachers();
  res.status(200).json(teachers);
};

export const getTeacherById = async (req, res) => {
  const teacher = await teachersRepository.getTeacherById(req.params.id);
  if (!teacher) throw new HTTPError(404, "No teacher with given id");
  res.status(200).json(teacher);
};

export const createTeacher = async (req, res) => {
  const { name, house } = req.body;
  const teacher = await teachersRepository.createTeacher(name, house);
  res.status(201).json(teacher);
};

export const updateTeacher = async (req, res) => {
  const { name, house } = req.body;
  const teacher = await teachersRepository.updateTeacher(req.params.id, name, house);
  if (!teacher) throw new HTTPError(404, "No teacher with given id");
  res.status(200).json(teacher);
};

export const deleteTeacher = async (req, res) => {
  const courses = await coursesRepository.getCoursesByTeacherId(req.params.id);
  if (courses.length > 0) {
    throw new HTTPError(409, "Teacher is assigned to a course and cannot be deleted");
  }
  const deleted = await teachersRepository.deleteTeacher(req.params.id);
  if (deleted === 0) throw new HTTPError(404, "No teacher with given id");
  res.sendStatus(204);
};