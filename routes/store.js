const Store= require('../model/store');
//const addStore= require('../controllers/addStore');

const express = require('express');
const { validate } = require('../model/dishes');
const router= express();


// GET All Stores detail

router.post('/getStore',async (req,res)=>{
     try {
       // console.log('req.cookies', req.headers.city);
        let stores= await Store.find({city:req.body.city});
        if(stores) return res.json(stores);
        
        return res.send('No store listed');
     } catch (error) {
        console.error(error);
     }
});

// Store by id and all the Dishes it serves

router.post('/getStore/:id',async (req,res)=>{

  try {
    let store = await Store.findById(req.params.id)
    .populate('dishes_ids','name price -_id')
    .select('name city dishes_ids -_id');

if(store){
return res.json(store);
}

return res.json({message:'Store not found...'});
  } catch (error) {
    console.error(error);
  }
  
});


// add store in the site

router.post('/addStore',async (req,res)=>{
   
       try {
  
        let store= new Store(req.body);
        await store.save();
        return res.json(store);
       } catch (error) {
        return console.error(error);
       }
});



// Update Store info by id
     // write code 


module.exports=router;