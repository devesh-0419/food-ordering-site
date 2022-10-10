const mongoose=require('mongoose');

const AuthSchema=new mongoose.Schema(
   {
    
    name:{
        type:String,
        unique:true,
        required:[true, 'name required'],
        minlength:3

    }, 
    email:{
        required:[true, 'e-mail address required'],
        unique:[true,'existing email addresss '],
        type:String,
        lowercase:true
    },
    password:{
        type:String,
        unique:true,
        required:[true, 'hased password required']
       
    },
   
} 
);
const tempAuthSchema= new mongoose.Schema(
    {
     
    email:{
         required:[true, 'e-mail address required'],
         unique:[true,'existing email addresss '],
         type:String,
         lowercase:true
    },
    otp:{
        required:true,
        type:Number,
        unique:[true,'duplicate otp']
    },
    createdAt: { type: Date, expires: '5m', default: Date.now }
  
    
 });
 
const tempAuth =mongoose.model('tempAuth',tempAuthSchema);
const Auth =mongoose.model('Auth',AuthSchema);

module.exports={Auth,tempAuth};