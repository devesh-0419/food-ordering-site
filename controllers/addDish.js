const Dishes = require('../model/dishes');
const Store = require("../model/store");
async function addDishes(item){
    
    let newItem=new Dishes(item);

    let result= await newItem.save();
    let store = await Store.findById({_id:item.restaurant_id}); 
    store.dishes_ids.push(result._id);
    await store.save()
     return result;
}

module.exports=addDishes;