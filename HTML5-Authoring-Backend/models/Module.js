const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
  courseID: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  moduleName: String
});

module.exports = mongoose.model('Module', ModuleSchema);
