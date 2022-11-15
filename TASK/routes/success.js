const path = require('path');

const express = require('express');

const successcontroller=require('../controller/successC');

const router = express.Router();

router.get('/success',successcontroller.successroute);

module.exports = router;
