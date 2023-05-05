const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  total_expense: {
    type: Number,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  ispremiumuser:{
    type: Boolean,
     allowNull:true,
  },
  
  Expenses: [
      {
        Amount: {
          type: Number,
          required: true
        },
        Description: {
          type: String,
          required: true
        },
        Catogary: {
          type: String,
          required: true
        }
      }
    ],
    Link: [{
      type: String,
    }
  ],
  

});

userSchema.methods.addexpense = function(expenses) {
  this.Expenses.push(expenses)
  this.total_expense=parseInt(this.total_expense) +parseInt(expenses.Amount);
  return this.save();
};

userSchema.methods.deleteExpense = function(ExpenseId) {
  
  const updatedExpenses = this.Expenses.filter(expense => {
    if(expense._id.toString() == ExpenseId.toString()){
      this.total_expense=parseInt(this.total_expense) -parseInt(expense.Amount);
    }
    return expense._id.toString() !== ExpenseId.toString();
  });
  this.Expenses = updatedExpenses;
 
  return this.save();
  
};



module.exports = mongoose.model('User', userSchema);

