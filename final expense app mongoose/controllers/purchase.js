

const Order=require('../models/order');

const jwt=require('jsonwebtoken') 

const Razorpay=require('razorpay')



const isstringvalid=(string)=>{
    if(string=="" || string==undefined){
        return true;
    }
    else{
        return false;
    }
}

function generateAccessToken(id,name,ispremiumuser){ 
    return jwt.sign({userId:id,name:name,ispremiumuser},process.env.JWT_TOKEN)
}

exports.getpremiummembership= async (req, res, next)=>{
    try{
        var rzp=new Razorpay({ 
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        })
        const amount=2500; 

        rzp.orders.create({amount,currency:"INR"},async(err,order)=>{ 
           
            if(err){
                throw new Error(JSON.stringify(err));
            }
           else{
            const orders=new Order({orderid:order.id, status:'PENDING',userId:req.user._id})
                await orders.save();
        
                return res.status(201).json({order:orders,key_id:rzp.key_id})
           }
        
        })
        
    }
    catch(err){
        console.log(err);
        res.status(403).json({message:'something went wrong',error:err})
    }
}

exports.updatetransactionstatus=async(req,res,next)=>{ 
    try{
        const user=req.user;
        const {payment_id,order_id}=req.body;

        const updateorder=await Order.findOneAndUpdate({orderid: order_id},
            {paymentid:payment_id,status:"SUCCESSFULL"} ); 
       
        user.ispremiumuser=true; 
           await user.save();
        
            return res.status(202).json({success:true,message :"Transaction Successful",token:generateAccessToken(user._id,user.Name,user.ispremiumuser)})
        
    }
    catch(err){
        console.log(err);
        throw new Error(err);
    }
}

exports.updatetransactionstatusfailed=async(req,res,next)=>{ 
    try{
        await Order.findOneAndUpdate({orderid: req.body.order_id},
            {status:"Failed"} ); 
  
            return res.status(202).json({success:true,message :"Transaction Failed"});
      
    }
    catch(err){
        console.log(err);
        throw new Error(err);
    }
}