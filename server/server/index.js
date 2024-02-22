
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectToMongo = require('./db/connection');

// Import the ticket route
const ticketRoute = require('./routes/TicketRoute');

require('dotenv').config();

const app = express();
const port = process.env.NODE_ENV === 'test' ? process.env.NODE_LOCAL_TEST_PORT : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Use the ticket route
app.use('/api/tickets', ticketRoute);
// Add other route usage...

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
