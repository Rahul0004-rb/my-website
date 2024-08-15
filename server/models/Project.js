const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    client: { type: String },
});

module.exports = mongoose.model('Project', ProjectSchema);
