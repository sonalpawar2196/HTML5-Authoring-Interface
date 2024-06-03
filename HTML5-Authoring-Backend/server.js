const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const mongoose = require('./db');
const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRouter');

const app = express();
app.use(cors({ origin: '*' }));

// Middleware
app.use(bodyParser.json());;

// Use routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/api', courseRoutes); // Course-related routes

// POST endpoint for user login
// POST endpoint for user login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username (assuming username is unique)
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
