const mongoose = require("mongoose");
const User = require("./User");
const Event = require("./Event");

const Ticket = new mongoose.Schema({
    Ticket:{
        type:Number,
        required: true,
        unique: true,
    },
    EventID:{
         type:Event,
         required: true
    },
    UserID:{
        type:User,
        required: true
   },
   Quantity:{
    type:Number,
    min: 0,
    required:true
  },
  PurchasedDate :{
    type:Date,
    required:true
  }
});

module.exports = mongoose.model("Ticket", Ticket);