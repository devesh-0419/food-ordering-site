const FoodItem = require('../model/foodItem');

async function addFoodItem(item){
    let newItem=new FoodItem({
        name:item.name,
        price:item.price,
        category:item.category,
        tags:item.tags,
        rating:item.rating,
        region:item.region,
        description:item.description
        });
     await newItem.save();

     return newItem;
}

module.exports=addFoodItem;