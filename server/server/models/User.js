const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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

const User = mongoose.model('User', UserSchema)
module.exports = User
