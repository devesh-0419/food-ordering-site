const router = require('express').Router();
const bcrypt = require('bcrypt');
const {tempAuth,Auth} =require('../model/AuthSchema');
const {User} =require('../model/UserDataSchema');

router.route('/').post( (req,res)=>{
    const UserSideData=req.body;
    
    tempAuth.findOne({otp:UserSideData.otp}).then((doc,err)=>{
        if(true){  

            const newAuth= new Auth({name:UserSideData.name,email:UserSideData.email,password:UserSideData.paasword});
            const newUser= new User({name:UserSideData.name,email:UserSideData.email});

        bcrypt.hash(UserSideData.password, 12, function (error, hashPassword){
            if(error){
            res.status(500).json({isUserSignedUp:false});
            }
            else{   

                newAuth.password=hashPassword;
                //anonmoyous  async fun for saving User data
                (async()=>{
                try{
                    const res1=await newUser.save();
                    const res0=await newAuth.save();
                    res.status(201).json({isUserSignedUp:true,isResendOtp:false,isOtpWrong:false})  
                }
                catch(errors){ 
                    console.log(errors);
                    res.status(400).json({isUserSignedUp:false,isResendOtp:true,isOtpWrong:true}); 
                }
                })();
            }
        }); 

    }
    else{
        res.status(400).json({isUserSignedUp:false,isResendOtp:true,isOtpWrong:true});
    }

    })

 
})


module.exports=router;