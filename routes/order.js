const express = require('express');
const Order = require('../model/orders')
const router= express();

router.post('/',async (req,res)=>{
      try {
        let order = new Order(req.body);
        const result = await order.save();
        return res.send(result);
      } catch (e) {
        console.error(e);
      }
});

// get all the previous history of 

// router.get('/',async (req,res)=>{
      
// });


module.exports= router;