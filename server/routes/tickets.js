const express = require('express');
const router = express.Router();
const { bookTicket, getUserTickets } = require('../controllers/ticketController');
const auth = require('../middleware/auth');

router.post('/book', auth, bookTicket);
router.get('/user', auth, getUserTickets);

module.exports = router;
