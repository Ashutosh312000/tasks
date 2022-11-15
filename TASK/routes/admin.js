const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const addproductcontroller=require('../controller/addproductC');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',addproductcontroller.addproductroute );

// /admin/add-product => POST
router.post('/add-product',addproductcontroller.addpostroute);

module.exports = router;
