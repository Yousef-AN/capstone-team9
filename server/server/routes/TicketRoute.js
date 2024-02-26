// routes/ticketRoute.js
const express = require('express');
const ticketController = require('../controllers/ticket');

const router = express.Router();

// This route is for handling GET requests to retrieve details of a specific ticket by its ID
router.get('/:GetticketId', ticketController.getTicketById);

// This route is for handling PUT requests to update details of a specific ticket by its ID
router.put('/:UpdateticketId', ticketController.updateTicketById);

// This route is for handling DELETE requests to delete a specific ticket by its ID
router.delete('/:DeleteticketId', ticketController.deleteTicketById);


module.exports = router;
