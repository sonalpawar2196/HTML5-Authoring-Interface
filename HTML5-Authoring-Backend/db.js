const mongoose = require('mongoose');

// MongoDB connection URL
// const mongoURI = 'mongodb://localhost:27017/html5_authoring_db';
const mongoURI = 'mongodb://localhost:27017/authoring_interface_HTML5';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get Mongoose connection
const db = mongoose.connection;

// Handle MongoDB connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the Mongoose instance
module.exports = mongoose;
