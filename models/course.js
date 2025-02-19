const prisma = require('../config/db');

// Fetch all courses
const getCourses = async () => await prisma.course.findMany();

// Fetch course by ID
const getCourseById = async (id) => await prisma.course.findUnique({ where: { id: parseInt(id) } });

// Create a new course
const createCourse = async (data) => await prisma.course.create({ data });

// Update course
const updateCourse = async (id, data) => await prisma.course.update({ where: { id: parseInt(id) }, data });

// Delete course
const deleteCourse = async (id) => await prisma.course.delete({ where: { id: parseInt(id) } });

module.exports = { getCourses, getCourseById, createCourse, updateCourse, deleteCourse };
