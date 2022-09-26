const mongoose = require("mongoose");

const addtionalDetailsSchema = new mongoose.Schema({
 userStatus:{type:String},
 previousResults:{
   type:Array
 }
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minlength: 3,
  },
  email: {
    required: [true, "e-mail address required"],
    unique: [true, "existing email addresss "],
    type: String,
    lowercase: true,
  },
  AddtionalDetailsArr: {
    type: Array,
    addtionalDetailsSchema
  },
});
const User = mongoose.model("User", UserSchema);

module.exports = { User, addtionalDetailsSchema };
