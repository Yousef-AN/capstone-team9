const express = require("express");
const router = express.Router();
const User = require('../controllers/user');


router.get("/:id",User.getuserDetials);



module.exports = router;