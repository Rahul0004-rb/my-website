const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Define your routes here
// Example: GET all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
