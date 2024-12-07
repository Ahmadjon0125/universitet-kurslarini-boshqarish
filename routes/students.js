const { Router} = require('express');
const router = Router();

const {postStudents,getStudents, postEnrollments} = require('../controller/students')

router.post('/students', postStudents);
router.get('/students', getStudents);
router.post('/enrollments', postEnrollments);

module.exports = router;