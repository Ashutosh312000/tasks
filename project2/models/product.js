const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const User = sequelize.define('User', { 
  Key:{
    type:Sequelize.STRING,
    allowNull:false
  },
  Username: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  Phone_No: {
    type: Sequelize.INTEGER,
    allowNull:false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull:false,
  },
});

module.exports = User;
