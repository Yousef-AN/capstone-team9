const mongoose = require("mongoose");
const User = require("./user");
const Event = require("./event");

const TicketSchema = new mongoose.Schema({
    Ticket: {
        type: Number,
        required: true,
        unique: true,
    },
    EventID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    Quantity: {
        type: Number,
        min: 0,
        required: true,
    },
    PurchasedDate: {
        type: Date,
        required: true,
    }
});

// Create and export the Ticket model
module.exports = mongoose.model("Ticket", TicketSchema);
