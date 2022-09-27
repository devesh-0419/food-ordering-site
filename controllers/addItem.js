const FoodItem = require('../model/foodItem');

async function addFoodItem(item){
    let newItem=new FoodItem(item);
    let result= await newItem.save();

     return result;
}

module.exports=addFoodItem;