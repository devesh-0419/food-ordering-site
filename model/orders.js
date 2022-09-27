const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    foodItemIds:{
        type:[String],
        required:true
    },
    address:{
        type:String
    },
    price:{
        type:Number
    },
    date:{
        type:Date,
       default:Date.now()
    }
});

const Order = mongoose.model('Orders',orderSchema);

module.exports=Order;
