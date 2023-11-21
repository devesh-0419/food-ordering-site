const Dishes = require('../model/dishes');
const addDish= require('../controllers/addDish');
const express = require('express');
const router= express();

// get food items by name and [location (now pending)]
router.get('/getItem', async(req,res)=>{
   try {
      let name = req.query.name||"";
    let items = await Dishes.find({name:{$regex:name, $options:"i"}})
                             .populate('restaurant_id','name city -_id')
                             .select('name price restaurant_id -_id');
   // console.log('req.query', items);
    
    if(items) return res.send(items);
    
    return res.json({message:"no Dishes found by this name.."});
    
    
   } catch (error) {
    console.error(error);
   }


});



router.post('/additem',async(req,res)=>{
      try {

        let item=addDish(req.body);
       if(item) return res.json({message:"item is added to your menu"});

       return res.json({message:"couldn't add item"});
      } catch (e) {
        console.error(e);
      } 
});

router.get('/getfields',(req,res)=>{      //<- to get the fields of Dishes Schema
  const model = Dishes;
    const schemaFields = Object.keys(model.schema.paths);

   return res.json(schemaFields);
})

router.put('/updateitem',async(req,res)=>{

  try {

    let payload = req.body;
    let {_id }= payload;
    let updatedDish = await Dishes.findByIdAndUpdate(_id,
                                              {$set:payload},
                                              {new:true}
      );

      if (!updatedDish) {
        return res.status(404).send('Dish not found');
      }
      else{
        return res.json({updated:true,updatedDish})
      }
    
  } catch (error) {
    return res.json(error.message);
  }

      
});

router.delete('/deleteitem/:id',async(req,res)=>{

  try {
    const {id} = req.params;
  
    const deletedDish = await Dishes.findByIdAndDelete(id);

    if (!deletedDish) {
      return res.status(404).json({dishFound:false});
    }

    return res.json({deleted:true});
    
  } catch (error) {
   return res.status(500).send('Error deleting dish: ' + err.message);
  }

  

})




module.exports=router;