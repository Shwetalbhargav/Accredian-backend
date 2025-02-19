const express = require('express');
const { getAllCourses, getCourse, createNewCourse, updateExistingCourse, deleteExistingCourse } = require('../controllers/courseController');

const router = express.Router();

router.get('/courses', getAllCourses);
router.get('/courses/:id', getCourse);
router.post('/courses', createNewCourse);
router.put('/courses/:id', updateExistingCourse);
router.delete('/courses/:id', deleteExistingCourse);

module.exports = router;
