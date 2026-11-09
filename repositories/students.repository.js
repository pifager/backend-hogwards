import { pool } from "../db.js";

export async function getAllStudents() {
  const result = await pool.query("SELECT * FROM students");
  return result.rows;
}

export async function getStudentById(id) {
  const result = await pool.query(
    "SELECT id, name, house, year FROM students WHERE id = $1",
    [id]
  );
  return result.rows[0];
}

export async function createStudent(name, house, year) {
  const result = await pool.query(
    "INSERT INTO students (name, house, year) VALUES ($1, $2, $3) RETURNING id, name, house, year",
    [name, house, year]
  );
  return result.rows[0];
}

export async function updateStudent(id, name, house, year) {
  const result = await pool.query(
    "UPDATE students SET name = $1, house = $2, year = $3 WHERE id = $4 RETURNING id, name, house, year",
    [name, house, year, id]
  );
  return result.rows[0];
}

export async function deleteStudent(id) {
  const result = await pool.query("DELETE FROM students WHERE id = $1", [id]);
  return result.rowCount;
}