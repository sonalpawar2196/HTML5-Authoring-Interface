const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  address: String,
  contactEmail: { type: String, required: true },
  contactPhone: String
});

module.exports = mongoose.model('Organization', OrganizationSchema);
