import * as studentsRepository from "../repositories/students.repository.js";
import { HTTPError } from "../errors/HTTPError.js";

export const getAllStudents = async (req, res) => {
  const students = await studentsRepository.getAllStudents();
  res.status(200).json(students);
};

export const getStudentById = async (req, res) => {
  const student = await studentsRepository.getStudentById(req.params.id);
  if (!student) throw new HTTPError(404, "No student with given id");
  res.status(200).json(student);
};

export const createStudent = async (req, res) => {
  const { name, house, year } = req.body;
  const student = await studentsRepository.createStudent(name, house, year);
  res.status(201).json(student);
};

export const updateStudent = async (req, res) => {
  const { name, house, year } = req.body;
  const student = await studentsRepository.updateStudent(req.params.id, name, house, year);
  if (!student) throw new HTTPError(404, "No student with given id");
  res.status(200).json(student);
};

export const deleteStudent = async (req, res) => {
  const deleted = await studentsRepository.deleteStudent(req.params.id);
  if (deleted === 0) throw new HTTPError(404, "No student with given id");
  res.sendStatus(204);
};