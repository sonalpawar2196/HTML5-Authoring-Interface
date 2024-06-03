const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
    templateID: String,
    name: String,
    components: [
      {
        componentName: String,
        canBeUsedInTemplate: Number
      }
    ]
  });

  module.exports = mongoose.model('Template', TemplateSchema);
