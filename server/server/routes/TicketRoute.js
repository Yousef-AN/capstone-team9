// routes/ticketRoute.js
const express = require('express');
const ticketController = require('../controllers/ticket');

const router = express.Router();

// Move the route handling logic here
router.get('/:ticketId', ticketController.getTicketById);
// Add other ticket routes...

module.exports = router;
