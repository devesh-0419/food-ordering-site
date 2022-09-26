const mongoose=require('mongoose');

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
    // images:{
    //     type:Buffer,
    //     contentType:String
    // },
    city:{
        type:String,
        required:true

    }
});

const Store=mongoose.model('Store',storeSchema);



module.exports=Store;