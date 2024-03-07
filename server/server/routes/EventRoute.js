const express = require("express");
const router = express.Router();
const Event = require('../controllers/Event');

router.post("/addNewEvent", Event.addNewEvent);
router.put("/:id", Event.updateEvent);
router.get("/getEventDetials/:id",Event.getEventDetials);
router.get('/getEvents', Event.getEvents);
router.get('/getPopularEvent', Event.getPopularEvent);
router.get('/getFeaturedEvent', Event.getFeaturedEvent);
router.get('/getSliderEvent', Event.getSliderEvent);


module.exports = router;