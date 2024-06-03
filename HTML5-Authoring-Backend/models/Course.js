const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseName: String,
  courseConfigurations: {
    multiLingual: { type: Boolean, default: false },
    linear: { type: Boolean, default: false },
    resetMultilingual: { type: Boolean, default: false },
    singlePage: { type: Boolean, default: false },
    reloadSinglePageOnScroll: { type: Boolean, default: false },
    microLearning: { type: Boolean, default: false },
    accessibility: { type: Boolean, default: false },
    defaultLanguage: { type: String, default: 'eng' },
    assessmentRetry: { type: Number, default: 1 },
    iAnimation: { type: Boolean, default: false },
    scormVersion: { type: String, enum: ['1.2', '2004'], default: '1.2' },
    xapi: { type: Boolean, default: false },
    cmi5: { type: Boolean, default: false },
    tinCan: { type: Boolean, default: false },
    useLocalStorage: { type: Boolean, default: false }
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  organizationID: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true }
});

module.exports = mongoose.model('Course', CourseSchema);
