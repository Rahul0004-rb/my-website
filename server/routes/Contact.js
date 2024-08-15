const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Define your routes here
// Example: GET all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
