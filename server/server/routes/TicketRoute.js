// routes/ticketRoute.js
const express = require('express');
const ticketController = require('../controllers/ticket');

const router = express.Router();

// This route is for handling GET requests to retrieve details of a specific ticket by its ID
router.get('/:GetTicketId', ticketController.getTicketById);

// This route is for handling PUT requests to update details of a specific ticket by its ID
router.put('/:UpdateTicketId', ticketController.updateTicketById);

// This route is for handling DELETE requests to delete a specific ticket by its ID
router.delete('/:DeleteTicketId', ticketController.deleteTicketById);

// This route is for handling POST requests to add a new ticket
router.post('/CreateTicket', ticketController.createTicket); // Add a new ticket

module.exports = router;
