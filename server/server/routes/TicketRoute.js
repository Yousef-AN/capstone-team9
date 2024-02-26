// routes/ticketRoute.js
const express = require('express');
const ticketController = require('../controllers/ticket');

const router = express.Router();

// Get ticket details by ticket ID
router.get('/:ticketId', async (req, res) => {
    const ticketId = req.params.ticketId;

    try {
        const ticket = await ticketController.getTicketById(ticketId);

        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found', code: 404 });
        }

        // Return the ticket details as JSON
        res.json({
            ticket: {
                Ticket: ticket.Ticket,
                Event: ticket.EventID,
                User: ticket.UserID,
                Quantity: ticket.Quantity,
                PurchasedDate: ticket.PurchasedDate,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', code: 500 });
    }
});

// Create a new ticket
router.post('/', async (req, res) => {
    const ticketData = req.body;

    try {
        const newTicket = await ticketController.createTicket(ticketData);

        // Return the newly created ticket details as JSON
        res.json({
            ticket: newTicket,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', code: 500 });
    }
});

// Update ticket details by ticket ID
router.put('/:ticketId', async (req, res) => {
    const ticketId = req.params.ticketId;
    const updatedData = req.body;

    try {
        const updatedTicket = await ticketController.updateTicketById(ticketId, updatedData);

        // Return the updated ticket details as JSON
        res.json({
            ticket: updatedTicket,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', code: 500 });
    }
});

// Delete a ticket by ticket ID
router.delete('/:ticketId', async (req, res) => {
    const ticketId = req.params.ticketId;

    try {
        const deletedTicket = await ticketController.deleteTicketById(ticketId);

        // Return the deleted ticket details as JSON
        res.json({
            ticket: deletedTicket,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', code: 500 });
    }
});

module.exports = router;
