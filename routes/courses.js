const { Router} = require('express');
const router = Router();

const {postCourses, getCourse, putCourse, deleteCourse, getCourseByInstructor} = require('../controller/coures');

router.post('/courses', postCourses);
router.get('/courses', getCourse);
router.put('/courses/:id', putCourse);
router.delete('/courses/:id', deleteCourse);
router.get('/courses/instructor/:instructor', getCourseByInstructor);

module.exports = router;