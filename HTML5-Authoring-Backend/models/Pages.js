const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
  chapterID: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
  moduleID: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  courseID: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  templateID: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' }
  
});

module.exports = mongoose.model('Page', PageSchema);
