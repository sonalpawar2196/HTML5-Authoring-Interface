const express = require('express');
const jwt = require('jsonwebtoken');
const Course = require('../models/Course');

const router = express.Router();

// Create course route (requires authentication)
router.post('/courses', authenticateUser, async (req, res) => {
  const { courseName, learnerName, courseConfigurations } = req.body;
  const userId = req.user.userId; // Extracted from authenticated token

  try {
    // Create a new course associated with the logged-in user
    const newCourse = new Course({
      courseName,
      learnerName,
      courseConfigurations,
      author: userId // Reference to the logged-in user
    });

    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (err) {
    console.error('Error creating course:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware to authenticate user based on JWT
function authenticateUser(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    req.user = { userId: decoded.userId };
    next();
  });
}

module.exports = router;
