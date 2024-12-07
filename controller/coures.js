const pool = require('../config/db');


// POST /courses
const postCourses = async (req, res) => {
    const { course_name, instructor, schedule, max_students } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO courses (course_name, instructor, schedule, max_students) VALUES ($1, $2, $3, $4) RETURNING *',
        [course_name, instructor, schedule, max_students]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}


// GET /courses
const getCourse = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM courses');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

// Put /courses/:id
const putCourse= async (req, res) => {
    const { id } = req.params;
    const { course_name, instructor, schedule, max_students } = req.body;
    try {
      const result = await pool.query(
        'UPDATE courses SET course_name = $1, instructor = $2, schedule = $3, max_students = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *',
        [course_name, instructor, schedule, max_students, id]
      );
      if (result.rows.length === 0) return res.status(404).json({ error: 'Course not found' });
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // DELETE /courses/:id
  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM courses WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) return res.status(404).json({ error: 'Course not found' });
      res.json({ message: 'Course deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

// Get /courses/instructor/:instructor
const getCourseByInstructor = async (req, res) => {
    const { instructor } = req.params;
    try {
      const result = await pool.query('SELECT * FROM courses WHERE instructor = $1', [instructor]);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  

module.exports = { 
    postCourses,
    getCourse,
    putCourse ,
    deleteCourse,
    getCourseByInstructor
};