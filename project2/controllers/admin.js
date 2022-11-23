
const User = require('../models/product');

exports.getmainpage=(req,res,next)=>{
    User.findAll().then((Users)=>{
        res.json(Users);
    })
    .catch(err=>console.log(err));
  
};

exports.deleteAddProduct = (req, res, next) => {
    const UserId=parseFloat(req.params.UserId); 
   User.destroy({where:{Key:UserId},force:true})
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};

exports.postAddProduct = (req, res, next) => { 
  let Key=Math.random(); 
  let Username = req.body.Username;
  let Phone_No = req.body.Phone_Number;
  let Email = req.body.Email;
  User.create({
    Key:Key,
    Username: Username, 
    Phone_No: Phone_No,
    Email: Email,
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
};

