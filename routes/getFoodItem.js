const FoodItem = require('../model/foodItem');
const express = require('express');
const router= express();

// get food items by name and [location (now pending)]
router.post('/', async(req,res)=>{
   try {
    let items =await FoodItem.find({name:{$regex:req.query.name, $options:"i"}})
                             .populate('restaurant_id','name city -_id')
                             .select('name price restaurant_id -_id');
    //console.log('req.query', req.q);
    
    if(items) return res.send(items);
    
    return res.json({message:"no Dishes found by this name.."});
    
    
   } catch (error) {
    console.error(error);
   }


});





router

module.exports=router;