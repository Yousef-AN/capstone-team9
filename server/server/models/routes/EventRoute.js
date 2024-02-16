const express = require("express");
const router = express.Router();
const Event = require('../../controllers/Event')

router.post("/", Event.addNewEvent);
router.put("/:id", Event.updateEvent);
router.get('/', Event.getEvents);
router.get('/', Event.getPopularEvent);
router.get('/', Event.getPopularEvent);
router.get('/', Event.getSliderEvent);