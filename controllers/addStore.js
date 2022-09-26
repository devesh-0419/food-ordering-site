const Store = require('../model/store');

async function addStore(details){
    let store = new Store({
        name:details.name,
        cuisine:details.cuisine,
        city:details.city
    });

    let result=await store.save();

    return result;
}

module.exports = addStore;