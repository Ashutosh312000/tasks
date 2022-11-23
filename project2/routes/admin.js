const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/',adminController.getmainpage);


router.delete('/deleteAddProduct/:UserId', adminController.deleteAddProduct);


router.post('/postAddProduct', adminController.postAddProduct);

module.exports = router;