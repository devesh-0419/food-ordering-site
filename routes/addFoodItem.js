const express = require('express');
const addItem=require("../controllers/addItem")
const router= express();


router.post('/',async(req,res)=>{
      try {

        let item=addItem(req.body);
          res.send(item);
      } catch (e) {
        console.error(e);
      }
});
module.exports=router;