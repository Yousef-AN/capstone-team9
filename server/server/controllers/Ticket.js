const Ticket = require('../models/ticket');

// Get ticket details by ticket ID
const getTicketById = async (ticketId) => {
    try {
        const ticket = await Ticket.findOne({ Ticket: ticketId })
            .populate('EventID')
            .populate('UserID');
        
        return ticket;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Create a new ticket
const createTicket = async (ticketData) => {
    try {
        const newTicket = await Ticket.create(ticketData);
        return newTicket;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Update ticket details by ticket ID
const updateTicketById = async (ticketId, updatedData) => {
    try {
        const updatedTicket = await Ticket.findOneAndUpdate(
            { Ticket: ticketId },
            updatedData,
            { new: true } // Return the updated document
        );
        return updatedTicket;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Delete a ticket by ticket ID
const deleteTicketById = async (ticketId) => {
    try {
        const deletedTicket = await Ticket.findOneAndDelete({ Ticket: ticketId });
        return deletedTicket;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    getTicketById,
    createTicket,
    updateTicketById,
    deleteTicketById,
};
