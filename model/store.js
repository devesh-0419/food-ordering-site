const mongoose=require('mongoose');
const FoodItem=require('./foodItem');
const storeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:2,
        maxlength:255

    },
    cuisine:{
         type:String
    },
    city:{
        type:String,
        required:true

    },
  dishes_ids:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:'FoodItem'
  }

});

const Store=mongoose.model('Store',storeSchema);



module.exports=Store;