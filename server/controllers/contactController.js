const Contact = require('../models/Contact');

// @route   POST api/contact
// @desc    Submit contact form
// @access  Public
exports.submitContactForm = async (req, res) => {
    const { name, email, message, phone } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            message,
            phone
        });

        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
