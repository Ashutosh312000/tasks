const path = require('path');

const express = require('express');

const shopcontroller=require('../controller/shopC');

const router = express.Router();

router.get('/',shopcontroller.shoproute);

module.exports = router;
