const mongoose = require("mongoose");

const User = new mongoose.Schema({
    UserID:{
         type:Number,
         required: true,
         unique: true,
    },
    FullName: {
    type: String,
    required: true,
    maxlength: 120,
  },
  UserName: {
    type: String,
    required: true,
    maxlength: 120,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Address: {
    type: String
  },
  PhoneNumber:{
    type:String,
    required:true
  },
  UserType:{
    type:Number,
    required:true
  },
  DateOfBirth:{
    type:Date
  },
  Nationality:{
    type:String
  }
});

module.exports = mongoose.model("User", User);