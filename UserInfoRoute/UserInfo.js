const router = require("express").Router();
const { User } = require("../model/UserDataSchema");

router.route("/get").post(async (req, res) => {
    const logUser = req.body;
try {

   const user = await User.findOne({ email: logUser.email })
   console.log('user', user)
    if(user){
           return res.json(user);
  
        }
        else{
          return  res.status(400).json({ isUserLoggedIn: false, isCorrectPassword: false, isNetworkError: true })
        }
 
} catch (error) {
    console.log(err);
        return res.status(400).json({ isUserLoggedIn: false, isNetworkError: true });
}
    
      
});

router.post('/add', async (req,res)=>{
    
    try {
        
        
            let user= await User.findOne({email:req.body.email});
            if(user) return res.send('user already registered..');
        
            user =new User({
                name: req.body.name,
                email:req.body.email,
            });
        
        
               await user.save();
           return res.send(`${user.name} register sucessfull`);


    } catch (error) {

        console.error('error while registering new user',error.message);

       return res.send(error.message)
    }

});

module.exports = router; 