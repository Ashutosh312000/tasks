const jwt=require('jsonwebtoken'); 

const User=require('../models/user');

exports.authenticate=async (req,res,next)=>{
    try{
        const token=req.header('Authorization');
        const user=jwt.verify(token,process.env.JWT_TOKEN); 
        const userobject=await User.findById(user.userId)
        req.user=userobject;
        next();
}
catch(err){
    console.log(err)
}
}