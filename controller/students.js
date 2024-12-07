const pool = require('../config/db');

// Post /students
const postStudents = async (req, res) => {
    const { name, age, major } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO students (name, age, major) VALUES ($1, $2, $3) RETURNING *',
        [name, age, major]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

// Get /students
const getStudents = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM students');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

// Post /enrollments
const postEnrollments = async (req, res) => {
    const { student_id, course_id } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO enrollments (student_id, course_id) VALUES ($1, $2) RETURNING *',
        [student_id, course_id]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = {
    postStudents,
    getStudents,
    postEnrollments
}