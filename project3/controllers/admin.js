
const Expense = require('../models/expense');

exports.getmainpage=(req,res,next)=>{
    Expense.findAll().then((Expense)=>{
        res.json(Expense);
    })
    .catch(err=>console.log(err));
  
};

exports.getAnExpense=(req,res,next)=>{
    const ExpenseId=parseFloat(req.params.ExpenseId); 
    Expense.findAll({where:{Key:ExpenseId},force:true})
    .then((Expense)=>{
        res.json(Expense);
    })
    .catch(err=>console.log(err));
  
};

exports.deleteAddExpense = (req, res, next) => {
    const ExpenseId=parseFloat(req.params.ExpenseId); 
   Expense.destroy({where:{Key:ExpenseId},force:true})
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};

exports.postAddExpense = (req, res, next) => { 
  let Key=Math.random(); 
  let Amount = req.body.Amount;
  let Discription = req.body.Discription;
  let Catogary = req.body.Catogary;
  Expense.create({
    Key:Key,
    Amount: Amount, 
    Discription: Discription,
    Catogary: Catogary,
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
};

