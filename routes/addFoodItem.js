const express = require('express');
const addItem=require("../controllers/addItem")
const router= express();


router.post('/',async(req,res)=>{
      try {
        
        let item=addItem(req.body);
       if(item) return res.json({message:"item is added to your menu"});

       return res.json({message:"couldn't add item"});
      } catch (e) {
        console.error(e);
      } 
});
module.exports=router;