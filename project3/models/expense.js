const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const Expense = sequelize.define('Expense', { 
  Key:{
    type:Sequelize.STRING,
    allowNull:false
  },
  Amount: {
    type: Sequelize.INTEGER,
    allowNull:false,
  },
  Discription: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  Catogary: {
    type: Sequelize.STRING,
    allowNull:false,
  },
});

module.exports = Expense;
