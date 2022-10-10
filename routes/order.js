const express = require('express');
const Order = require('../model/orders');
const Store= require('../model/store');
const router= express();

// sucessfull order
router.post('/',async (req,res)=>{
      try {

        let order = new Order(req.body);
        const result = await order.save();
       // console.log('order._id', order._id);
        let restaurant= await Store.findById(req.body.restaurantId);
        console.log('restaurant', restaurant);
     //   restaurant.pendingOrder.push(order._id);
        await restaurant.save();
        return res.send(result);
      } catch (e) {
        console.error(e);
      }
});

// get all the previous history of 

// router.get('/',async (req,res)=>{
      
// });


module.exports= router;