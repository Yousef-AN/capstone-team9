const mongoose = require("mongoose");
const User = require("./User");
const Event = require("./Event");

const TicketSchema = new mongoose.Schema({
    Ticket:{
        type:Number,
        required: true,
        unique: true,
    },
    EventID:{
         type:[Event.Schema],
         required: true,
         default:{}
    },
    UserID:{
        type: [User.Schema],
        required: true,
        default:{}
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



const Ticket = mongoose.model('Ticket', TicketSchema)
module.exports = Ticket
