const express = require('express');
const router = express.Router();
const auth = require('./auth'); // Correct path

// Your route handlers
router.get('/', auth, (req, res) => {
    res.send('Events route');
});

module.exports = router;
