const Project = require('../models/Project');

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
