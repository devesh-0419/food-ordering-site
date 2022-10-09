const FoodItem = require('../model/foodItem');
const Store = require("../model/store");
async function addFoodItem(item){
    
    let newItem=new FoodItem(item);

    let result= await newItem.save();
    let store = await Store.findById({_id:item.restaurant_id}); 
    store.dishes_ids.push(result._id);
    await store.save()
     return result;
}

module.exports=addFoodItem;