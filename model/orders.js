const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    restaurantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Store',
        required:true
    },
    dishesIds:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Dishes',
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
