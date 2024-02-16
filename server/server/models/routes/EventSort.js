const express = require ("express");
const {CreateEvent,getEvent,UpdateEvent}= require("../../controllers/Event")

const router = express.Router();

router.get("/:id",getEvent);
module.exports = router;

