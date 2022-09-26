const mongoose=require('mongoose');

const foodItemSchema= mongoose.Schema({
    name:{
      type:String,
      required:true,
      minlength:1,
      maxlength:255
    },
 category:{
    type:String,
    minlength:1,
    maxlength:255
   },
   region:{
    type:String,
    minlength:1,
    maxlength:255
   },
   tags:{
    type:[String],
    minlength:1,
    maxlength:255
   },
   description:{
    type:String,
    minlength:1,
    maxlength:5000
   },
   price:{
      type : Number,
      required:true
   },
   rating:{
    type : Number
    
   }

    
});


const FoodItem= mongoose.model('FoodItem',foodItemSchema);

module.exports=FoodItem; 