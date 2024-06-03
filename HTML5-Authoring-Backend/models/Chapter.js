const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
chapterName: String,
  courseID: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  moduleID: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' }
});

module.exports = mongoose.model('Chapter', ChapterSchema);
