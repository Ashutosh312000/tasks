

exports.downloadfiles=async (req,res,next)=>{
    try{
        
        return res.status(200).json({success:true,files:req.user.Link});
    }
    catch (err){
        console.log(err);
        return res.status(500).json('Something went wrong');
    }
}




