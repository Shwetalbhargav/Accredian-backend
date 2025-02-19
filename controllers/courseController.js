const { getCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../models/course');

const getAllCourses = async (req, res) => {
  try {
    const courses = await getCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewCourse = async (req, res) => {
  try {
    const course = await createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateExistingCourse = async (req, res) => {
  try {
    const course = await updateCourse(req.params.id, req.body);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteExistingCourse = async (req, res) => {
  try {
    await deleteCourse(req.params.id);
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllCourses, getCourse, createNewCourse, updateExistingCourse, deleteExistingCourse };
