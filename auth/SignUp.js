const router = require('express').Router();
const {Auth, tempAuth}=require('../model/AuthSchema');
const {mailSenderFun}=require('../HelperFunctions/MailSenderFunction');

router.route('/').post((req,res)=>{

const users=req.body;

    const newTempAuthUser= new tempAuth({email:users.email,otp:parseInt(Math.random()*999999)});

    Auth.findOne({email:users.email}).then((doc,err)=>{
        if(doc){
            res.json({isDuplicateUser:true,isEmailSent:false});
        }
        else{
            newTempAuthUser.save((error,result)=>{
                if(error){
                    res.json({isDuplicateUser:true,isEmailSent:false})
                }
                else{
                    const mailRes =mailSenderFun(result.email,"verifying sign Up mail",{otp:result.otp,name:users.name});

                    (mailRes)? 
                    res.status(200).json({isDuplicateUser:false,isEmailSent:true}) :
                    res.status(200).json({isDuplicateUser:false,isEmailSent:false});
                }
            })
        }
     });

});
    
  module.exports=router;