const mongoose=require('mongoose');
const Dishes=require('./dishes');
const storeSchema=new mongoose.Schema({
  owner_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
    minlenght:3,
    maxlength:255
  },
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
    ref:'Dishes'
  },
  pendingOrder:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Order'
  },
  sucessfulOrder:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Order'
  },
  open:{
type:Boolean

  }


});

const Store=mongoose.model('Store',storeSchema);



module.exports=Store;