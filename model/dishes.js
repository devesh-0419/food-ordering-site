const { required } = require('joi');
const mongoose=require('mongoose');

const dishesSchema=new mongoose.Schema({
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
      type : String,
      required:true
   },
   rating:{
    type : Number
    
   }, 
   restaurant_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Store',
      required:true
   },
   available:{
      type:Boolean,
      default:true,
      
   }

    
});


 

 const Dishes= mongoose.model('Dishes',dishesSchema);

module.exports=Dishes; 