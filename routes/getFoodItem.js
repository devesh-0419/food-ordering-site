const FoodItem = require('../model/foodItem');
const express = require('express');
const router= express();

router.get('/',async(req,res)=>{
      try {
        let items = await FoodItem.find({restaurantId:req.body.restaurantId});
        if(items) return res.send(items);

        return res.send("No food item found..");
      } catch (e) {
        console.error(e); 
      }
});

module.exports=router;