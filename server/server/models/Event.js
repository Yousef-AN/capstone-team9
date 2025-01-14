const mongoose = require("mongoose");
const User = require("./User");

const Event = new mongoose.Schema({
    EventID:{
         type:Number,
         required: true,
         unique: true,
    },
    Title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  StartDateTime: {
    type: Date,
    required: true,
  },
  EndDateTime: {
    type: String,
    required: true,
  },
  Creator: {
    type: User
  },
  Category:{
    type:String,
    required:true
  },
  Location:{
    type:String,
    required:true
  },
  Image:{
    type:String,
    required:true
  },
  Featured:{
    type:Boolean
  },
  Poplar:{
    type:Boolean
  },
  Price:{
    type:Number,
    min: 0,
    required:true
  },
  NumberOfAttendees:{
    type:Number,
    min: 0,
    required:true
  }
});

module.exports = mongoose.model("Event", Event);