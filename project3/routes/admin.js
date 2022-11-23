const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/',adminController.getmainpage);

router.get('/getAnExpense/:ExpenseId',adminController.getAnExpense);


router.delete('/deleteAddExpense/:ExpenseId', adminController.deleteAddExpense);


router.post('/postAddExpense', adminController.postAddExpense);

module.exports = router;