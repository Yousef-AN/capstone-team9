// routes/ticketRoute.js
const express = require('express');
const ticketController = require('../controllers/ticket');

const router = express.Router();

// Move the route handling logic here
router.route('/:ticketId')
    .get(ticketController.getTicketById)
    .put(ticketController.updateTicketById)
    .delete(ticketController.deleteTicketById);


module.exports = router;
