const express = require('express')
const cors =require('cors')
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');
const app = express();
require('dotenv').config();

const getFoodItem=require('./routes/getFoodItem');
const addFoodItem=require('./routes/addFoodItem');

// app.use(cors({
//      origin: ["http://localhost:3000", "https://dine-it.netlify.app","http://192.168.43.230:3000/"]
//     ,
//     credentials:true
// }));

app.use(cookieParser())
 
app.use(express.json());

app.use('/api/v1/getItem',getFoodItem);
app.use('/api/v1/addItem',addFoodItem);

 
mongoose.connect(process.env.DB_URI).then(
    app.listen(process.env.PORT|| 8443 ,(err)=>{
        if(err) console.error(err)
        else
           console.log(`server is up and running on port ${process.env.PORT} or 8443 and db connected`);
           
    })  
    
).catch(err=>console.error(err));
                    
   