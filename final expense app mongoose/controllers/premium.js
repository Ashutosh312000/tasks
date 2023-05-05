
const User=require('../models/user');

exports.getuserleaderboard=async (req,res,next)=>{
   
    try{
        const userleaderboardDetails= await User.find({},
        ['type','total_expense','Name'], 
        {
            sort:{
                total_expense: -1 
            }
        }
        )
        res. status (200).json(userleaderboardDetails)
    }
    

    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}