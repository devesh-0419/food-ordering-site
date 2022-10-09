const Store= require('../model/store');
//const addStore= require('../controllers/addStore');

const express = require('express');
const router= express();

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

router.post('/addStore',async (req,res)=>{
   
       try {
        let store= new Store(req.body);
        await store.save();
        return res.json(store);
       } catch (error) {
        return console.error(error);
       }
});

module.exports=router;