
const User=require('../models/user');                            
const Forgotpassword=require('../models/forgotpassword')
const sgMail = require('@sendgrid/mail')
const bcrypt=require('bcrypt');



exports.forgotpassword=async (req,res,next)=>{
    try{
        const email=req.body.email;
        const user=await User.findOne({Email:email});
        if(user!=null){
        const forgotpass=new Forgotpassword({active:true,userId:user._id,})
            await forgotpass.save();
        sgMail.setApiKey(process.env.SET_API_KEY)

        const msg = {
          to: `${email}`,
          from: 'ashutoshsharma.rrps@gmail.com', 
          subject: 'Password Reset Link',
          text: 'Password Reset Now',
          html: `<a href="http://localhost:3000/password/resetpassword/${forgotpass._id}">Reset password</a>`,
         
        }
        
       const response= await sgMail.send(msg)
          
            return res.status(response[0].statusCode).json({message: 'Link to reset password sent to your mail ', success: true});
        }
        else {
            return res.status(201).json({message:'User Does Not Exist'})
        }        
    }
    catch(err){
        console.log(err);
        return res.json({ message: err, sucess: false });
    }
}


exports.resetpassword =async (req, res) => {
    const id =  req.params.id;
    Forgotpassword.findById(id)
    .then(forgotpasswordrequest => { 
        if(forgotpasswordrequest!=null && forgotpasswordrequest.active==true){
            forgotpasswordrequest.active=false;
             forgotpasswordrequest.save()
             .then(()=>{
                res.status(200).send(`<html>
                                    <script>
                                        function formsubmitted(e){
                                            e.preventDefault();
                                        }
                                    </script>
                                    <form action="/password/updatepassword/${id}" method="get">
                                        <label for="newpassword">Enter New password</label>
                                        <input name="newpassword" type="password" required></input>
                                        <button>reset password</button>
                                    </form>
                                </html>`
                                )
            res.end() 
             })
            .catch((err)=>{
                console.log(err);
            })

            

        }
        else{
            res.status(500).json('Link Is Expired');
        }
    })
    .catch(err =>{
        console.log(err);
    })
}

exports.updatepassword = async(req, res) => {
    try {
        const { newpassword } = req.query; 
        const { resetpasswordid } = req.params;
        Forgotpassword.findById(resetpasswordid).then(resetpasswordrequest => { 
            User.findById(resetpasswordrequest.userId).then(user => {
                
                if(user!=null) { 
                    const saltRounds = 10;
                    bcrypt.genSalt(saltRounds, function(err, salt) {
                        if(err){
                            console.log(err);
                            throw new Error(err);
                        }
                        bcrypt.hash(newpassword, salt, function(err, hash) {
                            if(err){
                                console.log(err);
                                throw new Error(err);
                            }
                            user.Password= hash; 
                             user.save().then(()=>{
                                res.status(201).json({message: 'Successfuly update the new password'})
                            })
                            
                            
                        });
                    });
            } else{
                return res.status(404).json({ error: 'No user Exists', success: false})
            }
            })
        })
    } catch(error){
        return res.status(403).json({ error, success: false } )
    }

}
