// routes/ticketRoute.js
const express = require('express');
const ticketController = require('../controllers/ticket');

const router = express.Router();

// Move the route handling logic here
router.route('/:ticketId')

router.get(ticketController.getTicketById)

router.put(ticketController.updateTicketById)

router.delete(ticketController.deleteTicketById);


module.exports = router;
