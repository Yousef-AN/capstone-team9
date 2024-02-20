const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectToMongo = require("./db/connection");

const Ticket = require("./models/ticket");
require("dotenv").config();

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Endpoint to get ticket details by ticket ID
app.get("/api/tickets/:ticketId", async (req, res) => {
  const ticketId = req.params.ticketId;

  try {
      // Find the ticket in the database by Ticket ID
      const ticket = await Ticket.findOne({ Ticket: ticketId })
          .populate("EventID") // Populate the referenced Event model
          .populate("UserID"); // Populate the referenced User model

      if (!ticket) {
          return res.status(404).json({ error: "Ticket not found", code: 404 });
      }

      // Return the ticket details as JSON
      res.json({
          ticket: {
              Ticket: ticket.Ticket,
              Event: ticket.EventID,
              User: ticket.UserID,
              Quantity: ticket.Quantity,
              PurchasedDate: ticket.PurchasedDate,
          }
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error", code: 500 });
  }
});

// Test endpoint
app.get("/test", (req, res) => {
    res.json(
        "Server connection to client works!! Good Luck with your capstones :D"
    );
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
